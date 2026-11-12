// usage: node render.mjs <timeline.json> <out.mp4|stills-dir> [--stills t1,t2,...] [--workers N] [--from s --to s]
import { createRequire } from "module"; import fs from "fs"; import path from "path"; import { spawn } from "child_process";
const require = createRequire(import.meta.url); const { chromium } = require("playwright");
const args = process.argv.slice(2); const tlPath = args[0], out = args[1];
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const tl = JSON.parse(fs.readFileSync(tlPath, "utf8")); const fps = tl.fps;
const here = path.dirname(new URL(import.meta.url).pathname);
const browser = await chromium.launch({ args: ["--disable-gpu-vsync"] });
async function newPage() {
  const p = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  p.on("pageerror", e => console.error("PAGEERROR", e.message)); p.on("console", m => { if (m.type() === "error") console.error("CONSOLE", m.text()); });
  await p.goto("file://" + path.join(here, "renderer.html")); await p.evaluate(() => document.fonts.ready);
  await p.evaluate(tl => window.setup(tl), tl); return p;
}
const grab = (p, i, q) => p.evaluate(([i, q]) => { window.drawFrame(i); return document.getElementById("c").toDataURL("image/jpeg", q); }, [i, q]).then(u => Buffer.from(u.split(",")[1], "base64"));
if (opt("--stills")) {
  fs.mkdirSync(out, { recursive: true }); const p = await newPage();
  for (const s of opt("--stills").split(",")) { const f = Math.round(parseFloat(s) * fps); fs.writeFileSync(path.join(out, `f_${String(f).padStart(6, "0")}.jpg`), await grab(p, f, 0.9)); }
  await browser.close(); process.exit(0);
}
const from = Math.round((parseFloat(opt("--from") ?? "0")) * fps), to = Math.round((parseFloat(opt("--to") ?? String(tl.duration))) * fps);
const N = parseInt(opt("--workers") ?? "4"); const per = Math.ceil((to - from) / N); const tmp = out + ".parts"; fs.mkdirSync(tmp, { recursive: true });
const t0 = Date.now(); let done = 0;
await Promise.all([...Array(N).keys()].map(async w => {
  const a = from + w * per, b = Math.min(to, a + per); if (a >= b) return; const p = await newPage();
  const ff = spawn("ffmpeg", ["-y", "-v", "error", "-f", "image2pipe", "-framerate", String(fps), "-c:v", "mjpeg", "-i", "-", "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-pix_fmt", "yuv420p", "-tune", "animation", path.join(tmp, `p${w}.mp4`)], { stdio: ["pipe", "inherit", "inherit"] });
  for (let i = a; i < b; i++) { const buf = await grab(p, i, 0.93); if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once("drain", r)); if (++done % 600 === 0) console.log(`${done}/${to - from} frames, ${((Date.now() - t0) / 1000).toFixed(0)}s`); }
  ff.stdin.end(); await new Promise(r => ff.on("close", r));
}));
await browser.close();
fs.writeFileSync(path.join(tmp, "list.txt"), [...Array(N).keys()].filter(w => fs.existsSync(path.join(tmp, `p${w}.mp4`))).map(w => `file 'p${w}.mp4'`).join("\n"));
console.log("frames done in", ((Date.now() - t0) / 1000).toFixed(0), "s");
