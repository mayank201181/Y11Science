import crypto from "crypto";
import { head, put } from "@vercel/blob";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MEMORY_CACHE = new Map<string, ArrayBuffer>();
const MAX_CACHE_ITEMS = 96;

const EDGE_VOICE_MAP: Record<string, string> = {
  sonia: "en-GB-SoniaNeural",
  libby: "en-GB-LibbyNeural",
  maisie: "en-GB-MaisieNeural",
  ryan: "en-GB-RyanNeural",
  ava: "en-US-AvaMultilingualNeural",
};

function escapeXml(raw: string): string {
  return raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function isLikelyAudio(buf: ArrayBuffer): boolean {
  if (!buf || buf.byteLength < 256) return false;
  const b = new Uint8Array(buf);
  if (b[0] === 0x3c || b[0] === 0x7b) return false;
  return true;
}

async function synthesizeEdgeNeural(text: string, voiceKey: string): Promise<ArrayBuffer> {
  const voiceName = EDGE_VOICE_MAP[voiceKey] || "en-GB-SoniaNeural";
  const tts = new MsEdgeTTS();
  const fmt =
    (OUTPUT_FORMAT as Record<string, OUTPUT_FORMAT>).AUDIO_24KHZ_96KBITRATE_MONO_MP3 ||
    (OUTPUT_FORMAT as Record<string, OUTPUT_FORMAT>).AUDIO_24KHZ_48KBITRATE_MONO_MP3 ||
    OUTPUT_FORMAT.WEBM_24KHZ_16BIT_MONO_OPUS;

  await tts.setMetadata(voiceName, fmt);
  const { audioStream } = tts.toStream(escapeXml(text));

  const chunks: Buffer[] = [];
  await new Promise<void>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Edge neural synthesis timed out")), 6000);
    audioStream.on("data", (chunk: Buffer | Uint8Array) => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    });
    audioStream.on("end", () => {
      clearTimeout(timer);
      resolve();
    });
    audioStream.on("close", () => {
      clearTimeout(timer);
      resolve();
    });
    audioStream.on("error", (err: Error) => {
      clearTimeout(timer);
      reject(err);
    });
  });

  const merged = Buffer.concat(chunks);
  const out = merged.buffer.slice(merged.byteOffset, merged.byteOffset + merged.byteLength);
  if (!isLikelyAudio(out)) {
    throw new Error("Empty neural audio stream");
  }
  return out;
}

async function synthesizeOpenAI(text: string, voiceKey: string): Promise<ArrayBuffer> {
  const model = process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts";
  const oaVoice = voiceKey === "ryan" ? "fable" : voiceKey === "libby" ? "nova" : "coral";
  const payload: Record<string, unknown> = {
    model,
    voice: oaVoice,
    input: text,
    response_format: "mp3",
  };
  if (model.includes("gpt-4o")) {
    payload.instructions =
      "Speak like a warm, encouraging British sixth-form science tutor explaining an IGCSE concept clearly to a 16-year-old student.";
  }
  const res = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(7000),
  });
  if (!res.ok) throw new Error(`OpenAI HTTP ${res.status}`);
  const buf = await res.arrayBuffer();
  if (!isLikelyAudio(buf)) throw new Error("Invalid OpenAI audio");
  return buf;
}

async function synthesizeElevenLabs(text: string, voiceKey: string): Promise<ArrayBuffer> {
  const voiceId =
    voiceKey === "ryan"
      ? "JBFqnCBsd6RMkjVDRZzb"
      : process.env.ELEVENLABS_VOICE_ID || "Xb7hH8MSUJpSbSDYk0k2";
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: "POST",
    headers: {
      "xi-api-key": process.env.ELEVENLABS_API_KEY || "",
      "Content-Type": "application/json",
      Accept: "audio/mpeg",
    },
    body: JSON.stringify({
      text,
      model_id: "eleven_turbo_v2_5",
      voice_settings: { stability: 0.48, similarity_boost: 0.78, style: 0.2, use_speaker_boost: true },
    }),
    signal: AbortSignal.timeout(7000),
  });
  if (!res.ok) throw new Error(`ElevenLabs HTTP ${res.status}`);
  const buf = await res.arrayBuffer();
  if (!isLikelyAudio(buf)) throw new Error("Invalid ElevenLabs audio");
  return buf;
}

async function getAudioBuffer(rawText: string, rawVoice: string): Promise<ArrayBuffer> {
  const text = rawText.trim().slice(0, 1000);
  const voiceKey = (rawVoice || "sonia").toLowerCase().replace(/^studio:/, "");
  const providerTag = process.env.ELEVENLABS_API_KEY
    ? "el"
    : process.env.OPENAI_API_KEY
      ? "oa"
      : "edge-v2";

  const hash = crypto
    .createHash("sha1")
    .update(`${providerTag}|${voiceKey}|${text}`)
    .digest("hex")
    .slice(0, 24);

  if (MEMORY_CACHE.has(hash)) {
    return MEMORY_CACHE.get(hash)!;
  }

  const blobPath = `tts-v3/${hash}.mp3`;
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const existing = await head(blobPath);
      if (existing?.url) {
        const cached = await fetch(existing.url, { signal: AbortSignal.timeout(3500) });
        if (cached.ok) {
          const buf = await cached.arrayBuffer();
          if (isLikelyAudio(buf)) {
            MEMORY_CACHE.set(hash, buf);
            return buf;
          }
        }
      }
    } catch {}
  }

  let audio: ArrayBuffer | null = null;
  if (process.env.ELEVENLABS_API_KEY) {
    try {
      audio = await synthesizeElevenLabs(text, voiceKey);
    } catch {}
  }
  if (!audio && process.env.OPENAI_API_KEY) {
    try {
      audio = await synthesizeOpenAI(text, voiceKey);
    } catch {}
  }
  if (!audio) {
    audio = await synthesizeEdgeNeural(text, voiceKey);
  }

  if (MEMORY_CACHE.size >= MAX_CACHE_ITEMS) {
    const oldest = MEMORY_CACHE.keys().next().value;
    if (oldest) MEMORY_CACHE.delete(oldest);
  }
  MEMORY_CACHE.set(hash, audio);

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    put(blobPath, audio, {
      access: "public",
      addRandomSuffix: false,
      contentType: "audio/mpeg",
    }).catch(() => {});
  }

  return audio;
}

function buildAudioResponse(buf: ArrayBuffer): Response {
  return new Response(buf, {
    status: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Length": String(buf.byteLength),
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=31536000, s-maxage=31536000, immutable",
    },
  });
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  if (url.searchParams.get("probe") === "1") {
    return Response.json({
      available: true,
      provider: process.env.ELEVENLABS_API_KEY
        ? "elevenlabs"
        : process.env.OPENAI_API_KEY
          ? "openai"
          : "msedge-neural",
    });
  }

  const text = (url.searchParams.get("text") || "").trim();
  const voice = (url.searchParams.get("voice") || "sonia").trim();
  if (!text) {
    return Response.json({ error: "Missing text" }, { status: 400 });
  }

  try {
    const buf = await getAudioBuffer(text, voice);
    return buildAudioResponse(buf);
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "TTS synthesis failed" },
      { status: 502 },
    );
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const text = String(body?.text || "").trim();
  const voice = String(body?.voice || "sonia").trim();
  if (!text) {
    return Response.json({ error: "Missing text" }, { status: 400 });
  }
  try {
    const buf = await getAudioBuffer(text, voice);
    return buildAudioResponse(buf);
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "TTS synthesis failed" },
      { status: 502 },
    );
  }
}
