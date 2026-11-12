import { createHash } from "node:crypto";
import { head, put } from "@vercel/blob";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Optional Server-Side Cloud Studio Neural TTS endpoint for Y11Science on Vercel.
 * Uses only built-in Node crypto and @vercel/blob (zero extra npm dependencies).
 * When OPENAI_API_KEY or ELEVENLABS_API_KEY is not set, Studio Masterclasses
 * automatically run the built-in Kokoro-82M Neural AI Studio Voice in the browser.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  if (url.searchParams.get("probe") === "1") {
    const provider = process.env.ELEVENLABS_API_KEY
      ? "elevenlabs"
      : process.env.OPENAI_API_KEY
        ? "openai"
        : null;
    return Response.json({ available: Boolean(provider), provider });
  }
  return Response.json({ ok: true });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const text = String(body?.text || "").trim().slice(0, 1200);
  const voicePref = String(body?.voice || "coral").trim();
  if (!text) {
    return Response.json({ error: "Missing text" }, { status: 400 });
  }

  const provider = process.env.ELEVENLABS_API_KEY
    ? "elevenlabs"
    : process.env.OPENAI_API_KEY
      ? "openai"
      : null;

  if (!provider) {
    return Response.json(
      { error: "No cloud TTS key configured; client uses built-in Kokoro-82M Neural AI voice." },
      { status: 503 },
    );
  }

  const hash = createHash("sha1")
    .update(`${provider}|${voicePref}|${text}`)
    .digest("hex")
    .slice(0, 24);
  const blobPath = `tts-v2/${hash}.mp3`;

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const existing = await head(blobPath);
      if (existing?.url) {
        const cachedRes = await fetch(existing.url);
        if (cachedRes.ok) {
          const buf = await cachedRes.arrayBuffer();
          return new Response(buf, {
            headers: {
              "Content-Type": "audio/mpeg",
              "Cache-Control": "public, max-age=31536000, immutable",
            },
          });
        }
      }
    } catch {
      // Cache miss — proceed to synthesize
    }
  }

  try {
    let mp3Bytes: ArrayBuffer;

    if (provider === "elevenlabs") {
      const voiceId = process.env.ELEVENLABS_VOICE_ID || "Xb7hH8MSUJpSbSDYk0k2";
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
          voice_settings: {
            stability: 0.48,
            similarity_boost: 0.78,
            style: 0.22,
            use_speaker_boost: true,
          },
        }),
      });
      if (!res.ok) throw new Error(`ElevenLabs HTTP ${res.status}`);
      mp3Bytes = await res.arrayBuffer();
    } else {
      const model = process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts";
      const oaVoice = ["nova", "shimmer", "fable", "coral", "sage", "alloy"].includes(voicePref)
        ? voicePref
        : "coral";
      const payload: Record<string, unknown> = {
        model,
        voice: oaVoice,
        input: text,
        response_format: "mp3",
      };
      if (model.includes("gpt-4o")) {
        payload.instructions =
          "Speak like a warm, encouraging, articulate British sixth-form science tutor explaining an IGCSE concept clearly and conversationally to a 16-year-old student.";
      }
      const res = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`OpenAI TTS HTTP ${res.status}`);
      mp3Bytes = await res.arrayBuffer();
    }

    if (process.env.BLOB_READ_WRITE_TOKEN && mp3Bytes.byteLength > 200) {
      put(blobPath, Buffer.from(mp3Bytes), {
        access: "public",
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: "audio/mpeg",
      }).catch(() => {});
    }

    return new Response(mp3Bytes, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "TTS synthesis failed" },
      { status: 502 },
    );
  }
}
