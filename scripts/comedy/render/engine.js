// BODY CORPORATE — deterministic canvas renderer. drawFrame(i) paints frame i of the timeline.
const W = 1280, H = 720;
const cv = document.getElementById("c");
const ctx = cv.getContext("2d");
let TL = null, FPS = 24;

// ───────────── utils ─────────────
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const lerp = (a, b, k) => a + (b - a) * k;
const ease = k => (k = clamp(k), k * k * (3 - 2 * k));
const easeOutBack = k => { k = clamp(k); const c = 1.7; return 1 + (c + 1) * Math.pow(k - 1, 3) + c * Math.pow(k - 1, 2); };
function hash(n) { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); }
function strHash(s) { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) | 0; return Math.abs(h); }
function shade(hex, f) { // f<0 darker, f>0 lighter
  const n = parseInt(hex.slice(1), 16); let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  if (f < 0) { r *= 1 + f; g *= 1 + f; b *= 1 + f; } else { r += (255 - r) * f; g += (255 - g) * f; b += (255 - b) * f; }
  return `rgb(${r | 0},${g | 0},${b | 0})`;
}
const INK = "#1d1b33";
function rr(x, y, w, h, r) { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); }
function font(sz, w = 600, fam = "Fredoka") { ctx.font = `${w} ${sz}px ${fam}, "Noto Color Emoji", sans-serif`; }
function text(s, x, y, sz, col = INK, align = "left", w = 600, fam = "Fredoka") {
  font(sz, w, fam); ctx.fillStyle = col; ctx.textAlign = align; ctx.textBaseline = "middle"; ctx.fillText(s, x, y);
}
function wrap(s, maxW, sz, w = 600) {
  font(sz, w); const words = s.split(" "); const lines = []; let cur = "";
  for (const wd of words) { const t = cur ? cur + " " + wd : wd; if (ctx.measureText(t).width > maxW && cur) { lines.push(cur); cur = wd; } else cur = t; }
  if (cur) lines.push(cur); return lines;
}
function textBox(s, x, y, maxW, sz, col = INK, align = "left", w = 600, lh = 1.22) {
  const ls = wrap(s, maxW, sz, w); ls.forEach((l, i) => text(l, x, y + i * sz * lh, sz, col, align, w)); return ls.length * sz * lh;
}
function arrow(x1, y1, x2, y2, col = INK, lw = 4, head = 12) {
  ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = lw; ctx.lineCap = "round";
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
  const a = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath(); ctx.moveTo(x2, y2); ctx.lineTo(x2 - head * Math.cos(a - 0.45), y2 - head * Math.sin(a - 0.45));
  ctx.lineTo(x2 - head * Math.cos(a + 0.45), y2 - head * Math.sin(a + 0.45)); ctx.closePath(); ctx.fill();
}
function circle(x, y, r, fill, stroke, lw = 3) { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); if (fill) { ctx.fillStyle = fill; ctx.fill(); } if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw; ctx.stroke(); } }
function emoji(e, x, y, sz) { ctx.fillStyle = "#000"; ctx.font = `${sz}px "Noto Color Emoji"`; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(e, x, y); }
function pill(label, x, y, sz, bg, fg = "#fff", align = "left") {
  font(sz, 700); const w = ctx.measureText(label).width + sz * 1.1; const h = sz * 1.6;
  const x0 = align === "center" ? x - w / 2 : align === "right" ? x - w : x;
  rr(x0, y - h / 2, w, h, h / 2); ctx.fillStyle = bg; ctx.fill(); text(label, x0 + w / 2, y + 1, sz, fg, "center", 700); return w;
}

// ───────────── characters ─────────────
const CH = {
  CORTEX:   { name: "CORTEX", role: "Conscious brain · 'CEO'", col: "#f49ac1", shape: "brain", eyes: 2, h: 170, acc: ["tie"] },
  RELAY:    { name: "RELAY", role: "Relay neurone", col: "#ffd23f", shape: "neurone", eyes: 1, h: 180, acc: ["cap"] },
  HYPO:     { name: "HYPO", role: "Hypothalamus", col: "#9b7bff", shape: "round", eyes: 2, h: 120, acc: ["glasses", "badge37"] },
  ADREN:    { name: "ADRENALINE", role: "Hormone · intern", col: "#ff6b35", shape: "spiky", eyes: 3, h: 130, acc: ["cape"] },
  CIRC:     { name: "CIRCULAR", role: "Iris muscle", col: "#2ec4b6", shape: "ring", eyes: 2, h: 140, acc: [] },
  RADIAL:   { name: "RADIAL", role: "Iris muscle", col: "#ff9f1c", shape: "star", eyes: 2, h: 150, acc: [] },
  CILIARY:  { name: "CILIARY", role: "Ciliary muscle", col: "#e63946", shape: "muscle", eyes: 2, h: 170, acc: ["headband"] },
  LIGS:     { name: "LIGAMENTS", role: "Suspensory ligaments", col: "#c9c9d6", shape: "strings", eyes: 2, h: 160, acc: [] },
  LENS:     { name: "LENS", role: "Lens", col: "#9ad1ff", shape: "jelly", eyes: 2, h: 130, acc: [] },
  SWEAT:    { name: "SWEAT GLAND", role: "Evaporative cooling dept.", col: "#4cc9f0", shape: "drop", eyes: 2, h: 130, acc: [] },
  ARTERIOLE:{ name: "ARTERIOLE", role: "Blood vessel", col: "#d62839", shape: "tube", eyes: 2, h: 160, acc: [] },
  INSULIN:  { name: "INSULIN", role: "Pancreas hormone", col: "#7bdcb5", shape: "bean", eyes: 2, h: 140, acc: ["bun", "labeller"] },
  GLUCAGON: { name: "GLUCAGON", role: "Pancreas hormone", col: "#c3a6ff", shape: "bean", eyes: 2, h: 140, acc: ["messy", "snack"] },
  LIVER:    { name: "LIVER", role: "Glycogen warehouse", col: "#8c2f39", shape: "liver", eyes: 2, h: 160, acc: ["hardhat"] },
  PIT:      { name: "PITUITARY", role: "'Master gland'", col: "#ffb4a2", shape: "pea", eyes: 2, h: 110, acc: ["stalk", "crown"] },
  ADH:      { name: "ADH", role: "Hormone · courier", col: "#4361ee", shape: "round", eyes: 2, h: 130, acc: ["courier"] },
  KIDNEY:   { name: "KIDNEY", role: "Filtration plant manager", col: "#a4443b", shape: "kidney", eyes: 2, h: 160, acc: ["hivis", "mug"] },
  BASIL:    { name: "BASIL", role: "Basil plant", col: "#52b788", shape: "plant", eyes: 2, h: 200, acc: [] },
};
const SPEAKER_COL = {
  NARR: "#8d99ae", HOST: "#ff70a6", MUM: "#f15bb5", TEACHER: "#6c757d", ALL: "#ffd166",
  ...Object.fromEntries(Object.entries(CH).map(([k, v]) => [k, v.col])),
};
const SPEAKER_NAME = { NARR: "NARRATOR", HOST: "MEERA", MUM: "MUM", TEACHER: "MS TAN", ALL: "EVERYONE",
  ...Object.fromEntries(Object.entries(CH).map(([k, v]) => [k, v.name])) };

function bodyPath(shape, w, h, t, amp) {
  ctx.beginPath();
  const wob = (i) => Math.sin(t * 3 + i) * 1.5;
  switch (shape) {
    case "round": case "jelly": case "drop": case "pea": {
      if (shape === "drop") { ctx.moveTo(0, -h); ctx.bezierCurveTo(w * 0.15, -h * 0.75, w * 0.55, -h * 0.5, w * 0.5, -h * 0.28); ctx.bezierCurveTo(w * 0.5, 0, -w * 0.5, 0, -w * 0.5, -h * 0.28); ctx.bezierCurveTo(-w * 0.55, -h * 0.5, -w * 0.15, -h * 0.75, 0, -h); break; }
      ctx.ellipse(0, -h / 2, w / 2 + wob(1), h / 2 + wob(2), 0, 0, Math.PI * 2); break;
    }
    case "bean": case "brain": case "liver": case "kidney": {
      const k = shape === "kidney" ? 0.22 : 0.08;
      ctx.moveTo(-w / 2, -h * 0.45);
      ctx.bezierCurveTo(-w / 2, -h * 1.05, w / 2, -h * 1.05, w / 2, -h * 0.5);
      ctx.bezierCurveTo(w / 2, -h * 0.05, w * 0.3, 0, 0, 0);
      ctx.bezierCurveTo(-w * 0.3, 0, -w / 2 - w * k, -h * 0.05, -w / 2, -h * 0.45); break;
    }
    case "neurone": case "tube": case "muscle": case "plant": case "strings": {
      const r = shape === "muscle" ? w * 0.45 : w * 0.5;
      ctx.roundRect(-w / 2, -h, w, h, [r, r, w * 0.3, w * 0.3]); break;
    }
    case "spiky": {
      const n = 14; for (let i = 0; i <= n * 2; i++) {
        const a = (i / (n * 2)) * Math.PI * 2; const rr2 = (i % 2 ? 0.42 : 0.55) + (i % 2 ? 0 : Math.sin(t * 20 + i) * 0.02 * (1 + amp * 3));
        const x = Math.cos(a) * w * rr2, y = -h / 2 + Math.sin(a) * h * rr2; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      } ctx.closePath(); break;
    }
    case "star": {
      const n = 10; for (let i = 0; i <= n * 2; i++) {
        const a = (i / (n * 2)) * Math.PI * 2; const r2 = i % 2 ? 0.38 : 0.52;
        const x = Math.cos(a) * w * r2, y = -h / 2 + Math.sin(a) * h * r2; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      } ctx.closePath(); break;
    }
    case "ring": { ctx.ellipse(0, -h / 2, w / 2, h / 2, 0, 0, Math.PI * 2); ctx.ellipse(0, -h / 2, w * 0.2, h * 0.2, 0, 0, Math.PI * 2, true); break; }
  }
}

// st: {t, amp, talking, emote, look (-1..1), lensFat, artWidth, bend}
function drawChar(id, x, y, s, st) {
  const d = CH[id]; if (!d) return;
  const t = st.t, amp = st.talking ? st.amp : 0, em = st.emote || "";
  const ph = strHash(id) % 100;
  let w = d.h * 0.78, h = d.h;
  if (d.shape === "neurone" || d.shape === "tube" || d.shape === "strings") w = d.h * 0.48;
  if (d.shape === "plant") w = d.h * 0.32;
  if (id === "LENS") { w = d.h * lerp(0.55, 1.05, st.lensFat ?? 0.6); }
  if (id === "ARTERIOLE") { w = d.h * lerp(0.28, 0.62, st.artWidth ?? 0.5); }
  ctx.save();
  let shakeX = 0; if (em === "panic") shakeX = Math.sin(t * 60) * 3;
  if (st.shiver) shakeX += Math.sin(t * 70) * 2;
  const jump = em === "shock" && st.talking ? Math.abs(Math.sin(st.lt * 6)) * 8 * Math.exp(-st.lt * 2) : 0;
  const bob = Math.sin(t * 2.2 + ph) * 2.5 + amp * 5 + jump;
  ctx.translate(x + shakeX, y);
  ctx.scale(s * (1 - amp * 0.02), s * (1 + amp * 0.035));
  ctx.translate(0, -bob);
  // shadow
  ctx.save(); ctx.translate(0, bob); ctx.fillStyle = "rgba(0,0,0,0.18)"; ctx.beginPath(); ctx.ellipse(0, 4, w * 0.55, 10, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();

  // pre-body accessories
  if (d.acc.includes("cape")) { ctx.fillStyle = "#e5383b"; ctx.beginPath(); ctx.moveTo(-w * 0.3, -h * 0.75); ctx.quadraticCurveTo(-w * 0.9 - Math.sin(t * 8) * 10, -h * 0.3, -w * 0.7, 0); ctx.lineTo(w * 0.2, -h * 0.1); ctx.closePath(); ctx.fill(); }
  if (d.acc.includes("stalk")) { ctx.strokeStyle = shade(d.col, -0.3); ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(0, -h); ctx.quadraticCurveTo(Math.sin(t * 2) * 10, -h - 40, 0, -h - 90); ctx.stroke(); }
  if (d.acc.includes("courier")) { rr(-w * 0.75, -h * 0.85, w * 0.5, h * 0.5, 6); ctx.fillStyle = "#ffbe0b"; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.stroke(); text("ADH", -w * 0.5, -h * 0.6, 14, INK, "center", 700); }

  // arms
  const armCol = shade(d.col, -0.25);
  const gest = st.talking ? Math.sin(t * 7) * 0.5 * (0.3 + amp) : 0;
  const armY = -h * 0.45;
  for (const side of [-1, 1]) {
    let ang = side * 0.9 + (side === 1 ? -gest : gest * 0.3);
    if (em === "panic") ang = side * (2.4 + Math.sin(t * 25 + side) * 0.3);
    if (em === "proud" && side === 1) ang = 2.3 + Math.sin(t * 4) * 0.1;
    if (d.shape === "muscle" && em === "proud") ang = side * 2.2;
    const ax = side * w * 0.42, ay = armY;
    const L = d.shape === "muscle" ? 55 : 42;
    const ex = ax + Math.sin(ang) * L, ey = ay + Math.cos(ang) * L;
    ctx.strokeStyle = armCol; ctx.lineWidth = d.shape === "muscle" ? 16 : 8; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(ex, ey); ctx.stroke();
    circle(ex, ey, d.shape === "muscle" ? 12 : 8, d.col, INK, 2.5);
    if (d.shape === "muscle" && em === "proud") circle(ax + Math.sin(ang) * L * 0.5, ay + Math.cos(ang) * L * 0.5 - 8, 13, armCol);
    if (side === 1 && d.acc.includes("labeller") && em !== "panic") { rr(ex - 6, ey - 22, 26, 18, 4); ctx.fillStyle = "#ffd60a"; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 2; ctx.stroke(); }
    if (side === 1 && d.acc.includes("snack")) emoji("🍪", ex + 4, ey - 6, 22);
    if (side === -1 && d.acc.includes("mug")) emoji("☕", ex - 4, ey - 6, 24);
  }

  // body
  bodyPath(d.shape, w, h, t, amp);
  const g = ctx.createLinearGradient(0, -h, 0, 0); g.addColorStop(0, shade(d.col, 0.18)); g.addColorStop(1, shade(d.col, -0.12));
  ctx.fillStyle = id === "LENS" ? "rgba(154,209,255,0.85)" : g; ctx.fill("evenodd");
  ctx.strokeStyle = INK; ctx.lineWidth = 4; ctx.stroke();

  // shape details
  if (d.shape === "brain") { ctx.strokeStyle = shade(d.col, -0.25); ctx.lineWidth = 3; for (let i = 0; i < 5; i++) { ctx.beginPath(); const yy = -h * 0.95 + i * 12; ctx.moveTo(-w * 0.3 + i * 8, yy + 10); ctx.bezierCurveTo(-w * 0.1, yy - 8, w * 0.1, yy + 18, w * 0.3 - i * 6, yy + 4); ctx.stroke(); } }
  if (d.shape === "neurone") { ctx.strokeStyle = shade(d.col, -0.3); ctx.lineWidth = 5; for (let i = -2; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(i * 9, -h + 6); ctx.lineTo(i * 18 + Math.sin(t * 3 + i) * 3, -h - 26); ctx.lineTo(i * 26, -h - 34); ctx.stroke(); } }
  if (d.shape === "plant") { for (const [lx, ly, a] of [[-1, 0.75, -0.7], [1, 0.62, 0.7], [-1, 0.45, -0.9], [1, 0.3, 0.6]]) { ctx.save(); ctx.translate(lx * w * 0.45, -h * ly); ctx.rotate(a + Math.sin(t * 2 + ly * 9) * 0.06); ctx.beginPath(); ctx.ellipse(lx * 26, 0, 30, 14, 0, 0, Math.PI * 2); ctx.fillStyle = "#74c69d"; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.stroke(); ctx.restore(); }
    rr(-w * 1.1, -10, w * 2.2, 50, 8); ctx.fillStyle = "#bc6c25"; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.stroke(); }
  if (d.shape === "strings") { ctx.strokeStyle = "#8d8da8"; ctx.lineWidth = 3; for (let i = -1; i <= 1; i++) { ctx.beginPath(); for (let k = 0; k <= 10; k++) { const yy = -h + k * h / 10; const xx = i * w * 0.25 + Math.sin(k * 1.4 + t * 2) * 5; k ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); } }
  if (d.shape === "tube") { ctx.fillStyle = "rgba(255,255,255,0.25)"; rr(-w * 0.35, -h * 0.95, w * 0.18, h * 0.85, 6); ctx.fill(); }
  if (d.shape === "muscle") { ctx.strokeStyle = shade(d.col, -0.3); ctx.lineWidth = 2; for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.moveTo(-w * 0.3 + i * w * 0.12, -h * 0.25); ctx.lineTo(-w * 0.32 + i * w * 0.12, -h * 0.05); ctx.stroke(); } }

  // face
  const fy = (d.shape === "plant" ? -h * 0.88 : d.shape === "drop" ? -h * 0.33 : d.shape === "ring" ? -h * 0.88 : -h * 0.6);
  const fx = d.shape === "ring" ? 0 : 0;
  const n = d.eyes; const er = Math.min(15, w * 0.13) * (em === "shock" || em === "panic" ? 1.25 : 1);
  const spacing = er * 2.3;
  const look = clamp(st.look ?? 0, -1, 1);
  const blinkPhase = (t + ph * 0.37) % 4.1; const blink = blinkPhase < 0.12;
  for (let i = 0; i < n; i++) {
    const ex = fx + (i - (n - 1) / 2) * spacing; const ey = fy - (n === 3 && i === 1 ? er * 0.8 : 0);
    if (blink && em !== "panic") { ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(ex - er, ey); ctx.lineTo(ex + er, ey); ctx.stroke(); continue; }
    circle(ex, ey, er, "#fff", INK, 2.5);
    const pr = er * (em === "shock" || em === "panic" ? 0.32 : 0.48);
    circle(ex + look * er * 0.4, ey + 1, pr, INK);
    circle(ex + look * er * 0.4 - pr * 0.35, ey - pr * 0.35, pr * 0.3, "#fff");
    if (em === "sleepy" || em === "smug") { ctx.fillStyle = shade(d.col, -0.1); ctx.beginPath(); ctx.arc(ex, ey, er + 1, Math.PI, 0); ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(ex - er, ey); ctx.lineTo(ex + er, ey); ctx.stroke(); }
    if (em === "angry" || em === "annoyed" || em === "intense") { ctx.strokeStyle = INK; ctx.lineWidth = 4; const sl = (i - (n - 1) / 2) >= 0 ? 1 : -1; ctx.beginPath(); ctx.moveTo(ex - er * 1.1, ey - er * 1.25 - sl * (em === "angry" ? 6 : 3)); ctx.lineTo(ex + er * 1.1, ey - er * 1.25 + sl * (em === "angry" ? 6 : 3)); ctx.stroke(); }
  }
  // accessories on face
  if (d.acc.includes("glasses")) { ctx.strokeStyle = INK; ctx.lineWidth = 3; for (let i = 0; i < 2; i++) { const ex = (i - 0.5) * spacing; ctx.beginPath(); ctx.moveTo(ex - er * 1.2, fy - er * 1.1); ctx.lineTo(ex + er * 1.3, fy - er * 1.3); ctx.lineTo(ex + er * 1.1, fy + er * 0.9); ctx.lineTo(ex - er * 1.1, fy + er); ctx.closePath(); ctx.stroke(); } }
  // mouth
  const my = fy + er * 1.6 + (d.shape === "drop" ? -2 : 0);
  ctx.strokeStyle = INK; ctx.lineWidth = 3.5; ctx.lineCap = "round";
  if (st.talking && amp > 0.08) {
    const mh = 3 + amp * 15; const mw = 10 + amp * 6;
    ctx.beginPath(); ctx.ellipse(0, my + mh / 2, mw, mh, 0, 0, Math.PI * 2); ctx.fillStyle = "#5b1a2a"; ctx.fill(); ctx.stroke();
    ctx.save(); ctx.clip(); circle(0, my + mh * 1.4, mw * 0.7, "#ff7b9c"); ctx.restore();
  } else if (em === "shock" || em === "panic") {
    ctx.beginPath(); ctx.ellipse(0, my + 6, 8, 10, 0, 0, Math.PI * 2); ctx.fillStyle = "#5b1a2a"; ctx.fill(); ctx.stroke();
  } else if (em === "angry" || em === "annoyed") {
    ctx.beginPath(); ctx.moveTo(-12, my + 6); ctx.quadraticCurveTo(0, my - 2, 12, my + 6); ctx.stroke();
  } else if (em === "smug") {
    ctx.beginPath(); ctx.moveTo(-12, my + 2); ctx.quadraticCurveTo(4, my + 10, 14, my - 2); ctx.stroke();
  } else {
    ctx.beginPath(); ctx.moveTo(-12, my); ctx.quadraticCurveTo(0, my + 10, 12, my); ctx.stroke();
  }
  // top accessories
  if (d.acc.includes("tie")) { ctx.fillStyle = "#3a0ca3"; ctx.beginPath(); ctx.moveTo(-8, -h * 0.28); ctx.lineTo(8, -h * 0.28); ctx.lineTo(5, -h * 0.05); ctx.lineTo(0, 0 - h * 0.0); ctx.lineTo(-5, -h * 0.05); ctx.closePath(); ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 2; ctx.stroke(); }
  if (d.acc.includes("cap")) { ctx.fillStyle = "#3a86ff"; ctx.beginPath(); ctx.arc(0, -h * 0.98, w * 0.42, Math.PI, 0); ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.stroke(); rr(0, -h * 0.98 - 4, w * 0.62, 9, 4); ctx.fill(); ctx.stroke(); }
  if (d.acc.includes("headband")) { rr(-w * 0.45, -h * 0.86, w * 0.9, 14, 6); ctx.fillStyle = "#fff"; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 2.5; ctx.stroke(); }
  if (d.acc.includes("hardhat") || d.acc.includes("hivis")) {
    if (d.acc.includes("hardhat")) { ctx.fillStyle = "#ffd60a"; ctx.beginPath(); ctx.arc(0, -h * 0.86, w * 0.3, Math.PI, 0); ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.stroke(); rr(-w * 0.38, -h * 0.87, w * 0.76, 8, 4); ctx.fill(); ctx.stroke(); }
    if (d.acc.includes("hivis")) { ctx.fillStyle = "#ff9500"; rr(-w * 0.35, -h * 0.32, w * 0.7, h * 0.28, 8); ctx.fill(); ctx.fillStyle = "#e9ff70"; ctx.fillRect(-w * 0.35, -h * 0.22, w * 0.7, 7); }
  }
  if (d.acc.includes("bun")) circle(0, -h * 1.0, 16, shade(d.col, -0.3), INK, 3);
  if (d.acc.includes("messy")) { ctx.strokeStyle = shade(d.col, -0.4); ctx.lineWidth = 4; for (let i = -3; i <= 3; i++) { ctx.beginPath(); ctx.moveTo(i * 8, -h * 0.93); ctx.lineTo(i * 12 + Math.sin(i * 3) * 8, -h * 1.08); ctx.stroke(); } }
  if (d.acc.includes("crown")) { ctx.fillStyle = "#ffd60a"; ctx.beginPath(); ctx.moveTo(-18, -h * 0.9); ctx.lineTo(-18, -h * 1.05); ctx.lineTo(-9, -h * 0.97); ctx.lineTo(0, -h * 1.1); ctx.lineTo(9, -h * 0.97); ctx.lineTo(18, -h * 1.05); ctx.lineTo(18, -h * 0.9); ctx.closePath(); ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 2.5; ctx.stroke(); }
  if (d.acc.includes("badge37")) { circle(w * 0.25, -h * 0.25, 13, "#fff", INK, 2); text("37", w * 0.25, -h * 0.25, 12, "#d00000", "center", 700); }
  if (d.acc.includes("courier")) { ctx.fillStyle = "#ffbe0b"; ctx.beginPath(); ctx.arc(0, -h * 0.95, w * 0.38, Math.PI, 0); ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.stroke(); }
  if (em === "panic" || st.sweaty) { for (let i = 0; i < 2; i++) { const k = ((t * 1.3 + i * 0.5) % 1); ctx.globalAlpha = 1 - k; emoji("💦", w * 0.45 + i * 10, -h * 0.9 + k * 30, 20); ctx.globalAlpha = 1; } }
  ctx.restore();
}

// ───────────── the human (Meera) ─────────────
function drawHost(x, y, s, act, lt, t, amp, talking) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  const skin = "#b9784e", hair = "#1b1b1b", shirt = "#ffffff", skirt = "#283d6e";
  let shake = 0; if (act === "yank") shake = Math.sin(lt * 50) * 6 * Math.exp(-lt * 1.2); if (act === "cold") shake = Math.sin(t * 60) * 2.5;
  const runBob = act === "run" ? Math.abs(Math.sin(t * 9)) * 10 : 0;
  ctx.translate(shake, -runBob - (talking ? amp * 3 : 0));
  ctx.fillStyle = "rgba(0,0,0,0.18)"; ctx.beginPath(); ctx.ellipse(0, runBob + 4, 70, 12, 0, 0, Math.PI * 2); ctx.fill();
  // legs
  ctx.strokeStyle = skin; ctx.lineWidth = 16; ctx.lineCap = "round";
  const lg = act === "run" || act === "walk" ? Math.sin(t * (act === "run" ? 9 : 5)) * 0.4 : 0;
  for (const sd of [-1, 1]) { ctx.beginPath(); ctx.moveTo(sd * 16, -110); ctx.lineTo(sd * 16 + Math.sin(lg * sd) * 40, -8); ctx.stroke(); }
  // body
  rr(-46, -260, 92, 120, 26); ctx.fillStyle = act === "run" || act === "hot" ? "#ffd166" : shirt; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 4; ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-50, -150); ctx.lineTo(50, -150); ctx.lineTo(62, -100); ctx.lineTo(-62, -100); ctx.closePath(); ctx.fillStyle = skirt; ctx.fill(); ctx.stroke();
  // arms
  // arm angle: 0 = hanging down, + = swung outward/up on that side, − = across body
  let ra = 0.3, la = 0.3, rL = 95, lL = 95;
  if (act === "reach") { ra = 0.3 + 0.65 * ease(lt / 0.6); rL = 115; }
  if (act === "touch") { ra = 0.95; rL = 115; }
  if (act === "yank") ra = lerp(0.95, 2.9, ease(lt / 0.15)) - 0.15 * Math.sin(lt * 20) * Math.exp(-lt * 2);
  if (act === "phone") { ra = -1.6; rL = 70; }
  if (act === "drink") { ra = -2.5; rL = 78; }
  if (act === "order") ra = 1.2;
  if (act === "squint") { ra = -2.5; la = -2.5; rL = lL = 80; }
  if (act === "cold") { ra = -1.2; la = -1.2; }
  if (act === "run") { ra = Math.sin(t * 9) * 0.7; la = -Math.sin(t * 9) * 0.7; }
  if (act === "shock") { ra = 2.6; la = 2.6; }
  let handR = [0, 0];
  ctx.strokeStyle = skin; ctx.lineWidth = 15;
  for (const [side, a, L] of [[-1, la, lL], [1, ra, rL]]) {
    const sx = side * 44, sy = -245;
    const ex = sx + side * Math.sin(a) * L, ey = sy + Math.cos(a) * L;
    ctx.strokeStyle = skin; ctx.lineWidth = 15; ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.stroke();
    circle(ex, ey, 10, skin, INK, 2);
    if (side > 0) handR = [ex, ey];
  }
  // head
  const hy = -320;
  ctx.fillStyle = hair; ctx.beginPath(); ctx.ellipse(0, hy - 6, 64, 66, 0, 0, Math.PI * 2); ctx.fill();
  // ponytail
  ctx.beginPath(); ctx.ellipse(-62 + Math.sin(t * 3) * 3, hy + 10, 20, 46, 0.4, 0, Math.PI * 2); ctx.fill();
  circle(0, hy + 6, 56, act === "hot" ? "#c8664a" : act === "cold" ? "#a8907e" : skin, INK, 4);
  ctx.fillStyle = hair; ctx.beginPath(); ctx.ellipse(0, hy - 40, 58, 26, 0, Math.PI, 0); ctx.fill(); ctx.beginPath(); ctx.moveTo(-56, hy - 30); ctx.quadraticCurveTo(-10, hy - 10, 30, hy - 46); ctx.lineTo(50, hy - 30); ctx.lineTo(56, hy - 40); ctx.closePath(); ctx.fill();
  // eyes
  const sq = act === "squint" || act === "yank" || act === "touch";
  for (const sd of [-1, 1]) {
    const ex = sd * 20, ey = hy + 8;
    if (sq) { ctx.strokeStyle = INK; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(ex - 9, ey - 5 * sd * 0); ctx.lineTo(ex + 9 * 0, ey + 4); ctx.lineTo(ex + 9, ey - 2); ctx.stroke(); }
    else { circle(ex, ey, 9, "#fff", INK, 2); circle(ex + 2, ey + 1, 5, INK); }
  }
  // mouth
  ctx.strokeStyle = INK; ctx.lineWidth = 3.5;
  if (talking && amp > 0.08) { ctx.beginPath(); ctx.ellipse(0, hy + 34, 10 + amp * 4, 3 + amp * 12, 0, 0, Math.PI * 2); ctx.fillStyle = "#5b1a2a"; ctx.fill(); ctx.stroke(); }
  else if (act === "yank" || act === "shock" || act === "squint") { ctx.beginPath(); ctx.ellipse(0, hy + 36, 9, 11, 0, 0, Math.PI * 2); ctx.fillStyle = "#5b1a2a"; ctx.fill(); ctx.stroke(); }
  else { ctx.beginPath(); ctx.moveTo(-12, hy + 32); ctx.quadraticCurveTo(0, hy + 40, 12, hy + 32); ctx.stroke(); }
  if (act === "hot" || act === "run") for (let i = 0; i < 3; i++) { const k = (t * 0.9 + i * 0.33) % 1; ctx.globalAlpha = 1 - k; emoji("💧", -70 + i * 70, hy - 40 + k * 60, 22); ctx.globalAlpha = 1; }
  if (act === "cold") { emoji("🥶", 70, hy - 60, 30); }
  if (act === "phone") { const [ex, ey] = handR; rr(ex - 14, ey - 40, 28, 46, 5); ctx.fillStyle = "#222"; ctx.fill(); ctx.fillStyle = "#4cc9f0"; ctx.fillRect(ex - 10, ey - 36, 20, 34); }
  if (act === "drink") { const [ex, ey] = handR; emoji(TL_SCENE_BG === "boba" ? "🧋" : "🥤", ex + 14, ey - 10, 54); }
  if (act === "yank") { ctx.globalAlpha = clamp(1 - lt / 1.5); emoji("💥", 120, -330, 60); ctx.globalAlpha = 1; }
  ctx.restore();
}
let TL_SCENE_BG = "";

// ───────────── backgrounds ─────────────
function wall(c1, c2) { const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, c1); g.addColorStop(1, c2); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); }
function floor(y, col) { ctx.fillStyle = col; ctx.fillRect(0, y, W, H - y); ctx.fillStyle = "rgba(0,0,0,0.08)"; ctx.fillRect(0, y, W, 6); }
function poster(x, y, w, h, lines, bg = "#fffbe6", fg = INK, rot = 0) {
  ctx.save(); ctx.translate(x + w / 2, y + h / 2); ctx.rotate(rot); rr(-w / 2, -h / 2, w, h, 6); ctx.fillStyle = bg; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.stroke();
  const tot = lines.reduce((a, l) => a + l[1] * 1.2, 0); let yy = -tot / 2; lines.forEach(l => { text(l[0], 0, yy + l[1] * 0.6, l[1], l[2] || fg, "center", 700); yy += l[1] * 1.2; }); ctx.restore();
}
function windowFrame(x, y, w, h, sky1, sky2) { const g = ctx.createLinearGradient(0, y, 0, y + h); g.addColorStop(0, sky1); g.addColorStop(1, sky2); rr(x, y, w, h, 8); ctx.fillStyle = g; ctx.fill(); ctx.strokeStyle = "#fff"; ctx.lineWidth = 10; ctx.stroke(); ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(x + w / 2, y); ctx.lineTo(x + w / 2, y + h); ctx.moveTo(x, y + h / 2); ctx.lineTo(x + w, y + h / 2); ctx.stroke(); }
function hdbSkyline(x, y, w, h) { ctx.fillStyle = "rgba(255,255,255,0.55)"; for (let i = 0; i < 6; i++) { const bw = w / 7, bh = h * (0.4 + hash(i + 3) * 0.5); ctx.fillRect(x + i * w / 6 + 4, y + h - bh, bw, bh); } }

function drawBG(name, t) {
  TL_SCENE_BG = name;
  switch (name) {
    case "kitchen": {
      wall("#ffe8c2", "#ffd59a"); windowFrame(80, 70, 260, 200, "#8ecae6", "#d7f0ff"); hdbSkyline(85, 150, 250, 115);
      poster(980, 60, 220, 120, [["FAMILY RULES", 22], ["1. Drink water", 17], ["2. Blow on hot Milo", 17]], "#fff", INK, 0.03);
      rr(0, 470, W, 30, 4); ctx.fillStyle = "#6d4c41"; ctx.fill(); floor(500, "#8d6e63");
      rr(760, 300, 170, 170, 10); ctx.fillStyle = "#cfd8dc"; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.stroke(); rr(775, 320, 110, 110, 6); ctx.fillStyle = "#37474f"; ctx.fill(); text("MICROWAVE", 845, 450, 13, INK, "center", 700);
      // the mug
      rr(640, 400, 70, 70, 10); ctx.fillStyle = "#e63946"; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.stroke(); text("MILO", 675, 435, 15, "#fff", "center", 700);
      for (let i = 0; i < 3; i++) { ctx.strokeStyle = `rgba(255,255,255,0.8)`; ctx.lineWidth = 4; ctx.beginPath(); for (let k = 0; k < 8; k++) { const yy = 395 - k * 10, xx = 655 + i * 18 + Math.sin(k * 0.9 + t * 4 + i) * 6; k ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); }
      pill("≈ 5,500 °C (est.)", 600, 340, 15, "#d00000");
      break;
    }
    case "hq": case "hq_night": case "hq_split": case "meeting": {
      const night = name === "hq_night";
      wall(night ? "#2b2d42" : "#fde2e4", night ? "#1b1c2c" : "#fad2e1");
      ctx.strokeStyle = night ? "rgba(255,255,255,0.05)" : "rgba(214,40,57,0.08)"; ctx.lineWidth = 3;
      for (let i = 0; i < 18; i++) { ctx.beginPath(); const y0 = 30 + i * 32; ctx.moveTo(0, y0); for (let x = 0; x <= W; x += 40) ctx.quadraticCurveTo(x + 20, y0 + ((x / 40) % 2 ? 14 : -14), x + 40, y0); ctx.stroke(); }
      windowFrame(70, 60, 240, 180, night ? "#0b132b" : "#bde0fe", night ? "#1c2541" : "#e0f2ff");
      if (night) { emoji("🌙", 120, 110, 40); } else hdbSkyline(75, 130, 230, 105);
      if (name !== "meeting") poster(980, 60, 230, 130, [["DAYS SINCE", 20], ["LAST REFLEX:", 20], ["0", 46, "#d00000"]], "#fff", INK, -0.03);
      else poster(70, 280, 200, 110, [["37 °C", 34, "#d00000"], ["OR BUST", 22]], "#fff", INK, -0.04);
      floor(560, night ? "#22223b" : "#9d8189");
      if (name === "hq_split") {
        ctx.fillStyle = "#6c757d"; ctx.fillRect(640, 0, 640, 560); floor(560, "#495057");
        ctx.strokeStyle = "#adb5bd"; ctx.lineWidth = 16; ctx.beginPath(); ctx.moveTo(640, 80); ctx.lineTo(1280, 80); ctx.moveTo(720, 0); ctx.lineTo(720, 560); ctx.stroke();
        poster(950, 130, 250, 80, [["SPINAL CORD · B1", 24], ["Reflex Dept. — no appts needed", 13]], "#ffd166");
        ctx.fillStyle = INK; ctx.fillRect(636, 0, 8, H);
        rr(30, 430, 270, 140, 10); ctx.fillStyle = "#6f4518"; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.stroke();
        rr(85, 445, 160, 34, 6); ctx.fillStyle = "#ffd60a"; ctx.fill(); ctx.stroke(); text("CEO · CORTEX", 165, 463, 17, INK, "center", 700);
      }
      break;
    }
    case "basement": { wall("#6c757d", "#495057"); ctx.strokeStyle = "#adb5bd"; ctx.lineWidth = 18; ctx.beginPath(); ctx.moveTo(0, 90); ctx.lineTo(W, 90); ctx.moveTo(140, 0); ctx.lineTo(140, 560); ctx.moveTo(0, 150); ctx.lineTo(W, 150); ctx.stroke(); poster(180, 200, 260, 90, [["SPINAL CORD · B1", 24], ["Relay neurones work here", 14]], "#ffd166"); floor(560, "#343a40"); emoji("🍞", 1100, 470, 40); text("kaya toast (lunch)", 1100, 510, 13, "#e9ecef", "center"); break; }
    case "eyeroom": {
      wall("#0b2545", "#13315c"); const cx = 300, cy = 220; circle(cx, cy, 150, "#eef4ed", "#8da9c4", 10); circle(cx, cy, 80, "#7b4b2a"); circle(cx, cy, 35, "#000");
      text("MAIN WINDOW (do not touch)", cx, 400, 16, "#8da9c4", "center", 700);
      for (let i = 0; i < 6; i++) { rr(60 + i * 200, 470, 160, 70, 8); ctx.fillStyle = "#134074"; ctx.fill(); for (let k = 0; k < 4; k++) circle(90 + i * 200 + k * 30, 505, 7, hash(i * 9 + k + Math.floor(t * 2)) > 0.5 ? "#80ed99" : "#ff595e"); }
      floor(560, "#0b2545"); break;
    }
    case "thermo": {
      wall("#ffedd8", "#f3d5b5"); poster(60, 60, 280, 110, [["PLEASE DO NOT", 20], ["DENATURE THE", 20], ["ENZYMES", 26, "#d00000"]], "#fff", INK, -0.02);
      // giant thermostat dial
      const cx = 200, cy = 330; circle(cx, cy, 95, "#fff", INK, 6); circle(cx, cy, 80, "#f8f9fa");
      text(TL_THERMO.toFixed(1) + "°", cx, cy, 44, TL_THERMO > 37.2 ? "#d00000" : TL_THERMO < 36.8 ? "#0077b6" : "#2b9348", "center", 700);
      text("SET POINT 37.0", cx, cy + 50, 13, "#6c757d", "center", 700);
      floor(560, "#b08968"); break;
    }
    case "field": {
      const g = ctx.createLinearGradient(0, 0, 0, 380); g.addColorStop(0, "#ffb703"); g.addColorStop(1, "#ffe8a3"); ctx.fillStyle = g; ctx.fillRect(0, 0, W, 380);
      const sr = 70 + Math.sin(t * 3) * 4; circle(1080, 110, sr + 30, "rgba(255,255,255,0.35)"); circle(1080, 110, sr, "#fff3b0", "#fb8500", 6); emoji("😡", 1080, 110, 60);
      ctx.fillStyle = "#55a630"; ctx.fillRect(0, 380, W, H); ctx.strokeStyle = "#fff"; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(0, 470); ctx.lineTo(W, 470); ctx.stroke();
      for (let i = 0; i < 6; i++) { ctx.strokeStyle = "rgba(255,255,255,0.4)"; ctx.lineWidth = 3; ctx.beginPath(); for (let k = 0; k < 30; k++) { const x = 100 + i * 200 + Math.sin(k * 0.6 + t * 5) * 6, y = 360 - k * 6; k ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke(); }
      pill("34 °C · humidity: why", 980, 230, 20, "#d00000"); break;
    }
    case "classroom": case "aircon": {
      const cold = name === "aircon";
      wall(cold ? "#caf0f8" : "#fefae0", cold ? "#ade8f4" : "#e9edc9");
      rr(330, 60, 620, 250, 8); ctx.fillStyle = "#fff"; ctx.fill(); ctx.strokeStyle = "#6c757d"; ctx.lineWidth = 10; ctx.stroke();
      text(cold ? "Topic: Thermoregulation" : "Solve: 3x² − 5x − 2 = 0", 640, 120, 30, "#1d3557", "center", 600);
      if (!cold) text("(show all working!!)", 640, 170, 22, "#e63946", "center");
      if (cold) { rr(40, 90, 220, 70, 10); ctx.fillStyle = "#fff"; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.stroke(); text("A/C: 16 °C", 150, 125, 28, "#0077b6", "center", 700); for (let i = 0; i < 5; i++) { const k = (t * 0.5 + i * 0.2) % 1; ctx.globalAlpha = 1 - k; emoji("❄️", 60 + i * 40, 180 + k * 200, 24); ctx.globalAlpha = 1; } }
      floor(540, cold ? "#90e0ef" : "#ccd5ae");
      for (let i = 0; i < 4; i++) { rr(60 + i * 330, 560, 220, 30, 4); ctx.fillStyle = "#bc6c25"; ctx.fill(); }
      break;
    }
    case "mall": {
      ctx.fillStyle = "#14121f"; ctx.fillRect(0, 0, 520, H); poster(80, 80, 300, 120, [["CINEMA 4", 30, "#ffd166"], ["now: very loud movie", 15, "#fff"]], "#2b2d42", "#fff");
      const g = ctx.createRadialGradient(950, 250, 50, 950, 250, 700); g.addColorStop(0, "#ffffff"); g.addColorStop(1, "#ffe066"); ctx.fillStyle = g; ctx.fillRect(520, 0, W - 520, H);
      for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2 + t * 0.3; ctx.strokeStyle = "rgba(255,200,0,0.5)"; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(950 + Math.cos(a) * 120, 250 + Math.sin(a) * 120); ctx.lineTo(950 + Math.cos(a) * 260, 250 + Math.sin(a) * 260); ctx.stroke(); }
      floor(560, "#adb5bd"); break;
    }
    case "boba": {
      wall("#f9dcc4", "#fec89a"); rr(700, 60, 520, 260, 12); ctx.fillStyle = "#3d2c2e"; ctx.fill();
      text("MENU", 960, 95, 28, "#ffd166", "center", 700);
      [["Brown Sugar Boba", "$4.80"], ["Sugar level: 0 / 25 / 50 / 100%", ""], ["Extra pearls", "+$0.80"], ["Your pancreas", "priceless"]].forEach((r, i) => { text(r[0], 730, 145 + i * 42, 21, "#fff", "left", 500); text(r[1], 1190, 145 + i * 42, 21, "#ffd166", "right", 600); });
      rr(0, 470, W, 30, 4); ctx.fillStyle = "#6f4518"; ctx.fill(); floor(500, "#a98467"); emoji("🧋", 820, 430, 70); break;
    }
    case "court": {
      const g = ctx.createLinearGradient(0, 0, 0, 400); g.addColorStop(0, "#ff7b00"); g.addColorStop(1, "#ffd6a5"); ctx.fillStyle = g; ctx.fillRect(0, 0, W, 400);
      ctx.fillStyle = "#4361ee"; ctx.fillRect(0, 400, W, H); ctx.strokeStyle = "#fff"; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(640, 720, 220, Math.PI, 0); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, 450); ctx.lineTo(W, 450); ctx.stroke();
      ctx.strokeStyle = "#adb5bd"; ctx.lineWidth = 10; ctx.beginPath(); ctx.moveTo(1100, 420); ctx.lineTo(1100, 120); ctx.stroke(); circle(1100, 115, 30, null, "#ff595e", 6);
      pill("H₂O consumed today: 0 ml", 24, 100, 20, "#d00000"); break;
    }
    case "pancreas": {
      wall("#e9f5db", "#cfe1b9"); poster(70, 60, 260, 100, [["PANCREAS", 28], ["Hormone Dept. · est. birth", 14]], "#fff");
      // glucose meter
      rr(70, 190, 70, 300, 30); ctx.fillStyle = "#fff"; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 4; ctx.stroke();
      const lv = TL_GLUCOSE; const hh = 270 * lv; rr(85, 475 - hh, 40, hh, 14); ctx.fillStyle = lv > 0.65 ? "#d00000" : lv < 0.35 ? "#ffb703" : "#2b9348"; ctx.fill();
      text("GLUCOSE", 105, 510, 15, INK, "center", 700);
      floor(560, "#a7c957"); break;
    }
    case "plant": {
      wall("#adb5bd", "#6c757d"); ctx.strokeStyle = "#495057"; ctx.lineWidth = 22; ctx.beginPath(); ctx.moveTo(0, 120); ctx.lineTo(W, 120); ctx.moveTo(0, 190); ctx.lineTo(W, 190); ctx.stroke();
      poster(60, 220, 280, 90, [["NEPHRON #482,113", 22], ["of ~1,000,000", 15]], "#ffd166");
      floor(560, "#495057"); for (let i = 0; i < 4; i++) { ctx.fillStyle = "rgba(72,202,228,0.5)"; ctx.beginPath(); ctx.ellipse(100 + i * 330, 620, 70, 12, 0, 0, Math.PI * 2); ctx.fill(); } break;
    }
    case "windowsill": {
      wall("#ffcdb2", "#e5989b"); windowFrame(760, 40, 460, 380, "#ffb4a2", "#ffe5d9"); circle(1150, 260, 50, "#fff3b0");
      for (let i = 0; i < 8; i++) { ctx.fillStyle = "rgba(255,243,176,0.12)"; ctx.beginPath(); ctx.moveTo(1150, 260); ctx.lineTo(0, 200 + i * 60); ctx.lineTo(0, 230 + i * 60); ctx.closePath(); ctx.fill(); }
      rr(0, 480, W, 30, 4); ctx.fillStyle = "#fff"; ctx.fill(); floor(510, "#b5838d"); break;
    }
    case "card": { wall("#264653", "#1d3557"); ctx.fillStyle = "rgba(255,255,255,0.04)"; for (let i = 0; i < 30; i++) ctx.fillRect(0, i * 26, W, 2); break; }
    case "title": { wall("#3a0ca3", "#7209b7"); break; }
    default: wall("#eee", "#ccc");
  }
}
let TL_THERMO = 37.0, TL_GLUCOSE = 0.5;

// ───────────── overlays ─────────────
function drawSubtitle(line, t) {
  if (!line || !line.text) return;
  const lt = t - line.start, dur = line.end - line.start;
  // chunk long lines into ~2-row captions
  const sents = line.text.split(/(?<=[.!?])\s+/); const pieces = [];
  for (let se of sents) { se = se.trim(); if (se.length <= 120) { pieces.push(se); continue; }
    const parts = se.split(/(?<=,)\s/); let c = ""; for (const p of parts) { if ((c + " " + p).trim().length > 110 && c) { pieces.push(c.trim()); c = p; } else c = (c + " " + p).trim(); } if (c) pieces.push(c); }
  const chunks = []; let cc = ""; for (const p of pieces) { if ((cc + " " + p).trim().length > 120 && cc) { chunks.push(cc.trim()); cc = p; } else cc = (cc + " " + p).trim(); } if (cc) chunks.push(cc);
  const total = chunks.reduce((a, c) => a + c.length, 0); let acc = 0, idx = 0;
  for (let i = 0; i < chunks.length; i++) { acc += chunks[i].length; if (lt / dur <= acc / total) { idx = i; break; } idx = i; }
  const s = chunks[idx];
  const sz = 28; const lines = wrap(s, 1000, sz, 600);
  const bh = lines.length * sz * 1.25 + 26; const by = H - bh - 14;
  ctx.fillStyle = "rgba(10,10,25,0.78)"; rr(110, by, 1060, bh, 16); ctx.fill();
  const col = SPEAKER_COL[line.who] || "#fff";
  pill(SPEAKER_NAME[line.who] || line.who, 130, by, 16, col, line.who === "NARR" ? "#fff" : INK);
  lines.forEach((l, i) => text(l, 640, by + 22 + i * sz * 1.25, sz, line.who === "NARR" ? "#e9ecef" : "#fff", "center", line.who === "NARR" ? 400 : 600));
}
function drawClock(s) { if (!s) return; rr(24, 20, 130, 46, 10); ctx.fillStyle = "rgba(0,0,0,0.65)"; ctx.fill(); text("⏱ " + s, 89, 44, 24, "#fff", "center", 700); }
function lowerThird(title, sub, k) {
  const x = lerp(-700, 40, ease(k * 3)); ctx.save(); ctx.globalAlpha = clamp(k * 4);
  rr(x, 440, 640, 92, 10); ctx.fillStyle = "#ffd166"; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 4; ctx.stroke();
  text(title, x + 22, 470, 30, INK, "left", 700); textBox(sub, x + 22, 506, 600, 16, "#3d405b", "left", 500); ctx.restore();
}
function vignette() { const g = ctx.createRadialGradient(W / 2, H / 2, 300, W / 2, H / 2, 820); g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,0,0,0.35)"); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); }
function panelFrame(px, py, pw, ph) {
  ctx.fillStyle = "rgba(0,0,0,0.25)"; rr(px + 8, py + 10, pw, ph, 18); ctx.fill();
  rr(px - 10, py - 10, pw + 20, ph + 20, 22); ctx.fillStyle = "#212529"; ctx.fill();
  rr(px, py, pw, ph, 12); ctx.fillStyle = "#fdfcf7"; ctx.fill();
}

// ───────────── frame assembly ─────────────
function sceneAt(t) { const sc = TL.scenes; for (let i = sc.length - 1; i >= 0; i--) if (t >= sc[i].start) return [sc[i], i]; return [sc[0], 0]; }
function lineAt(sc, t) { let cur = null, last = null; for (const l of sc.lines) { if (t >= l.start) last = l; if (t >= l.start && t <= l.end) cur = l; } return { cur, last }; }
function ampAt(l, t) { if (!l || !l.amp.length) return 0; const i = Math.floor((t - l.start) * FPS); return l.amp[clamp(i, 0, l.amp.length - 1)] || 0; }
function stepInfo(sc, t) { let step = 0, since = sc.start, line = null; for (const l of sc.lines) { if (t >= l.start && l.step !== undefined) { if (l.step !== step || line === null) { since = l.step !== step ? l.start : since; } step = l.step; line = l; } } return { step, since, line }; }

function drawFrame(i) {
  const t = i / FPS;
  const [sc, si] = sceneAt(t); const st = t - sc.start;
  const { cur, last } = lineAt(sc, t);
  const speaking = cur && cur.who !== "BEAT" ? cur.who : null;
  const amp = ampAt(cur, t);
  const lastEmote = {}; let act = "idle", actStart = sc.start;
  for (const l of sc.lines) if (t >= l.start) { if (l.emote) lastEmote[l.who] = l.emote; if (l.act && l.act !== act) { act = l.act; actStart = l.start; } }
  const S = stepInfo(sc, t);

  ctx.save();
  // whip transition in
  const tin = clamp(st / 0.3); const off = (1 - ease(tin)) * 120;
  ctx.translate(off * (si % 2 ? -1 : 1), 0);
  // global state for backgrounds
  if (sc.bg === "thermo") TL_THERMO = sc.id === "hypo_conf" ? 37.0 : (sc.id === "cold2" ? 36.6 : sc.id === "feedback" ? 37.0 + 0.6 * Math.exp(-st * 0.4) * Math.cos(st * 1.6) : (S.step >= 2 ? lerp(37.6, 37.2, clamp((t - S.since) / 8)) : 37.6));
  if (sc.bg === "pancreas") TL_GLUCOSE = [0.5, 0.85, 0.5, 0.2, 0.5][S.step] !== undefined ? lerp([0.5, 0.5, 0.85, 0.5, 0.2][S.step], [0.5, 0.85, 0.5, 0.2, 0.5][S.step], ease((t - S.since) / 2.5)) : 0.5;

  const charState = (id, x) => ({ t, amp: speaking === id || (speaking === "ALL") ? amp : 0, talking: speaking === id || speaking === "ALL", emote: lastEmote[id] || "", lt: cur ? t - cur.start : 0,
    look: speaking && speaking !== id ? clamp((SPEAK_X[speaking] ?? 640) - x, -1, 1) * 1 : 0.0,
    lensFat: id === "LENS" ? (S.step === 2 ? lerp(1, 0, ease((t - S.since) / 1.2)) : S.step === 3 ? 1 : (S.step === 1 ? 1 : 0.5)) : undefined,
    artWidth: id === "ARTERIOLE" ? (S.step >= 5 ? 0.1 : S.step >= 2 ? 1 : 0.5) : undefined, shiver: id === "HYPO" && sc.id === "cold2" });

  const shot = sc.shot;
  const SPEAK_X = {};
  if (shot === "live") { ctx.restore(); ctx.fillStyle = "#000"; ctx.fillRect(0, 0, W, H); return; } // live-action clip composited here later
  if (shot === "title" || shot === "end") drawTitle(sc, st, shot === "end");
  else if (shot === "card") { drawBG("card", t); drawCard(sc, S, t); }
  else if (shot === "speed") { drawBG("card", t); SPEAK_X.HYPO = 200; drawChar("HYPO", 200, 560, 1.6, charState("HYPO", 200)); drawSpeed(sc, S, t); }
  else if (shot === "host") {
    // slow push-in
    const z = 1 + st * 0.006; ctx.translate(W / 2, H / 2); ctx.scale(z, z); ctx.translate(-W / 2, -H / 2);
    drawBG(sc.bg, t);
    const hx = sc.bg === "kitchen" ? 490 : 520;
    drawHost(hx, 560, 1.0, act, t - actStart, t, speaking === "HOST" ? amp : 0, speaking === "HOST");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (speaking && CH[speaking]) drawPiP(speaking, charState(speaking, 1100), t - cur.start);
    if (speaking === "MUM" && !cur.live) drawVoiceNote(t - cur.start, amp);
    if (speaking === "TEACHER") drawTeacher(amp);
    drawClock(sc.clock);
  } else if (shot === "confessional") {
    const id = sc.cast[0]; const z = 1 + st * 0.004;
    ctx.save(); ctx.translate(W / 2, H / 2); ctx.scale(1.15 * z, 1.15 * z); ctx.translate(-W / 2, -H / 2); drawBG(sc.bg, t); ctx.restore();
    ctx.fillStyle = "rgba(255,255,255,0.18)"; ctx.fillRect(0, 0, W, H);
    SPEAK_X[id] = 760; drawChar(id, 760, 640, 2.4, { ...charState(id, 760), look: 0 });
    vignette();
    if (sc.lower) lowerThird(sc.lower[0], sc.lower[1], clamp((st - 0.6) / 1.2) * (st < 6.5 ? 1 : clamp(1 - (st - 6.5) * 2)));
    pill("● CONFESSIONAL", 1240, 40, 16, "#d00000", "#fff", "right");
  } else if (shot === "wide" || shot === "diagram") {
    drawBG(sc.bg, t);
    const cast = sc.cast || [];
    let xs, sc0, footY = 590;
    if (shot === "wide") { xs = cast.map((_, k) => cast.length === 1 ? 640 : 220 + k * (840 / (cast.length - 1))); sc0 = cast.length > 3 ? 1.05 : 1.25; if (sc.bg === "hq_split") xs = [440, 940]; }
    else { xs = cast.map((_, k) => cast.length === 1 ? 250 : 110 + k * (300 / (cast.length - 1))); sc0 = cast.length > 2 ? 0.8 : 1.0; }
    cast.forEach((id, k) => SPEAK_X[id] = xs[k]);
    if (shot === "diagram") { const px = 470, py = 36, pw = 780, ph = 520; panelFrame(px, py, pw, ph); ctx.save(); ctx.beginPath(); ctx.rect(px, py, pw, ph); ctx.clip(); ctx.translate(px, py); DIAG[sc.diagram]?.(S.step, t - S.since, t, S.line, pw, ph, sc); ctx.restore(); }
    // draw speaking char last (front)
    const order = cast.map((id, k) => [id, k]).sort((a, b) => (a[0] === speaking) - (b[0] === speaking));
    for (const [id, k] of order) {
      const pz = speaking === id ? 1.06 : 1;
      if (id === "PIT") { drawChar(id, xs[k], footY - 60, sc0 * pz, charState(id, xs[k])); continue; }
      drawChar(id, xs[k], footY, sc0 * pz, charState(id, xs[k]));
    }
    if (speaking && CH[speaking] && !cast.includes(speaking)) drawPiP(speaking, charState(speaking, 1100), t - cur.start);
    if (speaking === "TEACHER") drawTeacher(amp);
    if (sc.bg === "hq_split") { pill("EXECUTIVE FLOOR", 440, 620, 16, "#3a0ca3", "#fff", "center"); pill("BASEMENT", 940, 620, 16, "#495057", "#fff", "center"); }
  }
  ctx.restore();
  // fade in from black at very start / fade out at end
  if (t < 0.6) { ctx.fillStyle = `rgba(0,0,0,${1 - t / 0.6})`; ctx.fillRect(0, 0, W, H); }
  if (cur && cur.live) drawLiveFrame(cur.live, t - cur.start, t);
  if (shot !== "title" && shot !== "end") drawSubtitle(cur, t);
  const rem = TL.duration - t; if (rem < 1.2) { ctx.fillStyle = `rgba(0,0,0,${1 - rem / 1.2})`; ctx.fillRect(0, 0, W, H); }
}

// Live-action cutaway: phone UI with a black 512x512 window at LIVE_RECT; the real
// talking clip is overlaid there by ffmpeg after rendering (see composite_live.py).
const LIVE_RECT = [384, 76, 512, 512];
function drawLiveFrame(kind, lt, t) {
  const [x, y, w, h] = LIVE_RECT; const bar = 50;
  ctx.fillStyle = "rgba(8,8,20,0.72)"; ctx.fillRect(0, 0, W, H);
  rr(x - 22, y - bar - 16, w + 44, h + bar + 32, 30); ctx.fillStyle = "#111"; ctx.fill(); ctx.strokeStyle = "#555"; ctx.lineWidth = 4; ctx.stroke();
  ctx.fillStyle = "#000"; ctx.fillRect(x, y, w, h);
  if (kind === "meera") {
    ctx.fillStyle = "#1c1c1c"; ctx.fillRect(x, y - bar, w, bar);
    pill("● REC", x + 10, y - bar / 2, 15, "#e63946", "#fff");
    text("Meera's vlog · Y11 survival diary", x + w - 12, y - bar / 2, 16, "#fff", "right", 600);
  } else {
    ctx.fillStyle = "#075e54"; ctx.fillRect(x, y - bar, w, bar);
    text("Mum ❤️", x + 14, y - bar / 2 - 8, 19, "#fff", "left", 700);
    text("WhatsApp video · 0:" + String(Math.min(59, Math.floor(lt) + 1)).padStart(2, "0"), x + 14, y - bar / 2 + 12, 12, "#d8fdd2", "left", 500);
    circle(x + w + 80, y + h - 70, 32, "#e63946"); emoji("📞", x + w + 80, y + h - 70, 28);
  }
  pill("REAL WORLD", x - 100, y + h - 30, 16, "#ffd166", "#1d1b33", "center");
  if (lt < 0.15) { ctx.fillStyle = `rgba(255,255,255,${0.6 * (1 - lt / 0.15)})`; ctx.fillRect(0, 0, W, H); }
}

function drawPiP(id, st, lt) {
  const k = easeOutBack(lt / 0.35); const cx = 1110, cy = 160, r = 120 * k;
  if (r <= 1) return;
  ctx.save(); circle(cx, cy, r + 8, "#fff"); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
  ctx.fillStyle = "#fde2e4"; ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
  drawChar(id, cx, cy + r * 0.95, 1.05 * k, { ...st, look: 0 }); ctx.restore();
  circle(cx, cy, r + 8, null, INK, 5);
  pill("LIVE FROM INSIDE", cx, cy + r + 18, 14, "#d00000", "#fff", "center");
}
function drawVoiceNote(lt, amp) {
  const k = easeOutBack(lt / 0.3); ctx.save(); ctx.translate(1000, 150); ctx.scale(k, k);
  rr(-200, -70, 380, 140, 24); ctx.fillStyle = "#dcf8c6"; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 4; ctx.stroke();
  emoji("👩🏽", -150, -10, 54); text("Mum", -150, 42, 16, INK, "center", 700);
  for (let i = 0; i < 18; i++) { const hgt = 6 + (hash(i * 3.3 + Math.floor(lt * 12)) * 30) * (0.4 + amp); rr(-100 + i * 14, -hgt / 2, 8, hgt, 4); ctx.fillStyle = "#075e54"; ctx.fill(); }
  text("🎙 voice note · 0:" + String(Math.min(59, Math.floor(lt) + 1)).padStart(2, "0"), 40, 48, 14, "#075e54", "center", 600);
  ctx.restore();
}
function drawTeacher(amp) { ctx.save(); ctx.translate(1110, 170); circle(0, 0, 105, "#fff", INK, 5); emoji("👩🏻‍🏫", 0, 0, 120 + amp * 8); ctx.restore(); pill("MS TAN (off-screen)", 1110, 300, 15, "#6c757d", "#fff", "center"); }

function drawTitle(sc, st, end) {
  drawBG("title", st);
  // rays
  ctx.save(); ctx.translate(W / 2, H / 2); ctx.rotate(st * 0.1); for (let i = 0; i < 16; i++) { ctx.rotate(Math.PI / 8); ctx.fillStyle = "rgba(255,255,255,0.06)"; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(900, -90); ctx.lineTo(900, 90); ctx.closePath(); ctx.fill(); } ctx.restore();
  const k = easeOutBack(st / 0.6);
  ctx.save(); ctx.translate(W / 2, 200); ctx.scale(k, k); ctx.rotate(-0.03);
  font(120, 400, "Bangers"); ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.lineWidth = 14; ctx.strokeStyle = INK; ctx.strokeText(TL.show, 0, 0); ctx.fillStyle = "#ffd166"; ctx.fillText(TL.show, 0, 0); ctx.restore();
  text(TL.tagline, W / 2, 290, 24, "#fff", "center", 500);
  if (!end) {
    const k2 = ease((st - 1.2) / 0.6); ctx.globalAlpha = k2;
    pill(TL.number, W / 2, 350, 22, "#f72585", "#fff", "center"); text("“" + TL.title + "”", W / 2, 410, 46, "#fff", "center", 700); ctx.globalAlpha = 1;
  } else {
    text("Starring", W / 2, 340, 22, "#ffd166", "center", 700);
    text(TL.dedication, W / 2, 680, 20, "#fff", "center", 600);
  }
  const ids = ["CORTEX", "RELAY", "HYPO", "ADREN", "INSULIN", "GLUCAGON", "KIDNEY", "ADH", "BASIL"];
  ids.forEach((id, j) => { const x = 110 + j * 132; const kk = easeOutBack((st - 0.3 - j * 0.08) / 0.4); if (kk > 0) drawChar(id, x, end ? 600 : 640, 0.62 * kk, { t: st, amp: 0, talking: false, emote: id === "ADREN" ? "panic" : "", look: 0 }); if (end) text(CH[id].name, x, 625, 13, "#fff", "center", 700); });
}

function drawCard(sc, S, t) {
  const c = sc.card; const k = easeOutBack((t - sc.start) / 0.5);
  ctx.save(); ctx.translate(W / 2, 300); ctx.scale(k, k); ctx.rotate(-0.015);
  rr(-470, -230, 940, 460, 18); ctx.fillStyle = "#fffef2"; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 5; ctx.stroke();
  ctx.strokeStyle = "rgba(0,119,182,0.15)"; ctx.lineWidth = 2; for (let i = 0; i < 12; i++) { ctx.beginPath(); ctx.moveTo(-470, -170 + i * 36); ctx.lineTo(470, -170 + i * 36); ctx.stroke(); }
  pill("EXAM TRAP", -440, -195, 22, "#d00000", "#fff");
  if (c.bad) {
    text("✗  " + c.bad, -400, -70, 34, "#d00000", "left", 600);
    const sk = ease((t - S.since - 0.8) / 0.5); ctx.strokeStyle = "#d00000"; ctx.lineWidth = 6; font(34, 600); const wd = ctx.measureText("✗  " + c.bad).width; ctx.beginPath(); ctx.moveTo(-400, -70); ctx.lineTo(-400 + wd * sk, -70); ctx.stroke();
    const k3 = ease((t - S.since - 1.6) / 0.5); ctx.globalAlpha = k3; text("✓  " + c.good, -400, 60, 34, "#2b9348", "left", 700); ctx.globalAlpha = 1;
    if (k3 > 0.9) { ctx.save(); ctx.translate(330, 150); ctx.rotate(-0.2); rr(-90, -36, 180, 72, 10); ctx.strokeStyle = "#2b9348"; ctx.lineWidth = 6; ctx.stroke(); text("+1 MARK", 0, 2, 32, "#2b9348", "center", 700); ctx.restore(); }
  } else if (c.words) {
    c.words.forEach((w, j) => { const kk = ease((t - sc.start - 0.5 - j * 1.6) / 0.5); ctx.globalAlpha = kk; text(w[0], -400, -110 + j * 110, 52, ["#e76f51", "#2a9d8f", "#7209b7"][j], "left", 700); text("= " + w[1], -400 + 0, -110 + j * 110 + 44, 24, INK, "left", 500); ctx.globalAlpha = 1; });
    if (S.step >= 3) { ctx.fillStyle = "rgba(255,254,242,0.97)"; rr(-470, -230, 940, 460, 18); ctx.fill(); pill("WORTH KNOWING", -440, -195, 22, "#0077b6", "#fff");
      textBox("Type 1 diabetes: the pancreas can't make enough insulin → blood glucose can rise dangerously high.", -400, -110, 800, 32, INK, "left", 600);
      textBox("Managed with: insulin injections · careful diet · regular blood-glucose monitoring.", -400, 40, 800, 30, "#2b9348", "left", 600); }
  }
  ctx.restore();
}
function drawSpeed(sc, S, t) {
  text("SPEED ROUND: 5 WAYS TO LOSE MARKS", 800, 60, 32, "#ffd166", "center", 700);
  sc.items.forEach((it, j) => {
    if (S.step < j + 1) return; const k = easeOutBack((t - (S.step === j + 1 ? S.since : 0)) / 0.4); const y = 120 + j * 92;
    ctx.save(); ctx.translate(800, y + 36); ctx.scale(S.step === j + 1 ? k : 1, S.step === j + 1 ? k : 1);
    rr(-430, -38, 860, 80, 14); ctx.fillStyle = "#fffef2"; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.stroke();
    circle(-390, 0, 24, "#f72585"); text(String(j + 1), -390, 1, 26, "#fff", "center", 700);
    text(it[0], -350, -14, 22, "#d00000", "left", 700); text(it[1], -350, 16, 22, "#2b9348", "left", 600); ctx.restore();
  });
}

window.setup = (tl) => { TL = tl; FPS = tl.fps; };
window.drawFrame = drawFrame;
