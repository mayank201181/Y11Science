// Animated teaching diagrams drawn inside the wall-screen panel (780 x 520 local coords).
// Each: (step, ls = seconds since step began, t, line = line that set the step, pw, ph, scene)
const DIAG = {};
function title(s, col = "#3a0ca3") { text(s, 390, 34, 28, col, "center", 700); ctx.fillStyle = col; ctx.fillRect(200, 56, 380, 3); }
function label(s, x, y, col = INK, sz = 18, align = "center", w = 600) { text(s, x, y, sz, col, align, w); }
function box(x, y, w, h, fill, stroke = INK, r = 10) { rr(x, y, w, h, r); ctx.fillStyle = fill; ctx.fill(); ctx.strokeStyle = stroke; ctx.lineWidth = 3; ctx.stroke(); }
function prog(ls, line, scale = 1) { if (!line) return 1; return clamp(ls / Math.max(0.5, (line.end - line.start) * scale)); }
function polyPoint(pts, k) { // point along polyline at fraction k
  let L = 0; const seg = []; for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(d); L += d; }
  let target = k * L; for (let i = 0; i < seg.length; i++) { if (target <= seg[i]) { const f = target / seg[i]; return [lerp(pts[i][0], pts[i + 1][0], f), lerp(pts[i][1], pts[i + 1][1], f)]; } target -= seg[i]; }
  return pts[pts.length - 1];
}
function polyline(pts, col, lw, dash) { ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.setLineDash(dash || []); ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.stroke(); ctx.setLineDash([]); }
function glowDot(x, y, r, col) { const g = ctx.createRadialGradient(x, y, 0, x, y, r * 3); g.addColorStop(0, col); g.addColorStop(1, "rgba(255,255,255,0)"); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r * 3, 0, Math.PI * 2); ctx.fill(); circle(x, y, r, "#fff", col, 3); }

// 1 ─ Reflex arc
DIAG.reflex = (step, ls, t, line) => {
  title("THE REFLEX ARC");
  // spinal cord cross-section
  circle(600, 190, 95, "#f1f3f5", INK, 4);
  ctx.fillStyle = "#adb5bd"; ctx.beginPath(); ctx.moveTo(600, 130); ctx.bezierCurveTo(650, 120, 660, 170, 630, 190); ctx.bezierCurveTo(660, 210, 650, 260, 600, 250); ctx.bezierCurveTo(550, 260, 540, 210, 570, 190); ctx.bezierCurveTo(540, 170, 550, 120, 600, 130); ctx.fill();
  label("spinal cord", 600, 305, "#495057", 17);
  // arm + hand
  ctx.strokeStyle = "#b9784e"; ctx.lineWidth = 46; ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(150, 260); ctx.lineTo(260, 420); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(260, 420); ctx.lineTo(120, 450); ctx.stroke();
  // biceps
  ctx.fillStyle = "#e63946"; ctx.beginPath(); ctx.ellipse(205, 335, 34, 20, 0.97, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.stroke();
  emoji("🔥", 80, 470, 40); emoji("☕", 70, 420, 34);
  const sens = [[120, 450], [260, 420], [380, 300], [470, 190], [570, 175]];
  const relay = [[570, 175], [600, 190], [630, 205]];
  const motor = [[630, 205], [520, 300], [300, 345], [228, 345]];
  polyline(sens, "#0077b6", 7); polyline(relay, "#7209b7", 7); polyline(motor, "#d00000", 7);
  const labels = [["① Stimulus: heat", 70, 505, "#e85d04"], ["② Receptor (skin)", 160, 480, "#e85d04"], ["③ Sensory neurone", 350, 255, "#0077b6"], ["④ Relay neurone", 640, 100, "#7209b7"], ["⑤ Motor neurone", 450, 370, "#d00000"], ["⑥ Effector: muscle", 230, 290, "#d00000"], ["⑦ Response: hand pulls away", 300, 505, "#2b9348"]];
  const all = [...sens, ...relay.slice(1), ...motor.slice(1)];
  const p = step >= 2 ? 1 : step === 1 ? prog(ls, line, 0.95) : 0;
  const shown = step === 0 ? 2 : step === 1 ? Math.min(7, 1 + Math.floor(p * 7.2)) : 7;
  labels.slice(0, shown).forEach(([s, x, y, c], i) => { ctx.globalAlpha = i === shown - 1 && step === 1 ? 0.6 + 0.4 * Math.sin(t * 8) ** 2 : 1; pill(s, x, y, 15, c, "#fff", "center"); ctx.globalAlpha = 1; });
  if (step >= 1) { const q = step === 1 ? p : (t * 0.35) % 1; const [x, y] = polyPoint(all, q); glowDot(x, y, 9, "#ffd60a"); }
  if (step >= 2) { box(470, 330, 290, 100, "#fff3bf"); textBox("Brain informed: AFTERWARDS 🙄", 615, 358, 270, 20, INK, "center", 700); label("fast · automatic · involuntary", 615, 410, "#2b9348", 16); }
};

// 2 ─ Synapse
DIAG.synapse = (step, ls, t) => {
  title("THE SYNAPSE (a gap!)");
  // presynaptic bulb
  ctx.fillStyle = "#ffe066"; ctx.strokeStyle = INK; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(0, 230); ctx.lineTo(220, 230); ctx.bezierCurveTo(260, 150, 360, 150, 360, 260); ctx.bezierCurveTo(360, 370, 260, 370, 220, 290); ctx.lineTo(0, 290); ctx.closePath(); ctx.fill(); ctx.stroke();
  // postsynaptic
  ctx.fillStyle = "#b8f2e6"; ctx.beginPath(); ctx.moveTo(780, 200); ctx.lineTo(560, 200); ctx.bezierCurveTo(470, 200, 450, 220, 450, 260); ctx.bezierCurveTo(450, 300, 470, 320, 560, 320); ctx.lineTo(780, 320); ctx.closePath(); ctx.fill(); ctx.stroke();
  // receptors
  for (let i = 0; i < 5; i++) { const y = 215 + i * 22; ctx.strokeStyle = "#2a9d8f"; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(458, y, 8, -Math.PI / 2, Math.PI / 2, true); ctx.stroke(); }
  label("gap = synapse", 405, 400, "#d00000", 18); arrow(405, 385, 405, 300, "#d00000", 3, 10);
  // impulse arriving
  if (step === 0) { const k = (ls * 0.5) % 1; glowDot(lerp(20, 250, k), 260, 9, "#ffd60a"); label("⚡ electrical impulse arrives", 150, 200, "#e85d04", 17); }
  // vesicles
  const fuse = step >= 1 ? 1 : clamp((ls - 1.5) / 2);
  for (let i = 0; i < 6; i++) { const vx = lerp(270 + (i % 3) * 22, 335, fuse * (i < 3 ? 1 : 0.4)), vy = 220 + Math.floor(i / 3) * 50 + (i % 3) * 8; circle(vx, vy, 14, "#fff", "#7209b7", 3); for (let k = 0; k < 4; k++) circle(vx + Math.cos(k * 1.6) * 6, vy + Math.sin(k * 1.6) * 6, 2.5, "#7209b7"); }
  label("vesicles", 260, 140, "#7209b7", 17);
  if (step >= 1) {
    for (let i = 0; i < 26; i++) {
      const k = clamp((ls - i * 0.08) / 2.2); if (k <= 0) continue;
      const x = lerp(355, 452, k) + Math.sin(i * 7 + t * 3) * 6 * (1 - k); const y = 260 + (hash(i) - 0.5) * 110 * (0.4 + k * 0.6) + Math.sin(i + t * 4) * 3;
      circle(x, y, 4.5, "#7209b7");
    }
    label("neurotransmitter DIFFUSES across", 405, 470, "#7209b7", 19);
    if (ls > 2.5) { const k = ((ls - 2.5) * 0.45) % 1; glowDot(lerp(470, 770, k), 260, 9, "#ffd60a"); label("new impulse ⚡", 650, 170, "#2a9d8f", 17); }
  }
  if (step >= 2) { box(530, 360, 230, 110, "#fff"); label("ONE WAY ONLY ➡", 645, 395, INK, 22); label("(only one side has", 645, 425, "#6c757d", 15); label("the vesicles)", 645, 445, "#6c757d", 15); emoji("🚫", 590, 460, 0); }
};

// 3 ─ Nerves vs hormones
DIAG.comms = (step, ls, t) => {
  if (step === 3) { // the PA-speaker analogy
    title("HORMONES = SCHOOL ANNOUNCEMENT");
    emoji("📢", 110, 250, 90);
    for (let r = 0; r < 4; r++) { const rad = ((ls * 120 + r * 90) % 360); ctx.strokeStyle = `rgba(114,9,183,${1 - rad / 360})`; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(110, 250, rad, -0.9, 0.9); ctx.stroke(); }
    for (let i = 0; i < 12; i++) { const x = 300 + (i % 4) * 120, y = 140 + Math.floor(i / 4) * 120; const target = i === 6; const up = target && ls > 2.5 ? Math.min(20, (ls - 2.5) * 40) : 0;
      circle(x, y - up, 34, target && ls > 2.5 ? "#ffd166" : "#dee2e6", INK, 3); emoji(target ? "🏐" : "🙂", x, y - up, 30); }
    label("everyone hears it… only cells WITH THE RIGHT RECEPTOR respond", 390, 495, "#7209b7", 19);
    return;
  }
  title("TWO WAYS TO SEND A MESSAGE");
  const rows = [["Signal", "electrical impulse", "chemical (hormone)"], ["Travels", "along neurones", "in the blood"], ["Speed", "very fast", "slower"], ["Lasts", "short-lived", "longer-lasting"], ["Target", "one precise place", "target organs with receptors"]];
  const showL = step >= 1, showR = step >= 2; const yy = step >= 5 ? 70 : 80;
  if (showL) { box(150, yy, 290, 54, "#ffd60a"); label("⚡ NERVOUS  (a DM)", 295, yy + 27, INK, 21); }
  if (showR) { box(460, yy, 300, 54, "#c77dff"); label("📢 HORMONAL (endocrine)", 610, yy + 27, INK, 21); }
  const rh = step >= 5 ? 44 : 64;
  rows.forEach((r, i) => { const y = yy + 70 + i * rh; if (!showL) return; label(r[0], 70, y + rh / 2 - 6, "#6c757d", 18, "center", 700);
    label(r[1], 295, y + rh / 2 - 6, INK, 19); if (showR) label(r[2], 610, y + rh / 2 - 6, INK, i === 4 ? 16 : 19); ctx.fillStyle = "rgba(0,0,0,0.06)"; ctx.fillRect(20, y + rh - 4, 740, 2); });
  if (step >= 5) { const items = ["Stimulus", "Receptor", "Coordinator", "Effector", "Response"]; items.forEach((s, i) => { const k = easeOutBack((ls - i * 0.5) / 0.4); if (k <= 0) return; const x = 20 + i * 154; ctx.save(); ctx.translate(x + 64, 440); ctx.scale(k, k); box(-64, -28, 128, 56, ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff"][i]); label(s, 0, 0, INK, 18, "center", 700); ctx.restore(); if (i < 4 && k > 0.9) arrow(x + 130, 440, x + 150, 440, INK, 3, 8); }); }
};

// 4 ─ Pupil reflex
DIAG.pupil = (step, ls, t) => {
  const bright = step === 1; title(bright ? "BRIGHT LIGHT → PUPIL CONSTRICTS" : step === 2 ? "DIM LIGHT → PUPIL DILATES" : "THE IRIS");
  const cx = 300, cy = 280; const target = bright ? 32 : step === 2 ? 95 : 60; const from = bright ? 60 : step === 2 ? 32 : 60;
  const r = lerp(from, target, ease(ls / 1.5));
  ctx.fillStyle = bright ? "rgba(255,214,10,0.25)" : "rgba(0,0,40,0.35)"; ctx.fillRect(0, 60, 780, 460);
  if (bright) for (let i = 0; i < 6; i++) { arrow(20, 120 + i * 60, 120, 160 + i * 40, "#ffb703", 5, 14); }
  ctx.save(); ctx.beginPath(); ctx.ellipse(cx, cy, 200, 150, 0, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 4; ctx.stroke(); ctx.clip();
  circle(cx, cy, 130, "#8d5524", INK, 3);
  // radial muscles
  for (let i = 0; i < 28; i++) { const a = i / 28 * Math.PI * 2; ctx.strokeStyle = !bright && step === 2 ? "#ff9f1c" : "rgba(255,159,28,0.55)"; ctx.lineWidth = !bright && step === 2 ? 6 : 3; ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * (r + 22), cy + Math.sin(a) * (r + 22)); ctx.lineTo(cx + Math.cos(a) * 126, cy + Math.sin(a) * 126); ctx.stroke(); }
  // circular muscles
  for (let k = 0; k < 3; k++) { ctx.strokeStyle = bright ? "#2ec4b6" : "rgba(46,196,182,0.6)"; ctx.lineWidth = bright ? 6 : 3; ctx.beginPath(); ctx.arc(cx, cy, r + 6 + k * 6, 0, Math.PI * 2); ctx.stroke(); }
  circle(cx, cy, r, "#000"); circle(cx - r * 0.3, cy - r * 0.3, Math.max(4, r * 0.18), "rgba(255,255,255,0.8)");
  ctx.restore();
  label("pupil = the HOLE", cx, cy + 175, "#6c757d", 16);
  const yb = 140;
  box(540, yb, 220, 100, "#e0fbfc", "#2ec4b6"); label("CIRCULAR", 650, yb + 30, "#2ec4b6", 22, "center", 700); label(bright ? "CONTRACT ✊" : step === 2 ? "relax 😌" : "—", 650, yb + 68, INK, 21);
  box(540, yb + 130, 220, 100, "#fff3e0", "#ff9f1c"); label("RADIAL", 650, yb + 160, "#ff9f1c", 22, "center", 700); label(bright ? "relax 😌" : step === 2 ? "CONTRACT ✊" : "—", 650, yb + 198, INK, 21);
  label(bright ? "less light in → protects retina" : step === 2 ? "more light in → see in the dark" : "", 390, 495, "#3a0ca3", 19);
};

// 5 ─ Accommodation (lens)
DIAG.lens = (step, ls, t) => {
  if (step === 3) {
    title("ACCOMMODATION CHEAT CODE");
    box(40, 100, 330, 330, "#fff1f2", "#e63946"); label("NEAR 📱", 205, 140, "#e63946", 30, "center", 700);
    ["Ciliary: CONTRACT", "Ligaments: SLACK", "Lens: FAT / round", "more refraction"].forEach((s, i) => label(s, 205, 210 + i * 52, INK, 22));
    box(410, 100, 330, 330, "#eef6ff", "#0077b6"); label("FAR 🧑‍🏫", 575, 140, "#0077b6", 30, "center", 700);
    ["Ciliary: RELAX", "Ligaments: TAUT", "Lens: THIN / flat", "less refraction"].forEach((s, i) => label(s, 575, 210 + i * 52, INK, 22));
    label("Near = Contract · Slack · Fat (“like me after leg day”)", 390, 475, "#3a0ca3", 18);
    return;
  }
  const near = step !== 2; title(near ? "LOOKING AT SOMETHING NEAR" : "LOOKING AT SOMETHING FAR");
  const k = step === 2 ? ease(ls / 1.2) : step === 1 ? 1 - ease(ls / 1.2) * 0 : 0.5;
  const fat = step === 2 ? 1 - k : step === 1 ? 1 : 0.5;
  const ex = 470, ey = 280;
  ctx.beginPath(); ctx.ellipse(ex + 60, ey, 210, 190, 0, 0, Math.PI * 2); ctx.fillStyle = "#f8f9fa"; ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 4; ctx.stroke();
  ctx.strokeStyle = "#d00000"; ctx.lineWidth = 8; ctx.beginPath(); ctx.ellipse(ex + 60, ey, 205, 185, 0, -1.0, 1.0); ctx.stroke(); label("retina", 745, 180, "#d00000", 16);
  const lw = lerp(16, 46, fat), lh = lerp(120, 96, fat);
  // ciliary muscles
  const cAmt = fat; for (const s of [-1, 1]) { const cy2 = ey + s * 150; ctx.fillStyle = "#e63946"; ctx.beginPath(); ctx.ellipse(ex, cy2, lerp(26, 34, cAmt), lerp(30, 22, cAmt), 0, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.stroke();
    // ligaments
    ctx.strokeStyle = "#868e96"; ctx.lineWidth = 3; for (let j = -1; j <= 1; j++) { ctx.beginPath(); const x1 = ex + j * 10, y1 = cy2 - s * 22, x2 = ex + j * lw * 0.5, y2 = ey + s * lh * 0.9; const sag = fat * 14; ctx.moveTo(x1, y1); ctx.quadraticCurveTo((x1 + x2) / 2 + sag, (y1 + y2) / 2, x2, y2); ctx.stroke(); } }
  label("ciliary muscle", ex, ey - 200, "#e63946", 16); label("suspensory ligaments", ex + 150, ey - 120, "#868e96", 15);
  ctx.beginPath(); ctx.ellipse(ex, ey, lw, lh, 0, 0, Math.PI * 2); ctx.fillStyle = "rgba(154,209,255,0.85)"; ctx.fill(); ctx.strokeStyle = "#0077b6"; ctx.lineWidth = 3; ctx.stroke();
  label("lens", ex, ey + lh + 22, "#0077b6", 16);
  // rays
  const fx = ex + 255, fy = ey;
  if (near) { emoji("📱", 70, ey, 46); for (const dy of [-60, 0, 60]) { polyline([[95, ey], [ex, ey + dy]], "#ffb703", 3); polyline([[ex, ey + dy], [fx, fy]], "#ffb703", 3); } }
  else { emoji("🧑‍🏫", 50, ey, 40); for (const dy of [-60, 0, 60]) { polyline([[80, ey + dy], [ex, ey + dy]], "#ffb703", 3); polyline([[ex, ey + dy], [fx, fy]], "#ffb703", 3); } }
  circle(fx, fy, 7, "#ffb703", INK, 2);
  box(20, 380, 300, 120, "#fff"); [near ? "Ciliary: CONTRACT" : "Ciliary: RELAX", near ? "Ligaments: SLACK" : "Ligaments: TAUT", near ? "Lens: FAT (more refraction)" : "Lens: THIN (less refraction)"].forEach((s, i) => label(s, 170, 408 + i * 34, INK, 18));
};

// 6 ─ Skin: sweating, vasodilation/constriction, hairs
DIAG.skin = (step, ls, t) => {
  const cold = step >= 5; title(cold ? "TOO COLD → KEEP HEAT IN" : "TOO HOT → LOSE HEAT", cold ? "#0077b6" : "#d00000");
  // layers
  ctx.fillStyle = "#ffd6a5"; ctx.fillRect(0, 150, 780, 60); ctx.fillStyle = "#ffe8d6"; ctx.fillRect(0, 210, 780, 310);
  ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(0, 150); ctx.lineTo(780, 150); ctx.stroke(); label("skin surface", 700, 135, "#6c757d", 15);
  // hairs + erector muscles
  const hairUp = step >= 6 ? 1 : step >= 3 && !cold ? 0 : 0.5;
  for (const hx of [90, 690]) { const ang = lerp(1.2, 0.1, hairUp); ctx.strokeStyle = "#3d2b1f"; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(hx, 260); ctx.lineTo(hx + Math.sin(ang) * 170, 260 - Math.cos(ang) * 170); ctx.stroke();
    ctx.strokeStyle = "#e63946"; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(hx + 10, 240); ctx.lineTo(hx + 50, 205 + (hairUp > 0.7 ? 10 : 0)); ctx.stroke(); }
  label(hairUp > 0.7 ? "hairs stand up → trap insulating air" : hairUp < 0.3 ? "hairs lie flat" : "hair + erector muscle", 140, 300, "#3d2b1f", 15);
  if (step >= 6) for (let i = 0; i < 10; i++) circle(60 + i * 70, 125 + Math.sin(i * 2) * 8, 10, "rgba(173,232,244,0.7)", "#48cae4", 2);
  // sweat gland
  if (!cold) { ctx.strokeStyle = "#4cc9f0"; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(200, 150); ctx.lineTo(200, 380); for (let i = 0; i < 8; i++) ctx.arc(200 + (i % 2 ? 10 : -10), 390 + i * 6, 12, 0, Math.PI * 2); ctx.stroke(); label("sweat gland", 200, 470, "#0096c7", 15); }
  if (step >= 1 && !cold) for (let i = 0; i < 6; i++) { const k = ((ls * 0.6 + i / 6) % 1); const x = 160 + i * 18; ctx.globalAlpha = 1 - k; emoji(k < 0.4 ? "💧" : "〰️", x, 140 - k * 90, 22); ctx.globalAlpha = 1; }
  if (step >= 1 && !cold) label("sweat EVAPORATES → takes heat away", 230, 90, "#0096c7", 16, "left");
  // arteriole + capillary loop
  const wid = step >= 5 ? lerp(22, 7, ease(ls / 1.2)) : step >= 2 ? lerp(12, 26, ease(ls / 1.2)) : 12;
  ctx.strokeStyle = "#d62839"; ctx.lineWidth = wid; ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(400, 500); ctx.lineTo(400, 300); ctx.stroke();
  ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(400, 300); ctx.lineTo(400, 175); ctx.lineTo(560, 175); ctx.lineTo(560, 500); ctx.stroke();
  const flow = step >= 5 ? 0.25 : step >= 2 ? 1.6 : 0.8;
  for (let i = 0; i < 8; i++) { const k = ((t * flow * 0.25 + i / 8) % 1); const [x, y] = polyPoint([[400, 500], [400, 175], [560, 175], [560, 500]], k); circle(x, y, 5, "#ff8fa3"); }
  label("arteriole", 330, 420, "#d62839", 16, "right"); label(step >= 5 ? "VASOCONSTRICTION (narrows)" : step >= 2 ? "VASODILATION (widens)" : "", 330, 448, "#d62839", 16, "right", 700);
  label("capillary 📌", 575, 330, "#d62839", 16, "left");
  if (step >= 2 && !cold) for (let i = 0; i < 4; i++) { const k = ((ls * 0.7 + i / 4) % 1); ctx.globalAlpha = 1 - k; arrow(430 + i * 35, 150 - k * 20, 430 + i * 35, 110 - k * 40, "#e85d04", 4, 10); ctx.globalAlpha = 1; }
  if (step === 4) { box(560, 300, 210, 150, "#fff3bf", "#d00000"); emoji("🏃", 610, 345, 40); ctx.strokeStyle = "#d00000"; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(585, 320); ctx.lineTo(640, 375); ctx.moveTo(640, 320); ctx.lineTo(585, 375); ctx.stroke(); label("Capillaries", 700, 340, INK, 16); label("DON'T", 700, 365, "#d00000", 20, "center", 700); label("MOVE", 700, 390, "#d00000", 20, "center", 700); label("(no treadmill)", 665, 425, "#6c757d", 14); }
  if (step === 6) { label("+ SHIVERING: muscles contract → respiration releases heat", 390, 495, "#0077b6", 17); }
};

// 7 ─ Negative feedback
DIAG.feedback = (step, ls, t) => {
  title("NEGATIVE FEEDBACK = UNDO");
  const x0 = 60, x1 = 740, ym = 230, sc2 = 130;
  ctx.strokeStyle = "#2b9348"; ctx.setLineDash([10, 8]); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x0, ym); ctx.lineTo(x1, ym); ctx.stroke(); ctx.setLineDash([]);
  label("37 °C set point", x1 - 70, ym - 18, "#2b9348", 16);
  const n = Math.floor(clamp(ls / 6) * 300); ctx.strokeStyle = "#d00000"; ctx.lineWidth = 5; ctx.beginPath();
  for (let i = 0; i <= n; i++) { const k = i / 300; const x = lerp(x0, x1, k); const y = ym - Math.sin(k * 12) * Math.exp(-k * 2.2) * sc2 * 0.8; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke();
  label("too hot ↑  → sweat + vasodilation", 210, 95, "#d00000", 17);
  label("too cold ↓  → shiver + vasoconstriction", 330, 370, "#0077b6", 17);
  box(140, 410, 500, 80, "#fff"); label("change → detected → response REVERSES the change", 390, 450, INK, 19, "center", 700);
};

// 8 ─ Blood glucose
DIAG.glucose = (step, ls, t) => {
  title("BLOOD GLUCOSE CONTROL");
  const gx = 40, gy = 70, gw = 700, gh = 220;
  box(gx, gy, gw, gh, "#fff"); ctx.fillStyle = "rgba(43,147,72,0.12)"; ctx.fillRect(gx, gy + gh * 0.42, gw, gh * 0.22); label("normal", gx + gw - 40, gy + gh * 0.53, "#2b9348", 14);
  const curve = k => { // k 0..1 across time
    if (k < 0.12) return 0.5; if (k < 0.3) return lerp(0.5, 0.92, ease((k - 0.12) / 0.18)); if (k < 0.55) return lerp(0.92, 0.5, ease((k - 0.3) / 0.25));
    if (k < 0.72) return lerp(0.5, 0.14, ease((k - 0.55) / 0.17)); return lerp(0.14, 0.5, ease((k - 0.72) / 0.2)); };
  const endK = [0.12, 0.3, 0.55, 0.72, 1.0][step]; const startK = [0, 0.12, 0.3, 0.55, 0.72][step];
  const kk = lerp(startK, endK, ease(ls / 3));
  ctx.strokeStyle = "#d00000"; ctx.lineWidth = 5; ctx.beginPath(); for (let i = 0; i <= 200 * kk; i++) { const k = i / 200; const x = gx + 10 + k * (gw - 20), y = gy + gh - curve(k) * gh; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke();
  if (kk > 0.12) emoji("🧋", gx + 10 + 0.13 * (gw - 20), gy + gh - 20, 30);
  if (kk > 0.25) pill("INSULIN released", gx + 0.3 * gw, gy + 28, 14, "#2a9d8f", "#fff", "center");
  if (kk > 0.62) pill("dinner late…", gx + 0.62 * gw, gy + gh - 20, 13, "#6c757d", "#fff", "center");
  if (kk > 0.72) pill("GLUCAGON released", gx + 0.77 * gw, gy + gh - 50, 14, "#7b2cbf", "#fff", "center");
  label("time →", gx + gw - 40, gy + gh + 16, "#6c757d", 14);
  // liver warehouse
  box(250, 330, 280, 170, "#f8edeb"); label("LIVER & MUSCLES", 390, 350, "#8c2f39", 18, "center", 700);
  const stored = step === 0 ? 2 : step === 1 ? 2 + Math.floor(ease(ls / 3) * 6) : step <= 3 ? 8 : Math.max(3, 8 - Math.floor(ease(ls / 3) * 5));
  for (let i = 0; i < stored; i++) box(275 + (i % 4) * 58, 445 - Math.floor(i / 4) * 40, 50, 34, "#e9c46a", INK, 4);
  label("glycogen (stored, insoluble)", 390, 520 - 8, "#8c2f39", 14);
  // flows
  if (step === 1 || step === 2) { for (let i = 0; i < 5; i++) { const k = (ls * 0.5 + i / 5) % 1; circle(lerp(110, 290, k), lerp(380, 420, k), 7, "#ffd60a", INK, 2); } label("glucose → glycogen", 120, 470, "#2a9d8f", 16, "left", 700); }
  if (step === 4) { for (let i = 0; i < 5; i++) { const k = (ls * 0.5 + i / 5) % 1; circle(lerp(540, 720, k), lerp(420, 380, k), 7, "#ffd60a", INK, 2); } label("glycogen → glucose", 660, 470, "#7b2cbf", 16, "center", 700); }
};

// 9 ─ Adrenaline
DIAG.adrenaline = (step, ls, t) => {
  title("ADRENALINE: FIGHT OR FLIGHT", "#e85d04");
  // body silhouette
  ctx.fillStyle = "#dee2e6"; ctx.strokeStyle = INK; ctx.lineWidth = 3; circle(200, 120, 45, "#dee2e6", INK, 3); rr(140, 170, 120, 200, 40); ctx.fill(); ctx.stroke(); rr(150, 360, 40, 130, 18); ctx.fill(); ctx.stroke(); rr(210, 360, 40, 130, 18); ctx.fill(); ctx.stroke();
  // kidneys with adrenal hats
  for (const s of [-1, 1]) { ctx.fillStyle = "#a4443b"; ctx.beginPath(); ctx.ellipse(200 + s * 28, 300, 14, 22, 0, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = "#ff6b35"; ctx.beginPath(); ctx.moveTo(200 + s * 28 - 14, 282); ctx.lineTo(200 + s * 28, 262); ctx.lineTo(200 + s * 28 + 14, 282); ctx.closePath(); ctx.fill(); ctx.stroke(); }
  pill("adrenal glands (tiny hats on kidneys)", 200, 515, 14, "#ff6b35", "#fff", "center");
  const fx = [["❤️", "heart rate ↑", 200, 215], ["🫁", "breathing rate ↑", 200, 185], ["👁️", "pupils dilate", 200, 115], ["🍬", "liver: glycogen → glucose", 200, 260], ["💪", "more O₂ + glucose to muscles", 160, 330]];
  fx.forEach(([e, s, x, y], i) => { const k = step >= 1 ? easeOutBack((ls - i * 0.7) / 0.4) : 0; if (k <= 0) return; const by = 95 + i * 78; const pulse = i === 0 ? 1 + Math.sin(t * 18) * 0.12 : 1;
    ctx.globalAlpha = clamp(k); polyline([[x + 40, y], [400, by + 20]], "#e85d04", 2, [6, 6]); ctx.save(); ctx.translate(560, by + 20); ctx.scale(k, k); box(-160, -30, 320, 60, "#fff7ed", "#e85d04"); emoji(e, -125, 0, 30 * pulse); label(s, 15, 0, INK, 19, "center", 700); ctx.restore(); ctx.globalAlpha = 1; });
  if (step >= 2) pill("purpose: get ready to FIGHT or RUN", 560, 500, 16, "#d00000", "#fff", "center");
  if (step >= 3) { const k = easeOutBack(ls / 0.4); ctx.save(); ctx.translate(390, 280); ctx.scale(k, k); circle(0, 0, 150, "rgba(255,255,255,0.95)", "#d00000", 6); emoji("🐯", -30, -20, 110); emoji("📝", 60, 50, 60); label("the quiz", 0, 110, "#d00000", 20, "center", 700); ctx.restore(); }
};

// 10 ─ Nephron + ADH
DIAG.nephron = (step, ls, t) => {
  if (step === 8) {
    title("ADH: THE CHAIN (learn it in order)");
    const items = [["Dehydrated", "#ffadad"], ["Hypothalamus detects", "#ffd6a5"], ["Pituitary releases MORE ADH", "#fdffb6"], ["Collecting duct MORE permeable", "#caffbf"], ["More water reabsorbed (osmosis)", "#9bf6ff"], ["Small volume, concentrated urine", "#bdb2ff"]];
    items.forEach(([s, c], i) => { const k = easeOutBack((ls - i * 0.6) / 0.4); if (k <= 0) return; ctx.save(); ctx.translate(390, 95 + i * 72); ctx.scale(k, k); box(-250, -26, 500, 52, c); label(s, 0, 0, INK, 21, "center", 700); ctx.restore(); if (i < 5 && k > 0.9) arrow(390, 121 + i * 72, 390, 141 + i * 72, INK, 3, 8); });
    return;
  }
  title(step <= 2 ? "INSIDE A NEPHRON" : "THE COLLECTING DUCT + ADH");
  // glomerulus + capsule
  ctx.strokeStyle = "#0096c7"; ctx.lineWidth = 8; ctx.beginPath(); ctx.arc(130, 170, 70, 0.6, Math.PI * 2 - 0.6, false); ctx.stroke();
  ctx.strokeStyle = "#d62839"; ctx.lineWidth = 6; ctx.beginPath(); for (let i = 0; i < 40; i++) { const a = i * 0.9; const r = 28 + Math.sin(i * 1.7) * 12; const x = 130 + Math.cos(a) * r, y = 170 + Math.sin(a) * r; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke();
  label("glomerulus in Bowman's capsule", 130, 270, "#0096c7", 14);
  // tubule path
  const pct = [[190, 130], [230, 100], [270, 140], [310, 100], [350, 140], [380, 160]];
  polyline(pct, "#f4a261", 14); label("1st coiled tubule (PCT)", 300, 75, "#e76f51", 14);
  polyline([[380, 160], [380, 430], [440, 430], [440, 170], [520, 160], [560, 140]], "#f4a261", 14); label("loop of Henle", 410, 455, "#e76f51", 14);
  const perm = step >= 4 && step !== 6 && step !== 7 ? 1 : 0;
  ctx.strokeStyle = step >= 3 ? "#7209b7" : "#f4a261"; ctx.lineWidth = 18; ctx.setLineDash(perm ? [18, 10] : []); ctx.beginPath(); ctx.moveTo(600, 110); ctx.lineTo(600, 470); ctx.stroke(); ctx.setLineDash([]);
  polyline([[560, 140], [600, 120]], "#f4a261", 14);
  label("collecting duct", 680, 90, "#7209b7", 15);
  if (step === 1) { // ultrafiltration
    const small = [["#4cc9f0", "water"], ["#ffd60a", "glucose"], ["#80ed99", "urea"], ["#adb5bd", "salts"]];
    for (let i = 0; i < 16; i++) { const k = ((ls * 0.35 + i / 16) % 1); const a = i * 2.4; const r = lerp(20, 62, k); circle(130 + Math.cos(a) * r, 170 + Math.sin(a) * r, 6, small[i % 4][0], INK, 1.5); }
    for (let i = 0; i < 3; i++) { const a = i * 2.1 + t; circle(130 + Math.cos(a) * 15, 170 + Math.sin(a) * 15, 10, "#e63946", INK, 2); }
    box(20, 300, 330, 190, "#fff"); label("ULTRAFILTRATION (high pressure)", 185, 322, INK, 16, "center", 700);
    small.forEach(([c, s], i) => { circle(50, 355 + i * 26, 7, c, INK, 1.5); label(s + " → squeezed out", 65, 355 + i * 26, INK, 15, "left"); });
    circle(50, 465, 9, "#e63946", INK, 1.5); label("cells + proteins: too big, STAY", 65, 465, "#d00000", 15, "left", 700);
  }
  if (step === 2) { for (let i = 0; i < 6; i++) { const k = ((ls * 0.5 + i / 6) % 1); circle(lerp(260, 300, (i % 3) / 2), lerp(130, 230, k), 7, "#ffd60a", INK, 2); } arrow(280, 160, 280, 260, "#2b9348", 4, 12);
    box(130, 280, 330, 110, "#fff"); label("ALL glucose reabsorbed", 295, 310, "#2b9348", 19, "center", 700); label("by ACTIVE TRANSPORT", 295, 340, INK, 17); label("(healthy urine: zero glucose)", 295, 368, "#6c757d", 14); }
  if (step >= 4 && step <= 5 || step === 6 || step === 7) {
    const many = step === 4 || step === 5; const nA = many ? 10 : 2;
    for (let i = 0; i < nA; i++) circle(560 + hash(i) * 20, 140 + i * 32, 6, "#4361ee", INK, 1.5);
    label(many ? "lots of ADH" : "little ADH", 520, 470, "#4361ee", 15);
    const nW = (step === 5 || (step === 4 && ls > 1)) ? 8 : step === 7 ? 2 : 0;
    for (let i = 0; i < nW; i++) { const k = ((ls * 0.6 + i / nW) % 1); circle(lerp(615, 720, k), 150 + i * 40, 6, "#4cc9f0", INK, 1.5); }
    if (nW) label("water → back to blood", 690, 480, "#0096c7", 14);
  }
  if (step === 5 || step === 7) { const big = step === 7; const bx = 700, by = 300; box(bx - 30, by - (big ? 120 : 50), 60, big ? 120 : 50, big ? "#fff9c4" : "#e9a800", INK, 6); label(big ? "pale & lots" : "dark & little", bx, by + 20, INK, 14); }
};

// 11 ─ Plant tropisms
DIAG.plant = (step, ls, t) => {
  title("PLANTS: ONE HORMONE, ZERO MEETINGS", "#2b9348");
  // soil
  ctx.fillStyle = "#7f5539"; ctx.fillRect(0, 330, 780, 190); label("soil", 60, 350, "#fff", 15);
  // light source
  if (step >= 2) { emoji("☀️", 720, 110, 60); for (let i = 0; i < 4; i++) arrow(690, 120 + i * 40, 600, 140 + i * 40, "#ffb703", 4, 12); label("light", 720, 160, "#e85d04", 16); }
  const bend = step >= 2 ? ease(ls / 2.5) * 0.7 : 0;
  // shoot as stack of cells; left (shaded) side cells longer when bending
  const baseX = 330, baseY = 330, n = 8; let x = baseX, y = baseY, ang = 0;
  for (let i = 0; i < n; i++) {
    const segAng = ang + bend * (i / n) * 0.35; const hL = 28 + bend * 10, hR = 28 - bend * 6;
    ctx.save(); ctx.translate(x, y); ctx.rotate(segAng);
    ctx.fillStyle = "#95d5b2"; ctx.strokeStyle = "#2d6a4f"; ctx.lineWidth = 2;
    ctx.fillRect(-26, -hL, 26, hL); ctx.strokeRect(-26, -hL, 26, hL); ctx.fillRect(0, -hR, 26, hR); ctx.strokeRect(0, -hR, 26, hR);
    if (step >= 1) { const dots = step >= 2 ? [[-13, 0.9], [-18, 0.5], [-8, 0.3]] : [[-12, 0.5], [12, 0.5]]; if (i >= n - 3) dots.forEach(([dx, f]) => circle(dx * (step >= 2 ? 1 : 1), -hL * f, 5, "#ff9f1c", INK, 1.5)); }
    ctx.restore();
    const h = (hL + hR) / 2; x += Math.sin(segAng) * h; y -= Math.cos(segAng) * h; ang = segAng;
  }
  emoji("🌿", x, y - 10, 46);
  if (step >= 1) { pill("auxin (made in shoot tip)", 120, 90, 15, "#ff9f1c", INK, "center"); }
  if (step >= 2) { label("shady side: MORE auxin", 30, 250, "#3a0ca3", 17, "left", 700); label("→ cells grow LONGER", 30, 278, "#3a0ca3", 17, "left", 700); pill("POSITIVE PHOTOTROPISM", 470, 470, 18, "#2b9348", "#fff", "center"); }
  // roots
  ctx.strokeStyle = "#ddb892"; ctx.lineWidth = 8; for (const [dx, k] of [[-20, 1], [0, 1.2], [25, 0.9]]) { ctx.beginPath(); ctx.moveTo(baseX, 335); ctx.quadraticCurveTo(baseX + dx * 2, 400, baseX + dx, 335 + 140 * k * (step >= 3 ? 1 : 0.6)); ctx.stroke(); }
  if (step >= 3) { arrow(560, 360, 560, 470, "#fff", 5, 14); label("gravity", 600, 420, "#fff", 16, "left"); pill("roots: POSITIVE GRAVITROPISM", 230, 500, 15, "#bc6c25", "#fff", "center"); }
};
