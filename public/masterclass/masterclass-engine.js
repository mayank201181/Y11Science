/* Year 11 Edexcel Triple Science — Bulletproof Human Studio Audio + Whiteboard Engine v3 */
(function() {
  "use strict";
  const DATA = window.MASTERCLASS_DATA;
  if (!DATA) return;

  const params = new URLSearchParams(window.location.search);
  const EMBED = params.get("embed") === "1";
  if (EMBED) document.documentElement.dataset.embed = "1";
  document.documentElement.dataset.subject = DATA.subject;

  function resolveInitialTheme() {
    const q = params.get("theme");
    if (q === "dark" || q === "light") return q;
    try {
      const saved = localStorage.getItem("y11sci.theme");
      if (saved === "dark" || saved === "light") return saved;
    } catch (e) {}
    return "light";
  }
  let currentTheme = resolveInitialTheme();
  document.documentElement.dataset.theme = currentTheme;

  function setMasterclassTheme(next) {
    currentTheme = next === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = currentTheme;
    const tb = document.getElementById("themeBtn");
    if (tb) tb.textContent = currentTheme === "light" ? "🌙 Dark" : "☀️ Light";
    try { localStorage.setItem("y11sci.theme", currentTheme); } catch (e) {}
  }
  window.toggleMasterclassTheme = function() {
    setMasterclassTheme(currentTheme === "light" ? "dark" : "light");
  };

  window.addEventListener("message", function(ev) {
    if (ev.data && ev.data.source === "y11-app" && ev.data.type === "theme") {
      setMasterclassTheme(ev.data.theme);
    }
  });

  function postApp(type, extra) {
    if (window.parent === window) return;
    try {
      window.parent.postMessage(Object.assign({
        source: "y11-lesson",
        kind: "masterclass",
        topic: DATA.id,
        type: type
      }, extra || {}), "*");
    } catch (e) {}
  }

  function escHtml(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function fillStrokeRR(ctx, x, y, w, h, r, fill, stroke, lw) {
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
    else ctx.rect(x, y, w, h);
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw || 1.5; ctx.stroke(); }
  }

  function drawCoordinationHoloBoard(ctx, demo, t) {
    const bx = 468, by = 44, bw = 772, bh = 492;
    ctx.save();

    // Sleek semi-translucent glass board
    ctx.fillStyle = "rgba(10, 15, 32, 0.88)";
    ctx.strokeStyle = "rgba(56, 189, 248, 0.55)";
    ctx.lineWidth = 2.5;
    roundRect(ctx, bx, by, bw, bh, 18);
    ctx.fill();
    ctx.stroke();

    ctx.translate(bx, by);

    if (demo === "race" || demo === "chain") {
      ctx.fillStyle = "#38bdf8";
      ctx.font = "800 19px Inter, sans-serif";
      ctx.fillText("NERVOUS vs. HORMONAL COORDINATION (Edexcel 2.80–2.88)", 26, 38);

      // Top lane: Electrical Impulse along Neurone
      ctx.fillStyle = "rgba(56, 189, 248, 0.11)";
      roundRect(ctx, 26, 58, 720, 125, 12);
      ctx.fill();
      ctx.fillStyle = "#e2e8f0";
      ctx.font = "700 15px Inter, sans-serif";
      ctx.fillText("⚡ NERVOUS: Electrical Impulse along Neurone (~100 m/s · Rapid · Short-lived · Pinpoint)", 42, 84);

      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(65, 132);
      ctx.lineTo(685, 132);
      ctx.stroke();
      // Myelin sheaths
      for (let i = 0; i < 6; i++) {
        ctx.fillStyle = "#1e3a5f";
        roundRect(ctx, 95 + i * 95, 120, 68, 24, 8);
        ctx.fill();
      }
      // Fast racing spark!
      const sparkX = 65 + ((t * 520) % 620);
      ctx.fillStyle = "#fbbf24";
      ctx.beginPath();
      ctx.arc(sparkX, 132, 11, 0, Math.PI * 2);
      ctx.fill();

      // Middle lane: Bloodstream Hormone Broadcast
      ctx.fillStyle = "rgba(192, 132, 252, 0.11)";
      roundRect(ctx, 26, 198, 720, 125, 12);
      ctx.fill();
      ctx.fillStyle = "#e2e8f0";
      ctx.fillText("🧪 ENDOCRINE: Chemical Hormones in Blood Plasma (Slower · Longer-lasting · Widespread)", 42, 224);

      ctx.fillStyle = "rgba(244, 63, 94, 0.25)";
      roundRect(ctx, 60, 246, 630, 42, 21);
      ctx.fill();
      for (let i = 0; i < 9; i++) {
        const hx = 75 + ((t * 65 + i * 70) % 600);
        const hy = 267 + Math.sin(t * 3 + i) * 8;
        ctx.fillStyle = "#c084fc";
        ctx.beginPath();
        ctx.arc(hx, hy, 7, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5-Step Chain at bottom
      const steps = ["1. Stimulus", "2. Receptor", "3. CNS Coordinator", "4. Effector", "5. Response"];
      const activeIdx = Math.floor(t * 1.8) % 5;
      steps.forEach(function(st, idx) {
        const sx = 26 + idx * 145;
        ctx.fillStyle = idx === activeIdx ? "rgba(52, 211, 153, 0.28)" : "#151d3b";
        ctx.strokeStyle = idx === activeIdx ? "#34d399" : "#334155";
        ctx.lineWidth = 2;
        roundRect(ctx, sx, 348, 134, 64, 10);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#f8fafc";
        ctx.font = "800 12.5px Inter, sans-serif";
        ctx.fillText(st, sx + 12, 384);
      });
      ctx.fillStyle = "#fbbf24";
      ctx.font = "700 13px Inter, sans-serif";
      ctx.fillText("Exam Rule: Effectors are ONLY muscles (contract) OR glands (secrete hormones/enzymes)!", 28, 448);

    } else if (demo === "reflex" || demo === "synapse") {
      ctx.fillStyle = "#34d399";
      ctx.font = "800 18.5px Inter, sans-serif";
      ctx.fillText(demo === "reflex" ? "SPINAL REFLEX ARC — BYPASSING CONSCIOUS BRAIN (2.90)" : "ZOOM IN: THE SYNAPTIC CLEFT & NEUROTRANSMITTERS (2.89)", 26, 38);

      if (demo === "reflex") {
        // Left: 92C Mug -> Sensory -> Spinal Cord Grey Matter Relay -> Motor -> Biceps
        ctx.fillStyle = "#fb7185";
        roundRect(ctx, 42, 310, 74, 82, 10);
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.font = "800 14px Inter, sans-serif";
        ctx.fillText("92 °C", 58, 355);
        ctx.fillText("MUG", 60, 375);

        // Spinal cord cross section on right
        ctx.fillStyle = "#1e293b";
        ctx.strokeStyle = "#94a3b8";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(565, 225, 135, 115, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Butterfly grey matter
        ctx.fillStyle = "#334155";
        ctx.beginPath();
        ctx.ellipse(535, 225, 42, 74, 0.2, 0, Math.PI * 2);
        ctx.ellipse(595, 225, 42, 74, -0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#cbd5e1";
        ctx.font = "700 12px Inter, sans-serif";
        ctx.fillText("Spinal Cord Grey Matter", 495, 326);

        // Neurone pathways
        // 1. Sensory (blue)
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 4.5;
        ctx.beginPath();
        ctx.moveTo(116, 330);
        ctx.quadraticCurveTo(300, 145, 515, 175);
        ctx.stroke();
        // Dorsal root cell body
        ctx.fillStyle = "#38bdf8";
        ctx.beginPath(); ctx.arc(335, 182, 10, 0, Math.PI * 2); ctx.fill();
        ctx.fillText("1. Sensory neurone", 215, 156);

        // 2. Relay (amber)
        ctx.strokeStyle = "#fbbf24";
        ctx.beginPath();
        ctx.moveTo(518, 180);
        ctx.lineTo(525, 270);
        ctx.stroke();
        ctx.fillStyle = "#fbbf24";
        ctx.fillText("2. Relay neurone", 542, 230);

        // 3. Motor (emerald) -> Biceps muscle
        ctx.strokeStyle = "#34d399";
        ctx.beginPath();
        ctx.moveTo(520, 274);
        ctx.quadraticCurveTo(330, 315, 195, 235);
        ctx.stroke();
        ctx.fillStyle = "#34d399";
        ctx.fillText("3. Motor neurone", 295, 312);

        // Contracting Biceps Effector
        const flex = 1 + 0.15 * Math.sin(t * 6);
        ctx.fillStyle = "#f43f5e";
        ctx.beginPath();
        ctx.ellipse(165, 225, 48 * flex, 22 / flex, -0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.fillText("Biceps Effector", 118, 192);

        // Animated travelling impulse dot along entire 3-neurone arc!
        const phase = (t * 0.75) % 1;
        let ix = 116, iy = 330;
        if (phase < 0.42) {
          const u = phase / 0.42;
          ix = (1-u)*(1-u)*116 + 2*(1-u)*u*300 + u*u*515;
          iy = (1-u)*(1-u)*330 + 2*(1-u)*u*145 + u*u*175;
        } else if (phase < 0.58) {
          const u = (phase - 0.42) / 0.16;
          ix = 518 + u * 7; iy = 180 + u * 90;
        } else {
          const u = (phase - 0.58) / 0.42;
          ix = (1-u)*(1-u)*520 + 2*(1-u)*u*330 + u*u*195;
          iy = (1-u)*(1-u)*274 + 2*(1-u)*u*315 + u*u*235;
        }
        ctx.fillStyle = "#fde047";
        ctx.beginPath(); ctx.arc(ix, iy, 10, 0, Math.PI * 2); ctx.fill();
      } else {
        // SYNAPSE ZOOM-IN
        // Presynaptic knob (left)
        ctx.fillStyle = "#1e3a5f";
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 3.5;
        roundRect(ctx, 50, 95, 250, 290, 48);
        ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#38bdf8";
        ctx.font = "800 14px Inter, sans-serif";
        ctx.fillText("Presynaptic Neurone", 88, 128);
        ctx.fillStyle = "#cbd5e1";
        ctx.font = "600 12px Inter, sans-serif";
        ctx.fillText("Vesicles fuse & release", 88, 150);

        // Vesicles inside presynaptic knob
        for (let v = 0; v < 4; v++) {
          ctx.strokeStyle = "#fbbf24";
          ctx.beginPath();
          ctx.arc(235, 175 + v * 52, 18, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Diffusing Neurotransmitter dots across Synaptic Cleft (x: 300 -> 465)
        ctx.fillStyle = "#fbbf24";
        ctx.font = "800 13px Inter, sans-serif";
        ctx.fillText("Synaptic Cleft (DIFFUSION)", 305, 84);
        for (let n = 0; n < 18; n++) {
          const prog = ((t * 0.55 + n * 0.07) % 1);
          const nx = 302 + prog * 158;
          const ny = 140 + ((n * 37) % 210) + Math.sin(t * 4 + n) * 6;
          ctx.fillStyle = "#fde047";
          ctx.beginPath();
          ctx.arc(nx, ny, 5.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Postsynaptic membrane + specific receptor cups (right)
        ctx.fillStyle = "#14332b";
        ctx.strokeStyle = "#34d399";
        ctx.lineWidth = 3.5;
        roundRect(ctx, 465, 95, 255, 290, 48);
        ctx.fill(); ctx.stroke();
        for (let r = 0; r < 5; r++) {
          ctx.fillStyle = "#34d399";
          ctx.fillRect(457, 138 + r * 48, 14, 22);
        }
        ctx.fillStyle = "#34d399";
        ctx.font = "800 14px Inter, sans-serif";
        ctx.fillText("Postsynaptic Membrane", 498, 128);
        ctx.fillStyle = "#e2e8f0";
        ctx.font = "600 12.5px Inter, sans-serif";
        ctx.fillText("Receptors bind chemical →", 498, 158);
        ctx.fillText("triggers NEW electrical impulse!", 498, 178);
        ctx.fillStyle = "#fb7185";
        ctx.font = "800 13px Inter, sans-serif";
        ctx.fillText("🚨 Trap: Impulses NEVER jump the gap — neurotransmitters DIFFUSE!", 56, 442);
      }

    } else if (demo === "pupil" || demo === "accomm_near" || demo === "accomm_far") {
      const isNear = (demo === "accomm_near");
      const bright = (demo === "pupil") ? (Math.sin(t * 1.4) > 0) : true;
      ctx.fillStyle = "#38bdf8";
      ctx.font = "800 18px Inter, sans-serif";
      ctx.fillText(demo === "pupil" ? "ANTAGONISTIC IRIS PUPIL REFLEX (Edexcel 2.92)" : "EYE ACCOMMODATION — C.C.S.L. RULE (Edexcel 2.91–2.92)", 26, 38);

      // Left panel: Front view of Iris & Pupil
      ctx.fillStyle = "#131c38";
      roundRect(ctx, 28, 62, 255, 365, 14);
      ctx.fill();
      const pupilR = bright ? 20 : 48;
      ctx.fillStyle = "#0ea5e9";
      ctx.beginPath(); ctx.arc(155, 210, 74, 0, Math.PI * 2); ctx.fill();
      // Radial spokes
      ctx.strokeStyle = "rgba(255,255,255,0.35)";
      ctx.lineWidth = bright ? 1.5 : 3.2;
      for (let a = 0; a < 12; a++) {
        const ang = (a / 12) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(155 + Math.cos(ang) * pupilR, 210 + Math.sin(ang) * pupilR);
        ctx.lineTo(155 + Math.cos(ang) * 72, 210 + Math.sin(ang) * 72);
        ctx.stroke();
      }
      // Circular muscle ring
      ctx.strokeStyle = "#fde047";
      ctx.lineWidth = bright ? 4 : 1.5;
      ctx.beginPath(); ctx.arc(155, 210, pupilR + 9, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = "#020617";
      ctx.beginPath(); ctx.arc(155, 210, pupilR, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = "#f8fafc";
      ctx.font = "800 13px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(bright ? "☀️ BRIGHT LIGHT" : "🌙 DIM LIGHT", 155, 98);
      ctx.font = "600 12px Inter, sans-serif";
      ctx.fillStyle = "#cbd5e1";
      ctx.fillText(bright ? "Circular CONTRACT · Radial relax" : "Radial CONTRACT · Circular relax", 155, 325);
      ctx.fillText(bright ? "→ Pupil CONSTRICTS (protects retina)" : "→ Pupil DILATES (more light in)", 155, 346);
      ctx.textAlign = "left";

      // Right panel: Accommodation Ray Diagram
      ctx.fillStyle = "#131c38";
      roundRect(ctx, 300, 62, 444, 365, 14);
      ctx.fill();

      // Eyeball cross-section
      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(575, 235, 108, 0, Math.PI * 2);
      ctx.stroke();

      // Ciliary muscles (top & bottom pads) + suspensory ligaments + Elastic Lens
      const lensHalfW = isNear ? 24 : 11;
      const cilSize = isNear ? 22 : 12;
      ctx.fillStyle = "#fb7185";
      ctx.fillRect(492, 134, 24, cilSize);
      ctx.fillRect(492, 336 - cilSize, 24, cilSize);

      // Suspensory ligaments (wavy/slack if near, straight/taut if distant)
      ctx.strokeStyle = "#fbbf24";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      if (isNear) {
        ctx.moveTo(504, 134 + cilSize); ctx.quadraticCurveTo(516, 172, 504, 185);
        ctx.moveTo(504, 336 - cilSize); ctx.quadraticCurveTo(516, 298, 504, 285);
      } else {
        ctx.moveTo(504, 146); ctx.lineTo(504, 185);
        ctx.moveTo(504, 324); ctx.lineTo(504, 285);
      }
      ctx.stroke();

      // Crystalline Lens
      ctx.fillStyle = "rgba(56, 189, 248, 0.42)";
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.ellipse(504, 235, lensHalfW, 50, 0, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();

      // Incoming Light Rays -> Focused sharply on Retina (x=683, y=235)
      ctx.strokeStyle = "#fde047";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      if (isNear) {
        ctx.moveTo(335, 235); ctx.lineTo(504, 198); ctx.lineTo(682, 235);
        ctx.moveTo(335, 235); ctx.lineTo(504, 272); ctx.lineTo(682, 235);
      } else {
        ctx.moveTo(325, 202); ctx.lineTo(504, 202); ctx.lineTo(682, 235);
        ctx.moveTo(325, 268); ctx.lineTo(504, 268); ctx.lineTo(682, 235);
      }
      ctx.stroke();

      ctx.fillStyle = "#34d399";
      ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText(isNear ? "📱 NEAR OBJECT (20 cm) — C.C.S.L.!" : "🚌 DISTANT OBJECT (50 m)", 320, 96);
      ctx.fillStyle = "#e2e8f0";
      ctx.font = "600 12px Inter, sans-serif";
      ctx.fillText(isNear ? "• Ciliary muscles CONTRACT (ring shrinks)" : "• Ciliary muscles RELAX (ring widens)", 320, 372);
      ctx.fillText(isNear ? "• Suspensory ligaments SLACKEN → FAT convex lens" : "• Suspensory ligaments TAUT → THIN flat lens", 320, 392);

    } else if (demo === "skin_hot" || demo === "skin_cold") {
      const hot = (demo === "skin_hot");
      ctx.fillStyle = hot ? "#fb7185" : "#38bdf8";
      ctx.font = "800 18.5px Inter, sans-serif";
      ctx.fillText(hot ? "37 °C LOCKDOWN — TOO HOT: VASODILATION & SWEATING (2.93)" : "37 °C LOCKDOWN — TOO COLD: VASOCONSTRICTION & SHIVERING (2.93)", 26, 38);

      // Skin cross section
      ctx.fillStyle = "#3b2322";
      roundRect(ctx, 40, 130, 690, 275, 14);
      ctx.fill();
      // Epidermis top strip
      ctx.fillStyle = "#eab696";
      roundRect(ctx, 40, 120, 690, 28, 8);
      ctx.fill();
      ctx.fillStyle = "#0f172a";
      ctx.font = "800 12px Inter, sans-serif";
      ctx.fillText("EPIDERMIS (Skin Surface — Fixed Depth!)", 58, 139);

      // Stationary Capillary Loops (FIXED Y = 172! Never move!)
      const artWidth = hot ? 16 : 5;
      const capAlpha = hot ? 0.95 : 0.25;
      for (let c = 0; c < 4; c++) {
        const cx = 130 + c * 155;
        // Arteriole rising from deep dermis
        ctx.strokeStyle = "rgba(244, 63, 94, " + capAlpha + ")";
        ctx.lineWidth = artWidth;
        ctx.beginPath();
        ctx.moveTo(cx, 380);
        ctx.lineTo(cx, 225);
        ctx.stroke();

        // Fixed capillary loop near epidermis
        ctx.lineWidth = hot ? 7 : 3;
        ctx.beginPath();
        ctx.arc(cx + 22, 185, 22, Math.PI, 0);
        ctx.stroke();

        if (hot) {
          // Heat radiation wavy arrows escaping skin!
          const lift = (t * 35 + c * 15) % 45;
          ctx.strokeStyle = "#fbbf24";
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(cx + 22, 112 - lift);
          ctx.lineTo(cx + 22, 85 - lift);
          ctx.stroke();
        }
      }

      // Sweat droplets OR Erect insulating hair
      if (hot) {
        for (let s = 0; s < 7; s++) {
          const sy = 115 - ((t * 28 + s * 12) % 38);
          ctx.fillStyle = "#38bdf8";
          ctx.beginPath();
          ctx.arc(95 + s * 92, sy, 5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = "#fde047";
        ctx.font = "800 13px Inter, sans-serif";
        ctx.fillText("Arterioles VASODILATE → high blood flow in stationary capillaries → radiation + sweat evaporation!", 42, 442);
      } else {
        // Upright hairs trapping insulating air layer
        ctx.strokeStyle = "#cbd5e1";
        ctx.lineWidth = 3;
        for (let h = 0; h < 6; h++) {
          const hx = 88 + h * 110 + Math.sin(t * 25) * 2; // shiver!
          ctx.beginPath();
          ctx.moveTo(hx, 132);
          ctx.lineTo(hx + 6, 72);
          ctx.stroke();
        }
        ctx.fillStyle = "#38bdf8";
        ctx.font = "800 13px Inter, sans-serif";
        ctx.fillText("Arterioles VASOCONSTRICT + Hairs stand up (insulating air) + Shivering respiration warms blood!", 42, 442);
      }

    } else if (demo === "glucose" || demo === "hormones") {
      ctx.fillStyle = "#c084fc";
      ctx.font = "800 18.5px Inter, sans-serif";
      ctx.fillText(demo === "glucose" ? "BLOOD GLUCOSE NEGATIVE FEEDBACK — PANCREAS & INSULIN (2.94)" : "EDEXCEL TRIPLE ENDOCRINE ROSTER (Spec 2.94–2.95B)", 26, 38);

      if (demo === "glucose") {
        // Blood vessel -> Pancreas Insulin -> Hepatocyte Glycogen chains
        ctx.fillStyle = "rgba(244, 63, 94, 0.22)";
        roundRect(ctx, 40, 72, 690, 74, 37);
        ctx.fill();
        ctx.fillStyle = "#f8fafc";
        ctx.font = "700 13px Inter, sans-serif";
        ctx.fillText("Blood Plasma: Post-Bubble-Tea Glucose Spike + Purple Insulin Keys from Pancreas", 68, 96);

        for (let g = 0; g < 10; g++) {
          const gx = 68 + ((t * 85 + g * 64) % 630);
          ctx.fillStyle = "#fbbf24";
          ctx.fillRect(gx, 112, 12, 12);
          ctx.fillStyle = "#c084fc";
          ctx.beginPath(); ctx.arc(gx + 22, 118, 6, 0, Math.PI * 2); ctx.fill();
        }

        // Pancreas & Liver boxes
        ctx.fillStyle = "#1e1b4b";
        ctx.strokeStyle = "#c084fc";
        ctx.lineWidth = 2.5;
        roundRect(ctx, 45, 185, 275, 195, 14);
        ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#c084fc";
        ctx.font = "800 15px Inter, sans-serif";
        ctx.fillText("1. PANCREAS", 65, 216);
        ctx.fillStyle = "#e2e8f0";
        ctx.font = "600 13px Inter, sans-serif";
        ctx.fillText("• Detects high blood glucose", 65, 246);
        ctx.fillText("• Secretes INSULIN into blood", 65, 270);
        ctx.fillText("• Type 1 Diabetes: lacks insulin", 65, 294);

        ctx.fillStyle = "#14332b";
        ctx.strokeStyle = "#34d399";
        roundRect(ctx, 365, 185, 365, 195, 14);
        ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#34d399";
        ctx.font = "800 15px Inter, sans-serif";
        ctx.fillText("2. LIVER & MUSCLE CELLS", 385, 216);
        ctx.fillStyle = "#e2e8f0";
        ctx.font = "600 13px Inter, sans-serif";
        ctx.fillText("• Absorb soluble glucose from blood", 385, 246);
        ctx.fillText("• Link into insoluble GLYCOGEN store:", 385, 270);
        // Animated linked glycogen chain
        for (let k = 0; k < 8; k++) {
          ctx.fillStyle = "#fbbf24";
          ctx.fillRect(395 + k * 34, 298, 22, 22);
          if (k < 7) {
            ctx.strokeStyle = "#34d399";
            ctx.lineWidth = 3;
            ctx.beginPath(); ctx.moveTo(417 + k * 34, 309); ctx.lineTo(429 + k * 34, 309); ctx.stroke();
          }
        }
        ctx.fillStyle = "#fbbf24";
        ctx.font = "700 12.5px Inter, sans-serif";
        ctx.fillText("Insoluble glycogen won't lower water potential → prevents osmotic cell swelling!", 48, 435);
      } else {
        const cards = [
          ["Adrenaline", "Adrenal glands", "↑ Heart & breathing rate, glycogen → glucose (fight/flight)"],
          ["Insulin", "Pancreas", "↓ Blood glucose: converts glucose → insoluble glycogen in liver"],
          ["FSH (Triple)", "Pituitary gland", "Matures egg follicle in ovary + stimulates oestrogen"],
          ["LH (Triple)", "Pituitary gland", "Triggers ovulation (egg release at Day 14) + corpus luteum"],
          ["Oestrogen & Prog.", "Ovaries / Placenta", "Oestrogen repairs lining; Progesterone maintains lining"],
          ["ADH (Triple)", "Pituitary gland", "↑ Collecting duct permeability → more H₂O reabsorbed"]
        ];
        cards.forEach(function(c, i) {
          const col = i % 2, row = Math.floor(i / 2);
          const cx = 32 + col * 362, cy = 62 + row * 126;
          ctx.fillStyle = "#161e3d";
          ctx.strokeStyle = i >= 2 ? "#c084fc" : "#38bdf8";
          ctx.lineWidth = 2;
          roundRect(ctx, cx, cy, 346, 110, 12);
          ctx.fill(); ctx.stroke();
          ctx.fillStyle = "#fbbf24";
          ctx.font = "800 14px Inter, sans-serif";
          ctx.fillText(c[0] + "  ·  " + c[1], cx + 14, cy + 28);
          ctx.fillStyle = "#e2e8f0";
          ctx.font = "600 12px Inter, sans-serif";
          ctx.fillText(c[2], cx + 14, cy + 60, 318);
        });
      }

    } else if (demo === "excretion" || demo === "nephron" || demo === "adh_high" || demo === "adh_low") {
      const lowADH = (demo === "adh_low");
      ctx.fillStyle = "#fbbf24";
      ctx.font = "800 18px Inter, sans-serif";
      ctx.fillText(
        demo === "excretion" ? "EXCRETION ORGANS vs. EGESTION (Edexcel 2.70–2.71)" :
        demo === "nephron" ? "TRIPLE PAPER 2: ULTRAFILTRATION & 100% GLUCOSE RESCUE (2.72B–2.77B)" :
        "OSMOREGULATION: PITUITARY ADH & COLLECTING DUCT (2.78B & 2.95B)",
        26, 38
      );

      // Draw Live Nephron Pipeline!
      // 1. Bowman's Capsule & High-Pressure Glomerulus
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(115, 165, 52, 0.35 * Math.PI, 1.65 * Math.PI);
      ctx.stroke();
      ctx.fillStyle = "rgba(244, 63, 94, 0.38)";
      ctx.beginPath(); ctx.arc(108, 165, 30, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#fb7185";
      ctx.font = "800 12.5px Inter, sans-serif";
      ctx.fillText("1. Glomerulus (High P)", 45, 95);
      ctx.fillStyle = "#94a3b8";
      ctx.font = "600 11.5px Inter, sans-serif";
      ctx.fillText("RBCs & Proteins STAY", 45, 240);

      // 2. PCT (Proximal Convoluted Tubule)
      ctx.strokeStyle = "#fbbf24";
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.moveTo(162, 165);
      ctx.lineTo(355, 165);
      ctx.stroke();
      ctx.fillStyle = "#fbbf24";
      ctx.font = "800 13px Inter, sans-serif";
      ctx.fillText("2. Proximal Tubule (PCT)", 182, 132);
      ctx.fillStyle = "#34d399";
      ctx.font = "700 12px Inter, sans-serif";
      ctx.fillText("⬆ 100% Glucose Active Transport!", 168, 204);

      // Animated gold glucose dots jumping BACK into blood at PCT!
      for (let g = 0; g < 5; g++) {
        const prog = ((t * 0.8 + g * 0.2) % 1);
        const gx = 180 + prog * 145;
        const gy = 165 - Math.pow(prog, 1.4) * 58;
        ctx.fillStyle = "#fde047";
        ctx.beginPath(); ctx.arc(gx, gy, 5.5, 0, Math.PI * 2); ctx.fill();
      }

      // 3. Loop of Henle
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 9;
      ctx.beginPath();
      ctx.moveTo(355, 165);
      ctx.lineTo(355, 345);
      ctx.arc(395, 345, 40, Math.PI, 0, true);
      ctx.lineTo(435, 165);
      ctx.lineTo(540, 165);
      ctx.stroke();
      ctx.fillStyle = "#38bdf8";
      ctx.fillText("3. Loop of Henle", 342, 408);

      // 4. Collecting Duct (x = 540, y = 115..365) + ADH Permeability Gates!
      ctx.strokeStyle = lowADH ? "#64748b" : "#c084fc";
      ctx.lineWidth = 16;
      ctx.beginPath();
      ctx.moveTo(540, 115);
      ctx.lineTo(540, 365);
      ctx.stroke();

      ctx.fillStyle = "#c084fc";
      ctx.font = "800 13px Inter, sans-serif";
      ctx.fillText(lowADH ? "4. Collecting Duct (LOW ADH)" : "4. Collecting Duct (HIGH ADH)", 485, 95);

      // Water reabsorption arrows out of collecting duct
      const arrowCount = lowADH ? 1 : 6;
      for (let w = 0; w < arrowCount; w++) {
        const wy = 145 + w * 36;
        const shift = (t * 40 + w * 8) % 28;
        ctx.fillStyle = "#38bdf8";
        ctx.beginPath();
        ctx.arc(556 + shift, wy, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Final Urine Beaker at bottom-right
      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 2.5;
      ctx.strokeRect(618, 250, 112, 130);
      const fillH = lowADH ? 102 : 36;
      ctx.fillStyle = lowADH ? "rgba(254, 249, 195, 0.55)" : "rgba(217, 119, 6, 0.88)";
      ctx.fillRect(620, 378 - fillH, 108, fillH);
      ctx.fillStyle = "#f8fafc";
      ctx.font = "800 12px Inter, sans-serif";
      ctx.fillText(lowADH ? "Large Dilute Urine" : "Small Conc. Urine", 618, 404);
      ctx.fillStyle = "#94a3b8";
      ctx.font = "600 11px Inter, sans-serif";
      ctx.fillText("H₂O + Urea + Ions", 622, 422);
      ctx.fillStyle = "#34d399";
      ctx.fillText("(0% Glucose/Protein)", 616, 438);

    } else {
      // Ch 8: Auxin Phototropism & Geotropism (or Finale)
      const rootMode = (demo === "auxin_root");
      ctx.fillStyle = "#34d399";
      ctx.font = "800 18.5px Inter, sans-serif";
      ctx.fillText(rootMode ? "AUXIN PARADOX: STEMS GROW UP, ROOTS GROW DOWN (2.84–2.85)" : "UNILATERAL LIGHT & AUXIN ON THE SHADED SIDE (2.83–2.85)", 26, 38);

      // Sun on top-left
      ctx.fillStyle = "#fde047";
      ctx.beginPath(); ctx.arc(98, 122, 32, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#fef08a";
      ctx.font = "800 12px Inter, sans-serif";
      ctx.fillText("☀️ Unilateral Light", 48, 176);

      // Bending Coleoptile Shoot curving toward left sun!
      ctx.strokeStyle = "#22c55e";
      ctx.lineWidth = 36;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(310, 395);
      ctx.quadraticCurveTo(335, 235, 220, 145);
      ctx.stroke();

      // Golden Auxin dots concentrated along the RIGHT (shaded) side of shoot!
      for (let a = 0; a < 9; a++) {
        const u = a / 9;
        const ax = (1-u)*(1-u)*324 + 2*(1-u)*u*350 + u*u*235;
        const ay = (1-u)*(1-u)*385 + 2*(1-u)*u*235 + u*u*152;
        ctx.fillStyle = "#fbbf24";
        ctx.beginPath(); ctx.arc(ax, ay, 5.5, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = "#f8fafc";
      ctx.font = "700 13px Inter, sans-serif";
      ctx.fillText("SHOOT (+Phototropism):", 70, 430);
      ctx.fillStyle = "#cbd5e1";
      ctx.fillText("Auxin on SHADED side → stimulates cell elongation", 70, 450);

      // Right box: Horizontal Root in Soil (+Geotropism)
      ctx.fillStyle = "#161f38";
      roundRect(ctx, 430, 88, 312, 330, 14);
      ctx.fill();
      ctx.fillStyle = "#fbbf24";
      ctx.font = "800 14px Inter, sans-serif";
      ctx.fillText("GRAVITY ON HORIZONTAL ROOT", 455, 120);
      ctx.strokeStyle = "#eab308";
      ctx.lineWidth = 24;
      ctx.beginPath();
      ctx.moveTo(465, 215);
      ctx.quadraticCurveTo(595, 215, 645, 325);
      ctx.stroke();
      ctx.fillStyle = "#e2e8f0";
      ctx.font = "600 12.5px Inter, sans-serif";
      ctx.fillText("• Auxin pools on LOWER side", 455, 360);
      ctx.fillStyle = "#fb7185";
      ctx.fillText("• High auxin INHIBITS root elongation!", 455, 382);
      ctx.fillStyle = "#34d399";
      ctx.fillText("• Upper side grows faster → bends DOWN", 455, 404);
    }

    ctx.restore();
  }



  /* =========================================================================
   * 7A. BESPOKE 37-EPISODE SMART-BOARD & PROP-BENCH VISUALIZER ENGINE
   *     Every single Biology (14), Chemistry (13), and Physics (10) episode
   *     renders custom animated 60fps diagrams on the Smart-Board AND custom
   *     physical cartoon props on the foreground Maple Lab Bench!
   * ========================================================================= */

  function boardHeader(ctx, title, sub, col) {
    ctx.fillStyle = col || "#38bdf8";
    ctx.font = "900 18px Inter, sans-serif";
    ctx.fillText(title, 26, 36);
    if (sub) {
      ctx.fillStyle = "#cbd5e1";
      ctx.font = "700 13px Inter, sans-serif";
      ctx.fillText(sub, 26, 58);
    }
  }

  function boardFooterRule(ctx, text, col) {
    fillStrokeRR(ctx, 24, 430, 724, 42, 10, "rgba(15, 23, 42, 0.92)", col || "#fbbf24", 1.8);
    ctx.fillStyle = col || "#fde047";
    ctx.font = "800 13px Inter, sans-serif";
    ctx.fillText(text, 40, 456);
  }

  function drawCustomTopicBoard(ctx, slug, phase, t) {
    // Episode 11 (bio-coordination) uses our ultra-detailed 8-chapter drawHoloBoard directly!
    if (slug === "bio-coordination") {
      drawCoordinationHoloBoard(ctx, phase, t);
      return;
    }

    const bx = 468, by = 44, bw = 772, bh = 492;
    ctx.save();
    fillStrokeRR(ctx, bx, by, bw, bh, 18, "rgba(10, 15, 32, 0.90)", "rgba(56, 189, 248, 0.58)", 2.5);
    ctx.translate(bx, by);

    // -------------------- BIOLOGY (13 OTHER EPISODES) --------------------
    if (slug === "bio-cells") {
      boardHeader(ctx, "CELL STRUCTURE, KINGDOMS & STEM CELLS (4BI1 · 1.1–2.6B)", "Compare Eukaryotic Plant/Animal vs Prokaryotic Bacteria & Saprotrophic Fungi", "#34d399");
      // 3 Side-by-side animated cell cards
      const cards = [
        { x: 28,  col: "#22c55e", name: "PLANT (Eukaryote)", sub1: "Cellulose Wall + Vacuole", sub2: "Chloroplasts + Nucleus" },
        { x: 268, col: "#f59e0b", name: "MUCOR (Fungus)",    sub1: "CHITIN Wall · Hyphae",    sub2: "Saprotrophic Enzymes!" },
        { x: 508, col: "#38bdf8", name: "BACTERIA (Prokaryote)", sub1: "NO Nucleus! Naked Loop", sub2: "+ Plasmids · Peptidoglycan" }
      ];
      cards.forEach(function(c, idx) {
        fillStrokeRR(ctx, c.x, 78, 224, 235, 14, "rgba(15,23,42,0.85)", c.col, 2.5);
        ctx.fillStyle = c.col; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText(c.name, c.x + 14, 104);
        if (idx === 0) {
          fillStrokeRR(ctx, c.x + 36, 122, 152, 112, 14, "rgba(34,197,94,0.18)", "#22c55e", 4);
          fillStrokeRR(ctx, c.x + 68, 146, 76, 56, 12, "rgba(56,189,248,0.28)", "#38bdf8", 2);
          ctx.fillStyle = "#a855f7"; ctx.beginPath(); ctx.arc(c.x + 54, 152, 12, 0, Math.PI * 2); ctx.fill();
          for (let k = 0; k < 4; k++) { ctx.fillStyle = "#4ade80"; ctx.beginPath(); ctx.ellipse(c.x + 54 + k * 28, 218, 9, 5, 0, 0, Math.PI * 2); ctx.fill(); }
        } else if (idx === 1) {
          ctx.strokeStyle = "#f59e0b"; ctx.lineWidth = 10; ctx.lineCap = "round";
          ctx.beginPath(); ctx.moveTo(c.x + 35, 195); ctx.quadraticCurveTo(c.x + 112, 145, c.x + 188, 190); ctx.moveTo(c.x + 105, 168); ctx.lineTo(c.x + 145, 128); ctx.stroke();
          for (let e = 0; e < 5; e++) {
            const r = (t * 28 + e * 12) % 36;
            ctx.fillStyle = "#fde047"; ctx.beginPath(); ctx.arc(c.x + 60 + e * 26, 205 + r * 0.7, 4, 0, Math.PI * 2); ctx.fill();
          }
        } else {
          fillStrokeRR(ctx, c.x + 42, 136, 140, 82, 40, "rgba(56,189,248,0.16)", "#38bdf8", 3.5);
          ctx.strokeStyle = "#f472b6"; ctx.lineWidth = 2.5;
          ctx.beginPath(); ctx.ellipse(c.x + 98, 177, 32, 18, Math.sin(t * 2) * 0.2, 0, Math.PI * 2); ctx.stroke();
          ctx.strokeStyle = "#fde047"; ctx.beginPath(); ctx.arc(c.x + 154, 166, 9, 0, Math.PI * 2); ctx.arc(c.x + 150, 192, 7, 0, Math.PI * 2); ctx.stroke();
        }
        ctx.fillStyle = "#f8fafc"; ctx.font = "700 12px Inter, sans-serif";
        ctx.fillText(c.sub1, c.x + 14, 268); ctx.fillStyle = "#94a3b8"; ctx.fillText(c.sub2, c.x + 14, 290);
      });
      // Levels chain
      const lvls = ["Organelles", "Cells", "Tissues", "Organs", "Systems"];
      lvls.forEach(function(lv, i) {
        const active = (Math.floor(t * 1.6) % 5) === i;
        fillStrokeRR(ctx, 28 + i * 146, 336, 134, 48, 10, active ? "rgba(52,211,153,0.28)" : "#151f3d", "#34d399", 1.8);
        ctx.fillStyle = "#f8fafc"; ctx.font = "800 13px Inter, sans-serif"; ctx.fillText((i + 1) + ". " + lv, 42 + i * 146, 365);
      });
      boardFooterRule(ctx, "Exam Lock: Cell WALL = rigid strength (cellulose/chitin); Cell MEMBRANE = selective control!", "#34d399");

    } else if (slug === "bio-transport-cell") {
      boardHeader(ctx, "DIFFUSION, OSMOSIS & ACTIVE TRANSPORT (4BI1 · 2.15–2.17)", "SA:V Agar Cubes · Potato % Mass Curve · Turgid vs Plasmolysed · ATP Carrier", "#38bdf8");
      // Left: 1 cm vs 3 cm pink agar cubes
      fillStrokeRR(ctx, 28, 76, 220, 165, 12, "#131d3b", "#f472b6", 2);
      ctx.fillStyle = "#f472b6"; ctx.font = "800 13px Inter, sans-serif"; ctx.fillText("SA:V AGAR IN ACID", 44, 100);
      fillStrokeRR(ctx, 56, 145, 34, 34, 4, "rgba(255,255,255,0.22)", "#e2e8f0", 2);
      ctx.fillStyle = "#6ee7b7"; ctx.font = "800 11px Inter, sans-serif"; ctx.fillText("1cm (6:1)", 45, 202);
      fillStrokeRR(ctx, 132, 118, 86, 86, 6, "rgba(255,255,255,0.18)", "#e2e8f0", 2);
      fillStrokeRR(ctx, 152, 138, 46, 46, 4, "#ec4899", null, 0);
      ctx.fillStyle = "#fda4af"; ctx.fillText("3cm (2:1 Pink!)", 132, 224);

      // Middle: Potato % Mass Graph crossing 0%
      fillStrokeRR(ctx, 266, 76, 240, 165, 12, "#131d3b", "#34d399", 2);
      ctx.fillStyle = "#34d399"; ctx.font = "800 13px Inter, sans-serif"; ctx.fillText("POTATO % ΔMASS vs [SUCROSE]", 278, 100);
      ctx.strokeStyle = "#64748b"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(295, 115); ctx.lineTo(295, 222); ctx.moveTo(295, 168); ctx.lineTo(485, 168); ctx.stroke();
      ctx.strokeStyle = "#fde047"; ctx.lineWidth = 3.5;
      ctx.beginPath(); ctx.moveTo(302, 124); ctx.lineTo(476, 214); ctx.stroke();
      ctx.fillStyle = "#38bdf8"; ctx.beginPath(); ctx.arc(388, 168, 6, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#f8fafc"; ctx.font = "700 11px Inter, sans-serif"; ctx.fillText("0% = Isotonic (~0.35 M)", 348, 156);

      // Right: Active Transport Carrier Protein + ATP
      fillStrokeRR(ctx, 524, 76, 220, 165, 12, "#131d3b", "#fbbf24", 2);
      ctx.fillStyle = "#fbbf24"; ctx.font = "800 13px Inter, sans-serif"; ctx.fillText("ACTIVE TRANSPORT (ATP)", 538, 100);
      fillStrokeRR(ctx, 536, 148, 196, 24, 6, "#334155", "#94a3b8", 1.5);
      const rot = Math.sin(t * 4) * 0.35;
      ctx.save(); ctx.translate(634, 160); ctx.rotate(rot);
      fillStrokeRR(ctx, -20, -24, 40, 48, 10, "#a855f7", "#f8fafc", 2);
      ctx.restore();
      ctx.fillStyle = "#fde047"; ctx.font = "900 12px Inter, sans-serif"; ctx.fillText("LOW → HIGH + ATP ⚡", 564, 218);

      // Bottom strip: Turgid vs Plasmolysed Plant vs Burst RBC
      fillStrokeRR(ctx, 28, 258, 716, 154, 12, "#101935", "#38bdf8", 1.8);
      ctx.fillStyle = "#bae6fd"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("PURE H₂O: Plant = TURGID (Wall holds!) · RBC = BURSTS (No wall!)   |   CONC SYRUP: Plant = PLASMOLYSED!", 44, 286);
      fillStrokeRR(ctx, 75, 304, 130, 88, 16, "rgba(34,197,94,0.28)", "#22c55e", 4.5);
      fillStrokeRR(ctx, 315, 304, 130, 88, 10, "rgba(15,23,42,0.6)", "#22c55e", 3.5);
      fillStrokeRR(ctx, 348, 326, 64, 44, 16, "rgba(244,63,94,0.4)", "#fb7185", 2);
      ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 3.5; ctx.setLineDash([6, 5]);
      ctx.beginPath(); ctx.arc(595, 348, 36 + Math.sin(t * 6) * 4, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
      boardFooterRule(ctx, "Osmosis = Net movement of WATER ONLY across a partially permeable membrane!", "#38bdf8");

    } else if (slug === "bio-molecules") {
      boardHeader(ctx, "FOOD TESTS & CALORIMETRY LAB (4BI1 · 2.7–2.9 & 2.33B)", "Starch · Glucose (80 °C Heat!) · Protein · Lipid Emulsion · Q = mcΔT / m_food", "#fbbf24");
      const tests = [
        { name: "STARCH",  reag: "+ Iodine (Room T)", col: "#1e1b4b", rim: "#818cf8", res: "Blue-Black" },
        { name: "GLUCOSE", reag: "+ Benedict's + 80°C!", col: "#dc2626", rim: "#fb923c", res: "Brick-Red Ppt" },
        { name: "PROTEIN", reag: "+ Biuret (Room T)", col: "#a855f7", rim: "#e879f9", res: "Lilac / Purple" },
        { name: "LIPID",   reag: "Ethanol → Water",   col: "#f1f5f9", rim: "#38bdf8", res: "Milky Emulsion" }
      ];
      tests.forEach(function(ts, i) {
        const x = 30 + i * 182;
        fillStrokeRR(ctx, x, 78, 168, 224, 14, "#131d3b", ts.rim, 2.2);
        ctx.fillStyle = ts.rim; ctx.font = "900 14px Inter, sans-serif"; ctx.fillText(ts.name, x + 16, 104);
        ctx.fillStyle = "#cbd5e1"; ctx.font = "700 11.5px Inter, sans-serif"; ctx.fillText(ts.reag, x + 16, 124);
        fillStrokeRR(ctx, x + 62, 138, 44, 112, 20, "rgba(255,255,255,0.12)", "#cbd5e1", 2.5);
        fillStrokeRR(ctx, x + 66, 178, 36, 68, 16, ts.col, null, 0);
        if (i === 1) {
          ctx.fillStyle = "#f97316"; ctx.font = "900 12px Inter, sans-serif"; ctx.fillText("🔥 80 °C BATH", x + 38, 268);
        }
        ctx.fillStyle = "#fef08a"; ctx.font = "800 12.5px Inter, sans-serif"; ctx.fillText(ts.res, x + 16, 290);
      });
      fillStrokeRR(ctx, 30, 318, 712, 96, 12, "#101935", "#34d399", 2);
      ctx.fillStyle = "#6ee7b7"; ctx.font = "900 15px Inter, sans-serif";
      ctx.fillText("🔥 FOOD CALORIMETRY:  Energy (J/g) = (m_water × 4.2 × ΔT) ÷ mass of food burned (g)", 48, 350);
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 13px Inter, sans-serif";
      ctx.fillText("Elements: Carbs & Lipids = C, H, O  |  Proteins = C, H, O, N (amino acids)  |  Lipids = 1 Glycerol + 3 Fatty Acids", 48, 384);
      boardFooterRule(ctx, "Trap Shield: Cold Benedict's stays BLUE! Always heat Benedict's in an 80 °C water bath!", "#fbbf24");

    } else if (slug === "bio-enzymes") {
      boardHeader(ctx, "ENZYME LOCK-AND-KEY, 37 °C OPTIMUM & DENATURATION (2.10–2.14B)", "Complementary Active Site · Asymmetric Temp Graph · Iodine Spotting Tile", "#c084fc");
      // Left: Rate vs Temp Graph
      fillStrokeRR(ctx, 28, 78, 355, 215, 14, "#131d3b", "#38bdf8", 2);
      ctx.strokeStyle = "#64748b"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(64, 102); ctx.lineTo(64, 258); ctx.lineTo(358, 258); ctx.stroke();
      ctx.strokeStyle = "#34d399"; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(68, 248); ctx.quadraticCurveTo(175, 210, 238, 116); ctx.stroke();
      ctx.strokeStyle = "#ef4444"; ctx.beginPath(); ctx.moveTo(238, 116); ctx.quadraticCurveTo(275, 130, 305, 256); ctx.stroke();
      ctx.fillStyle = "#fde047"; ctx.font = "800 12px Inter, sans-serif";
      ctx.fillText("37 °C Optimum", 198, 106);
      ctx.fillStyle = "#fca5a5"; ctx.fillText("DENATURED! (Warped site)", 252, 195);
      ctx.fillStyle = "#93c5fd"; ctx.fillText("More KE & collisions ↗", 76, 185);

      // Right: Spotting Tile 8 Wells
      fillStrokeRR(ctx, 402, 78, 342, 215, 14, "#f8fafc", "#475569", 3);
      ctx.fillStyle = "#0f172a"; ctx.font = "900 13px Inter, sans-serif";
      ctx.fillText("STARCH + AMYLASE SPOTTING TILE (30s)", 424, 104);
      const activeWell = Math.floor(t * 2.2) % 8;
      for (let w = 0; w < 8; w++) {
        const wx = 445 + (w % 4) * 76, wy = 148 + Math.floor(w / 4) * 72;
        const digested = w >= 5;
        ctx.fillStyle = digested ? "#d97706" : "#1e1b4b";
        ctx.strokeStyle = (w === activeWell) ? "#ec4899" : "#94a3b8";
        ctx.lineWidth = (w === activeWell) ? 4 : 2;
        ctx.beginPath(); ctx.arc(wx, wy, 22, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#334155"; ctx.font = "800 10.5px Inter, sans-serif";
        ctx.fillText((w * 30) + "s", wx - 10, wy + 36);
      }
      fillStrokeRR(ctx, 28, 310, 716, 102, 12, "#101935", "#c084fc", 2);
      ctx.fillStyle = "#f5d0fe"; ctx.font = "800 14px Inter, sans-serif";
      ctx.fillText("🔑 Lock & Key: Substrate has COMPLEMENTARY shape to 3D Active Site → Enzyme-Substrate Complex!", 44, 344);
      ctx.fillStyle = "#fde047"; ctx.font = "700 13px Inter, sans-serif";
      ctx.fillText("Practical Rule: Equilibrate starch & amylase separately in water bath for 5 min BEFORE mixing + add pH Buffer!", 44, 380);
      boardFooterRule(ctx, "NEVER write 'the enzyme dies at 60 °C'! Proteins are non-living — their active site DENATURES!", "#fb7185");

    } else if (slug === "bio-plant-nutrition") {
      boardHeader(ctx, "PHOTOSYNTHESIS, LEAF LAYERS & HCO₃⁻ INDICATOR (2.18–2.23)", "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ · Limiting Factors · NO₃⁻ & Mg²⁺ · Indicator Colours", "#22c55e");
      // Left: Leaf Layers
      fillStrokeRR(ctx, 28, 76, 345, 225, 14, "#0f241d", "#4ade80", 2.2);
      fillStrokeRR(ctx, 46, 94, 308, 16, 4, "#fef08a", null, 0); // Waxy cuticle
      fillStrokeRR(ctx, 46, 112, 308, 22, 4, "rgba(226,232,240,0.45)", null, 0); // Upper epidermis
      for (let p = 0; p < 7; p++) fillStrokeRR(ctx, 48 + p * 44, 138, 38, 66, 6, "#16a34a", "#bbf7d0", 1.5);
      for (let s = 0; s < 5; s++) { ctx.fillStyle = "#22c55e"; ctx.beginPath(); ctx.arc(72 + s * 62, 232, 16, 0, Math.PI * 2); ctx.fill(); }
      ctx.fillStyle = "#ffffff"; ctx.font = "800 11px Inter, sans-serif";
      ctx.fillText("Transparent Upper Epidermis (0 chloroplasts)", 54, 127);
      ctx.fillText("Palisade Mesophyll (Max Chloroplasts!)", 68, 175);
      ctx.fillText("Spongy Air Spaces + Guard Cells / Stomata", 62, 282);

      // Right: 3 Hydrogencarbonate Indicator Tubes!
      fillStrokeRR(ctx, 392, 76, 352, 225, 14, "#131d3b", "#c084fc", 2);
      ctx.fillStyle = "#f8fafc"; ctx.font = "900 13px Inter, sans-serif";
      ctx.fillText("HYDROGENCARBONATE CO₂ INDICATOR", 414, 102);
      [
        { x: 425, col: "#9333ea", lbl: "Bright Light", sub: "Low CO₂ (Purple)" },
        { x: 535, col: "#ea580c", lbl: "Air / Dusk",   sub: "0.04% (Red-Org)" },
        { x: 645, col: "#facc15", lbl: "Dark / Foil",  sub: "High CO₂ (Yellow)" }
      ].forEach(function(tb) {
        fillStrokeRR(ctx, tb.x, 120, 64, 122, 24, "rgba(255,255,255,0.14)", "#cbd5e1", 2.2);
        fillStrokeRR(ctx, tb.x + 5, 152, 54, 85, 20, tb.col, null, 0);
        ctx.fillStyle = "#f8fafc"; ctx.font = "800 11px Inter, sans-serif"; ctx.fillText(tb.lbl, tb.x - 4, 260);
        ctx.fillStyle = "#fde047"; ctx.fillText(tb.sub, tb.x - 10, 278);
      });
      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#22c55e", 2);
      ctx.fillStyle = "#bbf7d0"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("Minerals: NO₃⁻ → Amino acids & Proteins (stunted if low)  |  Mg²⁺ → Chlorophyll (yellow chlorosis if low)", 44, 348);
      ctx.fillStyle = "#fde047"; ctx.font = "700 13px Inter, sans-serif";
      ctx.fillText("Starch Test: Destarch 48h dark → Boil water → Hot Ethanol in water bath (Bunsen OFF!) → Rinse → Iodine!", 44, 382);
      boardFooterRule(ctx, "Once the light graph goes flat, light is NO LONGER limiting — CO₂ or temperature is!", "#4ade80");

    } else if (slug === "bio-human-nutrition") {
      boardHeader(ctx, "DIGESTION, BILE EMULSIFICATION & ILEUM VILLI (2.24–2.33B)", "Peristalsis · Amylase/Maltase/Protease/Lipase · Liver Bile · Villus Capillaries & Lacteal", "#f472b6");
      // Left: Bile Emulsification visual
      fillStrokeRR(ctx, 28, 76, 350, 224, 14, "#131d3b", "#4ade80", 2);
      ctx.fillStyle = "#4ade80"; ctx.font = "900 14px Inter, sans-serif";
      ctx.fillText("LIVER → GALL BLADDER → BILE (NOT Enzyme!)", 42, 102);
      ctx.fillStyle = "#facc15"; ctx.beginPath(); ctx.arc(98, 185, 42, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#4ade80"; ctx.font = "900 16px Inter, sans-serif"; ctx.fillText("──Bile──▶", 155, 190);
      for (let d = 0; d < 9; d++) {
        ctx.fillStyle = "#facc15";
        ctx.beginPath(); ctx.arc(262 + (d % 3) * 32, 152 + Math.floor(d / 3) * 32, 10, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 12px Inter, sans-serif";
      ctx.fillText("1. Neutralises stomach HCl → alkaline pH", 44, 258);
      ctx.fillText("2. Emulsifies fat → huge SA for LIPASE!", 44, 280);

      // Right: Giant Cutaway Villus
      fillStrokeRR(ctx, 396, 76, 348, 224, 14, "#131d3b", "#f472b6", 2);
      ctx.fillStyle = "#f472b6"; ctx.font = "900 14px Inter, sans-serif"; ctx.fillText("ILEUM VILLUS (1-Cell Thick + Microvilli)", 414, 102);
      ctx.strokeStyle = "#fda4af"; ctx.lineWidth = 10;
      ctx.beginPath(); ctx.moveTo(475, 280); ctx.lineTo(475, 165); ctx.arc(525, 165, 50, Math.PI, 0); ctx.lineTo(575, 280); ctx.stroke();
      fillStrokeRR(ctx, 514, 152, 22, 126, 10, "#fef9c3", "#eab308", 2); // Lacteal
      ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 3.5;
      ctx.beginPath(); ctx.moveTo(495, 275); ctx.lineTo(495, 155); ctx.arc(525, 155, 30, Math.PI, 0); ctx.lineTo(555, 275); ctx.stroke();
      ctx.fillStyle = "#bae6fd"; ctx.font = "700 11.5px Inter, sans-serif";
      ctx.fillText("Capillaries: Glucose &", 590, 175); ctx.fillText("Amino Acids → Liver", 590, 193);
      ctx.fillStyle = "#fef08a"; ctx.fillText("Lacteal: Lipids!", 590, 232);

      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#fbbf24", 2);
      ctx.fillStyle = "#fde68a"; ctx.font = "800 13px Inter, sans-serif";
      ctx.fillText("Deficiencies: Vit C = Scurvy · Vit D / Ca²⁺ = Rickets · Iron = Anaemia · Vit A = Night Blindness · Fibre = Peristalsis", 42, 350);
      ctx.fillStyle = "#f8fafc"; ctx.fillText("Starch ──Amylase──▶ Maltose ──Maltase──▶ Glucose  |  Protein ──Protease──▶ Amino Acids", 42, 384);
      boardFooterRule(ctx, "Never call Bile an enzyme — Liver makes it, Gall Bladder stores it, Lipase digests!", "#f472b6");

    } else if (slug === "bio-transport-plants") {
      boardHeader(ctx, "XYLEM, PHLOEM & BUBBLE POTOMETER (4BI1 · 2.51–2.58B)", "Dead Lignified Xylem (Up Only) vs Living Sieve-Plate Phloem (Bidirectional Sucrose)", "#34d399");
      // Xylem vs Phloem pipes
      fillStrokeRR(ctx, 32, 78, 330, 228, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 14px Inter, sans-serif"; ctx.fillText("XYLEM vs PHLOEM TUBES", 52, 104);
      fillStrokeRR(ctx, 68, 124, 58, 160, 4, "rgba(56,189,248,0.18)", "#94a3b8", 4);
      for (let i = 0; i < 4; i++) {
        const wy = 268 - ((t * 65 + i * 40) % 140);
        ctx.fillStyle = "#38bdf8"; ctx.beginPath(); ctx.arc(97, wy, 6, 0, Math.PI * 2); ctx.fill();
      }
      fillStrokeRR(ctx, 212, 124, 58, 160, 4, "rgba(52,211,153,0.18)", "#34d399", 3);
      ctx.setLineDash([4, 4]); ctx.strokeStyle = "#fde047"; ctx.beginPath(); ctx.moveTo(212, 178); ctx.lineTo(270, 178); ctx.moveTo(212, 232); ctx.lineTo(270, 232); ctx.stroke(); ctx.setLineDash([]);
      const sy = 204 + Math.sin(t * 3.5) * 52;
      ctx.fillStyle = "#fde047"; ctx.beginPath(); ctx.arc(241, sy, 7, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 11.5px Inter, sans-serif";
      ctx.fillText("Dead · Lignin · H₂O ↑", 48, 298); ctx.fillText("Living · Sucrose ↑↓", 192, 298);

      // Right: Potometer Capillary Bubble
      fillStrokeRR(ctx, 382, 78, 362, 228, 14, "#131d3b", "#fbbf24", 2);
      ctx.fillStyle = "#fbbf24"; ctx.font = "900 14px Inter, sans-serif"; ctx.fillText("BUBBLE POTOMETER (Cut Underwater!)", 402, 104);
      fillStrokeRR(ctx, 412, 178, 295, 22, 8, "rgba(56,189,248,0.35)", "#cbd5e1", 2.5);
      const bubX = 675 - ((t * 48) % 220);
      fillStrokeRR(ctx, bubX, 181, 18, 16, 7, "#fef9c3", "#0f172a", 1.5);
      ctx.fillStyle = "#cbd5e1"; ctx.font = "700 12px Inter, sans-serif";
      ctx.fillText("Faster in: ↑ Temp · ↑ Wind · ↑ Light · ↓ Humidity!", 408, 240);
      ctx.fillStyle = "#6ee7b7"; ctx.fillText("Reservoir tap resets air bubble for repeats!", 408, 268);

      fillStrokeRR(ctx, 32, 322, 712, 92, 12, "#101935", "#34d399", 2);
      ctx.fillStyle = "#f8fafc"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("Root Hair Cell: Large SA extension → Active Transport of NO₃⁻/Mg²⁺ IN → Water follows by Osmosis!", 48, 360);
      ctx.fillStyle = "#94a3b8"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Most stomata on shaded lower epidermis (cooler = less water lost); close at night when guard cells go flaccid.", 48, 390);
      boardFooterRule(ctx, "Phloem translocates SUCROSE & amino acids bidirectionally; Xylem carries water & ions UP!", "#34d399");

    } else if (slug === "bio-transport-animals") {
      boardHeader(ctx, "DOUBLE CIRCULATION, VESSELS & VACCINES (4BI1 · 2.59–2.69)", "Page-Left = Right Side! · Thick Left Ventricle · Fibrin Clot · Memory Lymphocytes", "#fb7185");
      // Beating 4-Chamber Heart schematic
      const beat = 1 + Math.sin(t * 7) * 0.04;
      ctx.save(); ctx.translate(195, 192); ctx.scale(beat, beat);
      fillStrokeRR(ctx, -145, -102, 132, 196, 22, "rgba(56,189,248,0.22)", "#38bdf8", 4); // Right side (deox)
      fillStrokeRR(ctx, 8, -102, 138, 196, 22, "rgba(244,63,94,0.25)", "#fb7185", 10);  // Left side (THICK wall!)
      ctx.fillStyle = "#bae6fd"; ctx.font = "900 13px Inter, sans-serif"; ctx.fillText("RA (Vena Cava)", -126, -58); ctx.fillText("RV → Pulm Art", -126, 42);
      ctx.fillStyle = "#fecdd3"; ctx.fillText("LA (Pulm Vein)", 24, -58); ctx.fillText("LV → AORTA!", 28, 42);
      ctx.restore();

      // Secondary Immune Response Curve on right
      fillStrokeRR(ctx, 378, 78, 366, 218, 14, "#131d3b", "#34d399", 2);
      ctx.fillStyle = "#34d399"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("PRIMARY vs SECONDARY ANTIBODY GRAPH", 398, 104);
      ctx.strokeStyle = "#64748b"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(408, 122); ctx.lineTo(408, 266); ctx.lineTo(722, 266); ctx.stroke();
      ctx.strokeStyle = "#fde047"; ctx.lineWidth = 3.8;
      ctx.beginPath(); ctx.moveTo(412, 264); ctx.quadraticCurveTo(465, 262, 490, 215); ctx.quadraticCurveTo(518, 260, 555, 258);
      ctx.quadraticCurveTo(585, 118, 622, 124); ctx.quadraticCurveTo(665, 155, 712, 185); ctx.stroke();
      ctx.fillStyle = "#f8fafc"; ctx.font = "700 11.5px Inter, sans-serif";
      ctx.fillText("1st (Vaccine)", 442, 204); ctx.fillStyle = "#6ee7b7"; ctx.fillText("2nd: FASTER & HIGHER!", 575, 118);

      fillStrokeRR(ctx, 28, 314, 716, 100, 12, "#101935", "#fb7185", 2);
      ctx.fillStyle = "#fecdd3"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("Clotting: Platelets → Soluble FIBRINOGEN converted to Insoluble FIBRIN mesh trapping RBCs!", 44, 348);
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Organ Vessels: Pulmonary (Lungs) · Hepatic + Hepatic Portal (Gut→Liver) · Renal Artery/Vein (Kidneys)", 44, 382);
      boardFooterRule(ctx, "Left Ventricle has a much thicker muscular wall to pump blood at high pressure around the whole body!", "#fb7185");

    } else if (slug === "bio-disease-immunity") {
      boardHeader(ctx, "PATHOGENS, MUCUS CILIA & MRSA RESISTANCE (1.3, 2.60 & 3.39)", "Plasmodium Vector · Mucociliary Escalator · Active vs Passive · Agar Discs", "#a855f7");
      // Left: Agar Zone of Inhibition Petri Dish
      fillStrokeRR(ctx, 28, 78, 330, 224, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("AGAR ANTIBIOTIC ZONE (Area = πr²)", 46, 104);
      ctx.fillStyle = "rgba(253, 224, 71, 0.28)"; ctx.strokeStyle = "#cbd5e1"; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(192, 198, 84, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      // Big clear zone A, zero zone B (MRSA resistant!), medium C
      ctx.fillStyle = "#0f172a"; ctx.beginPath(); ctx.arc(154, 174, 34, 0, Math.PI * 2); ctx.arc(232, 222, 18, 0, Math.PI * 2); ctx.fill();
      [[154, 174, "A"], [224, 162, "B"], [232, 222, "C"]].forEach(function(d) {
        ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.arc(d[0], d[1], 8, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#090d16"; ctx.font = "900 10px Inter, sans-serif"; ctx.fillText(d[2], d[0] - 3.5, d[1] + 3.5);
      });
      ctx.fillStyle = "#fda4af"; ctx.font = "800 11px Inter, sans-serif"; ctx.fillText("B = 0 mm (Resistant!)", 202, 140);

      // Right: 4-Step MRSA Natural Selection Ladder
      fillStrokeRR(ctx, 378, 78, 366, 224, 14, "#131d3b", "#f472b6", 2);
      ctx.fillStyle = "#f472b6"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("4-MARK ANTIBIOTIC RESISTANCE SCRIPT", 396, 104);
      [
        "1. RANDOM mutation creates resistance allele",
        "2. Antibiotic = selection pressure (kills normal)",
        "3. Resistant bacteria SURVIVE (no competition)",
        "4. REPRODUCE & pass resistance allele on!"
      ].forEach(function(s, idx) {
        fillStrokeRR(ctx, 396, 118 + idx * 42, 330, 34, 8, "#1d284d", "#a855f7", 1.5);
        ctx.fillStyle = "#f8fafc"; ctx.font = "700 12px Inter, sans-serif"; ctx.fillText(s, 410, 140 + idx * 42);
      });
      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#34d399", 2);
      ctx.fillStyle = "#6ee7b7"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("Malaria: Pathogen = Plasmodium (Protoctist) · Vector = Anopheles Mosquito  |  HIV destroys Lymphocytes!", 44, 350);
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Passive Immunity (breast milk / antivenom) = Ready-made antibodies, instant, ZERO memory cells (short-lived).", 44, 384);
      boardFooterRule(ctx, "Antibiotics kill BACTERIA only (never viruses!), and BACTERIA become resistant (never humans)!", "#fb7185");

    } else if (slug === "bio-gas-respiration") {
      boardHeader(ctx, "VENTILATION, ALVEOLI & RESPIRATION LABS (4BI1 · 2.34–2.50)", "Bell-Jar Thorax · Alveolar Diffusion · Oxygen Debt · Yeast Oil + Soda-Lime Respirometer", "#38bdf8");
      // Left: Animated Bell-Jar Diaphragm & Inflating Lungs
      fillStrokeRR(ctx, 28, 76, 250, 224, 14, "#131d3b", "#38bdf8", 2);
      const inh = (Math.sin(t * 2.4) + 1) * 0.5; // 0..1 inhale
      ctx.strokeStyle = "#cbd5e1"; ctx.lineWidth = 3;
      roundRect(ctx, 82, 112, 142, 146, 28); ctx.stroke();
      ctx.fillStyle = "#fb7185";
      ctx.beginPath(); ctx.ellipse(126, 178, 18 + inh * 14, 26 + inh * 16, 0, 0, Math.PI * 2);
      ctx.ellipse(180, 178, 18 + inh * 14, 26 + inh * 16, 0, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#fde047"; ctx.lineWidth = 5;
      ctx.beginPath(); ctx.moveTo(82, 252); ctx.quadraticCurveTo(153, 228 + inh * 34, 224, 252); ctx.stroke();
      ctx.fillStyle = "#bae6fd"; ctx.font = "800 12px Inter, sans-serif";
      ctx.fillText(inh > 0.5 ? "INHALING: Vol ↑ Press ↓" : "EXHALING: Vol ↓ Press ↑", 68, 286);

      // Right: Yeast Oil + Limewater & Woodlice Soda-Lime Respirometer
      fillStrokeRR(ctx, 296, 76, 448, 224, 14, "#131d3b", "#34d399", 2);
      ctx.fillStyle = "#34d399"; ctx.font = "900 13.5px Inter, sans-serif";
      ctx.fillText("YEAST PARAFFIN ANAEROBIC + SODA-LIME RESPIROMETER", 314, 102);
      fillStrokeRR(ctx, 326, 128, 66, 124, 14, "rgba(251,191,36,0.25)", "#cbd5e1", 2.5);
      fillStrokeRR(ctx, 329, 152, 60, 14, 4, "#facc15", null, 0); // Paraffin oil layer!
      ctx.fillStyle = "#fef08a"; ctx.font = "800 10.5px Inter, sans-serif"; ctx.fillText("Oil (No O₂!)", 398, 162);
      fillStrokeRR(ctx, 488, 148, 62, 104, 14, "rgba(241,245,249,0.75)", "#cbd5e1", 2.5);
      ctx.fillStyle = "#0f172a"; ctx.fillText("Cloudy", 500, 198); ctx.fillText("Limewater", 493, 212);
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 12px Inter, sans-serif";
      ctx.fillText("Respirometer: Soda lime absorbs CO₂ → oil drop moves in = O₂ used!", 314, 282);

      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#fbbf24", 2);
      ctx.fillStyle = "#fde68a"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("Aerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O   |   Muscle Anaerobic: Glucose → LACTIC ACID ONLY (+ O₂ Debt)", 42, 350);
      ctx.fillStyle = "#f8fafc"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Yeast Anaerobic: Glucose → Ethanol + CO₂   |   Smoking: CO (haemoglobin) · Tar (cilia/cancer) · Emphysema (↓ SA)", 42, 384);
      boardFooterRule(ctx, "Never write 'energy is created' in respiration — energy is RELEASED from glucose!", "#38bdf8");

    } else if (slug === "bio-reproduction") {
      boardHeader(ctx, "POLLINATION, WOW GERMINATION & 4-HORMONE CYCLE (3.1–3.13B)", "Insect vs Wind Flowers · Pollen Tube Fertilisation · FSH, Oestrogen, LH & Progesterone", "#f472b6");
      // 28-Day Menstrual Hormone Graph
      fillStrokeRR(ctx, 28, 76, 435, 224, 14, "#131d3b", "#f472b6", 2);
      ctx.fillStyle = "#f472b6"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("28-DAY MENSTRUAL HORMONE QUARTET (Day 14 = LH!)", 44, 102);
      ctx.strokeStyle = "#64748b"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(54, 118); ctx.lineTo(54, 264); ctx.lineTo(442, 264); ctx.stroke();
      // Oestrogen peak Day 12, LH sharp spike Day 14, Progesterone dome Day 16-25
      ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 3; // Oestrogen
      ctx.beginPath(); ctx.moveTo(56, 250); ctx.quadraticCurveTo(175, 145, 230, 235); ctx.quadraticCurveTo(330, 200, 435, 248); ctx.stroke();
      ctx.strokeStyle = "#fde047"; ctx.lineWidth = 3.5; // LH Spike Day 14!
      ctx.beginPath(); ctx.moveTo(56, 256); ctx.lineTo(215, 252); ctx.lineTo(242, 118); ctx.lineTo(268, 252); ctx.lineTo(435, 256); ctx.stroke();
      ctx.strokeStyle = "#c084fc"; ctx.lineWidth = 3.5; // Progesterone
      ctx.beginPath(); ctx.moveTo(56, 258); ctx.lineTo(242, 254); ctx.quadraticCurveTo(335, 138, 435, 252); ctx.stroke();
      ctx.fillStyle = "#fde047"; ctx.font = "800 11.5px Inter, sans-serif"; ctx.fillText("Day 14 LH → Ovulation!", 188, 114);
      ctx.fillStyle = "#38bdf8"; ctx.fillText("Oestrogen", 104, 178);
      ctx.fillStyle = "#c084fc"; ctx.fillText("Progesterone", 322, 170);

      // Right: WOW Germination & Placenta
      fillStrokeRR(ctx, 480, 76, 264, 224, 14, "#131d3b", "#34d399", 2);
      ctx.fillStyle = "#34d399"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("SEED GERMINATION = W.O.W.", 498, 102);
      ["💧 WATER: Activates enzymes", "🫁 OXYGEN: Aerobic ATP", "🌡️ WARMTH: Optimum KE", "🚫 Light NOT needed in soil!"].forEach(function(r, i) {
        fillStrokeRR(ctx, 496, 118 + i * 41, 232, 33, 8, "#1b284d", "#34d399", 1.4);
        ctx.fillStyle = "#f8fafc"; ctx.font = "700 11.8px Inter, sans-serif"; ctx.fillText(r, 508, 139 + i * 41);
      });
      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#f472b6", 2);
      ctx.fillStyle = "#fbcfe8"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("Pituitary = FSH (matures egg) & LH (ovulation)  |  Ovary = Oestrogen (repairs lining) & Progesterone (maintains)", 42, 350);
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Fertilisation in Oviduct → Implantation in Uterus → Placenta villi exchange (blood NEVER mixes!) + Amniotic cushion.", 42, 384);
      boardFooterRule(ctx, "Ovule becomes the SEED; Ovary wall swells into the FRUIT!", "#f472b6");

    } else if (slug === "bio-inheritance") {
      boardHeader(ctx, "TRANSCRIPTION, TRANSLATION & CODOMINANCE (4BI1 · 3.14–3.39)", "DNA (A-T, C-G) → mRNA (U!) → Ribosome tRNA Codons · Mitosis vs Meiosis · ABO Cross", "#38bdf8");
      // Top-left: DNA -> mRNA -> Ribosome Polypeptide
      fillStrokeRR(ctx, 28, 76, 430, 224, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("TRIPLE PROTEIN SYNTHESIS (3.16B–3.18B)", 44, 102);
      fillStrokeRR(ctx, 46, 118, 392, 42, 8, "#1e293b", "#94a3b8", 1.8);
      ctx.fillStyle = "#bae6fd"; ctx.font = "900 14px monospace"; ctx.fillText("DNA Template:   T - A - C   G - G - A   C - A - T", 58, 144);
      fillStrokeRR(ctx, 46, 174, 392, 42, 8, "#311042", "#f472b6", 2);
      ctx.fillStyle = "#fbcfe8"; ctx.fillText("mRNA Codons:    A - U - G   C - C - U   G - U - A", 58, 200);
      fillStrokeRR(ctx, 46, 232, 392, 52, 12, "rgba(52,211,153,0.2)", "#34d399", 2);
      ctx.fillStyle = "#6ee7b7"; ctx.font = "800 12.5px Inter, sans-serif";
      ctx.fillText("Ribosome + tRNA Anticodons (UAC, GGA, CAU) → Amino Acid Chain!", 58, 263);

      // Right: ABO Codominance Punnett Square (IAIO x IBIO)
      fillStrokeRR(ctx, 476, 76, 268, 224, 14, "#131d3b", "#fbbf24", 2);
      ctx.fillStyle = "#fbbf24"; ctx.font = "900 13px Inter, sans-serif"; ctx.fillText("ABO CODOMINANCE (IᴬIᴼ × IᴮIᴼ)", 492, 102);
      const cells = [["IᴬIᴮ (AB)", "IᴮIᴼ (B)"], ["IᴬIᴼ (A)", "IᴼIᴼ (O)"]];
      for (let r = 0; r < 2; r++) for (let c = 0; c < 2; c++) {
        fillStrokeRR(ctx, 512 + c * 104, 132 + r * 72, 96, 62, 10, "#1d284d", "#fbbf24", 1.8);
        ctx.fillStyle = "#fef08a"; ctx.font = "900 14px Inter, sans-serif"; ctx.fillText(cells[r][c], 524 + c * 104, 168 + r * 72);
      }

      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#34d399", 2);
      ctx.fillStyle = "#f8fafc"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("Mitosis = 1 div, 2 identical DIPLOID (46) cells  |  Meiosis = 2 divs, 4 varied HAPLOID (23) gametes", 42, 350);
      ctx.fillStyle = "#fde047"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Darwin 4 Marks: 1) Mutation/Variation → 2) Selection pressure → 3) Survive & reproduce → 4) Pass ALLELES on!", 42, 384);
      boardFooterRule(ctx, "Two unaffected parents having an affected child PROVES the allele is RECESSIVE (both are carriers)!", "#38bdf8");

    } else if (slug === "bio-ecology") {
      boardHeader(ctx, "NITROGEN CYCLE, EUTROPHICATION & GM BIOTECH (4.1–5.20B)", "10% Trophic Pyramid · 4 Nitrogen Bacteria · Cooled Fermenter · Restriction + Ligase", "#34d399");
      // Left: Biomass Pyramid + 10% Rule
      fillStrokeRR(ctx, 28, 76, 232, 224, 14, "#131d3b", "#4ade80", 2);
      ctx.fillStyle = "#4ade80"; ctx.font = "900 13px Inter, sans-serif"; ctx.fillText("BIOMASS PYRAMID (10%)", 46, 102);
      [[180, 242, "Producers (10,000 kJ)", "#16a34a"], [126, 198, "1° Consumers (1,000)", "#22c55e"], [76, 154, "2° (100)", "#84cc16"], [36, 114, "3°(10)", "#facc15"]].forEach(function(b) {
        fillStrokeRR(ctx, 144 - b[0] / 2, b[1], b[0], 36, 6, b[3], "#090d16", 2);
      });

      // Middle: Industrial Fermenter with Cooling Jacket
      fillStrokeRR(ctx, 276, 76, 224, 224, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 13px Inter, sans-serif"; ctx.fillText("COOLED FERMENTER", 304, 102);
      fillStrokeRR(ctx, 316, 122, 144, 152, 18, "rgba(56,189,248,0.25)", "#38bdf8", 4); // Cooling jacket
      fillStrokeRR(ctx, 332, 134, 112, 128, 12, "#312e81", "#cbd5e1", 2);
      ctx.strokeStyle = "#fde047"; ctx.lineWidth = 4;
      const pw = Math.cos(t * 6) * 32;
      ctx.beginPath(); ctx.moveTo(388, 122); ctx.lineTo(388, 236); ctx.moveTo(388 - pw, 195); ctx.lineTo(388 + pw, 195); ctx.stroke();
      ctx.fillStyle = "#bae6fd"; ctx.font = "700 11px Inter, sans-serif"; ctx.fillText("Cooling Jacket + Stirrer", 316, 290);

      // Right: Recombinant Plasmid Scissors + Glue
      fillStrokeRR(ctx, 516, 76, 228, 224, 14, "#131d3b", "#c084fc", 2);
      ctx.fillStyle = "#c084fc"; ctx.font = "900 13px Inter, sans-serif"; ctx.fillText("GM INSULIN PLASMID", 542, 102);
      ctx.strokeStyle = "#fde047"; ctx.lineWidth = 7;
      ctx.beginPath(); ctx.arc(630, 192, 46, 0.4, Math.PI * 1.85); ctx.stroke();
      ctx.strokeStyle = "#f472b6"; ctx.lineWidth = 8;
      ctx.beginPath(); ctx.arc(630, 192, 46, -0.45, 0.4); ctx.stroke();
      ctx.fillStyle = "#f8fafc"; ctx.font = "700 11.5px Inter, sans-serif";
      ctx.fillText("✂️ Restriction Cuts", 565, 264); ctx.fillStyle = "#6ee7b7"; ctx.fillText("🧴 DNA Ligase Glues!", 565, 284);

      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#34d399", 2);
      ctx.fillStyle = "#6ee7b7"; ctx.font = "800 13px Inter, sans-serif";
      ctx.fillText("N-Cycle: N-Fixing (N₂→NH₃) · Decomposers (Urea→NH₄⁺) · Nitrifying (NH₄⁺→NO₃⁻) · Denitrifying (NO₃⁻→N₂)", 40, 350);
      ctx.fillStyle = "#fde047"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Dolly Cloning: Diploid body nucleus → Enucleated egg → Electric shock mitosis → Surrogate uterus!", 40, 384);
      boardFooterRule(ctx, "Eutrophication fish death = Aerobic DECOMPOSER bacteria depleting dissolved O₂!", "#34d399");

    // -------------------- CHEMISTRY (13 EPISODES) --------------------
    } else if (slug === "chem-particles") {
      boardHeader(ctx, "STATES, HEATING PLATEAUS & NH₃/HCl DIFFUSION (4CH1 · 1.1–1.7C)", "Kinetic Particle Model · Melting/Boiling Plateaus · Ammonia Tube · Solubility Curves", "#38bdf8");
      // Diffusion Glass Tube top
      fillStrokeRR(ctx, 32, 78, 708, 108, 14, "#131d3b", "#c084fc", 2);
      ctx.fillStyle = "#e2e8f0"; ctx.font = "800 13px Inter, sans-serif";
      ctx.fillText("NH₃ (Mr = 17, FAST!)   vs  HCl (Mr = 36.5, SLOW)  →  NH₄Cl(s) White Ring Near HCl!", 48, 104);
      fillStrokeRR(ctx, 64, 122, 644, 42, 20, "rgba(255,255,255,0.10)", "#cbd5e1", 2.5);
      fillStrokeRR(ctx, 72, 126, 36, 34, 12, "#38bdf8", null, 0); // NH3 cotton
      fillStrokeRR(ctx, 664, 126, 36, 34, 12, "#fb7185", null, 0); // HCl cotton
      fillStrokeRR(ctx, 488, 124, 18, 38, 6, "#ffffff", "#fde047", 2); // White NH4Cl ring closer to HCl!

      // Bottom left: Flat Heating Curve; Bottom right: Solubility Curve
      fillStrokeRR(ctx, 32, 202, 342, 212, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 13px Inter, sans-serif"; ctx.fillText("PURE HEATING CURVE (Flat MP/BP!)", 48, 228);
      ctx.strokeStyle = "#fde047"; ctx.lineWidth = 3.8;
      ctx.beginPath(); ctx.moveTo(60, 388); ctx.lineTo(118, 342); ctx.lineTo(185, 342); ctx.lineTo(245, 276); ctx.lineTo(318, 276); ctx.lineTo(350, 244); ctx.stroke();
      ctx.fillStyle = "#f8fafc"; ctx.font = "700 11.5px Inter, sans-serif"; ctx.fillText("Melt (Const T)", 118, 332); ctx.fillText("Boil (Const T)", 246, 266);

      fillStrokeRR(ctx, 392, 202, 348, 212, 14, "#131d3b", "#34d399", 2);
      ctx.fillStyle = "#34d399"; ctx.font = "900 13px Inter, sans-serif"; ctx.fillText("TRIPLE SOLUBILITY (g / 100 g H₂O)", 412, 228);
      ctx.strokeStyle = "#4ade80"; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(426, 382); ctx.quadraticCurveTo(565, 362, 695, 248); ctx.stroke();
      ctx.fillStyle = "#fde047"; ctx.font = "800 12px Inter, sans-serif";
      ctx.fillText("Cool 60°C → 20°C = Crystals Crash Out!", 432, 398);
      boardFooterRule(ctx, "Particles NEVER expand! And always scale solubility if water mass ≠ 100 g!", "#38bdf8");

    } else if (slug === "chem-atoms") {
      boardHeader(ctx, "ATOMIC STRUCTURE, ISOTOPES & SHELLS (4CH1 · 1.14–1.17)", "Protons (+1) · Neutrons (0) · Electrons (-1, 1/1836) · Chlorine 35.5 Weighted Ar", "#c084fc");
      // Left: Animated 2.8.8.1 Potassium Atom
      fillStrokeRR(ctx, 32, 78, 330, 334, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("POTASSIUM (Z=19) = 2.8.8.1", 58, 104);
      const cx = 197, cy = 252;
      ctx.fillStyle = "#ef4444"; ctx.beginPath(); ctx.arc(cx, cy, 18, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#fff"; ctx.font = "900 11px Inter, sans-serif"; ctx.fillText("19p⁺", cx - 12, cy + 4);
      [42, 72, 102, 130].forEach(function(r, sIdx) {
        ctx.strokeStyle = "rgba(148,163,184,0.45)"; ctx.lineWidth = 1.8;
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
        const cnt = [2, 8, 8, 1][sIdx];
        for (let k = 0; k < cnt; k++) {
          const a = t * (1.6 - sIdx * 0.25) + (k * Math.PI * 2 / cnt);
          ctx.fillStyle = sIdx === 3 ? "#fde047" : "#38bdf8";
          ctx.beginPath(); ctx.arc(cx + Math.cos(a) * r, cy + Math.sin(a) * r, 4.8, 0, Math.PI * 2); ctx.fill();
        }
      });

      // Right: Chlorine Isotope Ar = 35.5 Math Card
      fillStrokeRR(ctx, 382, 78, 358, 334, 14, "#131d3b", "#fbbf24", 2);
      ctx.fillStyle = "#fbbf24"; ctx.font = "900 15px Inter, sans-serif"; ctx.fillText("ISOTOPES OF CHLORINE", 404, 108);
      fillStrokeRR(ctx, 404, 126, 314, 78, 10, "#1d284d", "#34d399", 1.8);
      ctx.fillStyle = "#6ee7b7"; ctx.font = "800 14px Inter, sans-serif"; ctx.fillText("75%  ³⁵₁₇Cl  (17 p⁺, 18 n⁰, 2.8.7)", 420, 156);
      ctx.fillStyle = "#f472b6"; ctx.fillText("25%  ³⁷₁₇Cl  (17 p⁺, 20 n⁰, 2.8.7)", 420, 186);
      fillStrokeRR(ctx, 404, 222, 314, 92, 10, "#0f172a", "#fbbf24", 2);
      ctx.fillStyle = "#fef08a"; ctx.font = "900 14.5px Inter, sans-serif";
      ctx.fillText("Ar = (75 × 35 + 25 × 37) ÷ 100", 420, 256);
      ctx.fillText("   = (2625 + 925) ÷ 100 = 35.5!", 420, 288);
      ctx.fillStyle = "#cbd5e1"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Same outer e⁻ (7) = Identical chemical reactions!", 404, 352);
      ctx.fillText("Group = Outer e⁻  |  Period = Occupied Shells!", 404, 382);
      boardFooterRule(ctx, "Isotopes = SAME number of protons, DIFFERENT number of neutrons!", "#c084fc");

    } else if (slug === "chem-periodic") {
      boardHeader(ctx, "GROUP 1 ALKALIS vs GROUP 7 HALOGENS (4CH1 · 1.18–1.26)", "Opposite Reactivity Trends Explained by Distance, Shielding & Nuclear Attraction", "#f472b6");
      fillStrokeRR(ctx, 28, 78, 345, 334, 14, "#131d3b", "#38bdf8", 2.2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 14.5px Inter, sans-serif"; ctx.fillText("GROUP 1: MORE REACTIVE DOWN ↓", 46, 106);
      ["Li: Fizzes steadily on water", "Na: Melts to silver sphere + fizzes", "K:  BURSTS INTO LILAC FLAME! 🔥", "2M + 2H₂O → 2MOH (alkali!) + H₂", "Why? More shells → further + shielded", "→ Easier to LOSE 1 outer electron!"].forEach(function(l, i) {
        ctx.fillStyle = i === 2 ? "#e879f9" : (i >= 4 ? "#fde047" : "#f8fafc");
        ctx.font = (i === 2 || i === 5 ? "800 " : "700 ") + "12.8px Inter, sans-serif";
        ctx.fillText(l, 46, 142 + i * 42);
      });

      fillStrokeRR(ctx, 392, 78, 352, 334, 14, "#131d3b", "#fbbf24", 2.2);
      ctx.fillStyle = "#fbbf24"; ctx.font = "900 14.5px Inter, sans-serif"; ctx.fillText("GROUP 7: LESS REACTIVE DOWN ↓", 410, 106);
      ["Cl₂: Pale green gas (Fastest thief!)", "Br₂: Red-brown liquid (Orange aq)", "I₂:  Grey solid / Purple vapour (Brown aq)", "Cl₂ + 2KBr → 2KCl + Br₂ (Orange!)", "Why? Larger radius & shielding down G7", "→ Harder to ATTRACT/GAIN 1 electron!"].forEach(function(l, i) {
        ctx.fillStyle = i === 3 ? "#fb923c" : (i >= 4 ? "#6ee7b7" : "#f8fafc");
        ctx.font = (i === 3 || i === 5 ? "800 " : "700 ") + "12.8px Inter, sans-serif";
        ctx.fillText(l, 410, 142 + i * 42);
      });
      boardFooterRule(ctx, "Metal Oxides = BASIC · Non-Metal Oxides = ACIDIC · HCl needs WATER to form H⁺(aq)!", "#f472b6");

    } else if (slug === "chem-bonding") {
      boardHeader(ctx, "IONIC, COVALENT, METALLIC & C₆₀ FULLERENE (4CH1 · 1.37–1.54)", "Charge Carriers & Melting Points Across All 4 Crystal/Molecular Structures", "#34d399");
      const boxes = [
        { x: 28,  y: 78,  col: "#38bdf8", t: "GIANT IONIC (NaCl, MgO)", l1: "Strong electrostatic lattice", l2: "Conducts MOLTEN/AQ: MOBILE IONS!" },
        { x: 392, y: 78,  col: "#f472b6", t: "SIMPLE MOLECULAR (CO₂, C₆₀!)", l1: "Strong covalent INSIDE molecule", l2: "Low MP/BP: WEAK INTERMOLECULAR!" },
        { x: 28,  y: 248, col: "#fbbf24", t: "DIAMOND vs GRAPHITE", l1: "Diamond: 4 C-C bonds, hard, 0 e⁻", l2: "Graphite: 3 C-C + 1 FREE e⁻, slides!" },
        { x: 392, y: 248, col: "#34d399", t: "GIANT METALLIC (Cu, Mg)", l1: "+ Metal ions in sea of delocalised e⁻", l2: "Conducts solid & liquid; layers slide!" }
      ];
      boxes.forEach(function(b) {
        fillStrokeRR(ctx, b.x, b.y, 352, 154, 14, "#131d3b", b.col, 2.2);
        ctx.fillStyle = b.col; ctx.font = "900 14px Inter, sans-serif"; ctx.fillText(b.t, b.x + 18, b.y + 32);
        ctx.fillStyle = "#f8fafc"; ctx.font = "700 13px Inter, sans-serif"; ctx.fillText(b.l1, b.x + 18, b.y + 76);
        ctx.fillStyle = "#fde047"; ctx.font = "800 12.8px Inter, sans-serif"; ctx.fillText(b.l2, b.x + 18, b.y + 116);
      });
      boardFooterRule(ctx, "C₆₀ Fullerene = SIMPLE MOLECULAR (weak IMF between cages); Ionic = MOBILE IONS (never e⁻)!", "#34d399");

    } else if (slug === "chem-stoichiometry") {
      boardHeader(ctx, "MOLES, EMPIRICAL FORMULA & 24 dm³ GASES (4CH1 · 1.25–1.36C)", "n = m/Mr · n = cV(dm³) · V_gas = n × 24 dm³ at r.t.p. · Hydrated Salts", "#fbbf24");
      fillStrokeRR(ctx, 28, 78, 350, 218, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 14px Inter, sans-serif"; ctx.fillText("3-LINE EMPIRICAL FORMULA TABLE", 46, 106);
      ctx.fillStyle = "#f8fafc"; ctx.font = "800 13.5px monospace";
      ctx.fillText("Element:      Fe        O", 52, 142);
      ctx.fillText("1. Mass/Ar:  1.00     1.50", 52, 178);
      ctx.fillText("2. ×2 Whole:   2   :    3", 52, 214);
      ctx.fillStyle = "#fde047"; ctx.fillText("Formula  =   Fe₂O₃ (Never round 1.5!)", 52, 258);

      fillStrokeRR(ctx, 396, 78, 348, 218, 14, "#131d3b", "#34d399", 2);
      ctx.fillStyle = "#34d399"; ctx.font = "900 14px Inter, sans-serif"; ctx.fillText("TRIPLE MOLE TRIANGLE TRIO", 416, 106);
      ["1) Solids:     n = mass (g) ÷ Mr", "2) Solutions:  n = c × V(cm³) ÷ 1000!", "3) r.t.p. Gas: V = n × 24 dm³ (24,000 cm³)", "4) % Yield = (Actual ÷ Theoretical) × 100"].forEach(function(s, i) {
        ctx.fillStyle = i === 1 ? "#fde047" : "#f8fafc";
        ctx.font = "800 13px Inter, sans-serif"; ctx.fillText(s, 416, 148 + i * 36);
      });
      fillStrokeRR(ctx, 28, 312, 716, 102, 12, "#101935", "#fbbf24", 2);
      ctx.fillStyle = "#fef08a"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("Crucible MgO: Lift lid briefly for O₂, replace to trap white MgO smoke, reheat to CONSTANT MASS!", 44, 348);
      ctx.fillStyle = "#cbd5e1"; ctx.font = "700 13px Inter, sans-serif";
      ctx.fillText("Hydrated Salt CuSO₄·5H₂O: Mass lost = H₂O (÷18); Dry residue = anhydrous salt (÷Mr) → find ratio 1 : x!", 44, 384);
      boardFooterRule(ctx, "ALWAYS convert cm³ → dm³ (÷ 1,000) before multiplying c × V in titration calculations!", "#fbbf24");

    } else if (slug === "chem-electrochemistry") {
      boardHeader(ctx, "ELECTROLYSIS: PANIC, OIL RIG & AQUEOUS RULES (1.55C–1.60C)", "Cathode (−) Reduction vs Anode (+) Oxidation · Brine NaCl(aq) · CuSO₄(aq)", "#38bdf8");
      // Electrolytic Cell visual
      fillStrokeRR(ctx, 28, 78, 340, 224, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 14px Inter, sans-serif"; ctx.fillText("BRINE NaCl(aq) CELL", 48, 104);
      fillStrokeRR(ctx, 76, 146, 240, 134, 14, "rgba(56,189,248,0.20)", "#cbd5e1", 2.5);
      fillStrokeRR(ctx, 112, 118, 22, 128, 4, "#334155", "#fb7185", 2.5); // Anode +
      fillStrokeRR(ctx, 258, 118, 22, 128, 4, "#334155", "#34d399", 2.5); // Cathode -
      ctx.fillStyle = "#fb7185"; ctx.font = "900 12px Inter, sans-serif"; ctx.fillText("+ ANODE (Cl₂)", 82, 112);
      ctx.fillStyle = "#34d399"; ctx.fillText("− CATHODE (H₂)", 224, 112);
      ctx.fillStyle = "#fde047"; ctx.fillText("NaOH(aq) stays in tub!", 126, 266);

      fillStrokeRR(ctx, 386, 78, 358, 224, 14, "#131d3b", "#c084fc", 2);
      ctx.fillStyle = "#c084fc"; ctx.font = "900 14px Inter, sans-serif"; ctx.fillText("AQUEOUS DISCHARGE DECISION TREE", 404, 104);
      [
        "CATHODE (−): H₂ gas UNLESS Cu²⁺ / Ag⁺!",
        "  → 2H⁺ + 2e⁻ → H₂   or   Cu²⁺ + 2e⁻ → Cu",
        "ANODE (+): Halogen IF Cl⁻/Br⁻/I⁻ present!",
        "  → 2Cl⁻ → Cl₂ + 2e⁻",
        "OTHERWISE (SO₄²⁻ / NO₃⁻): O₂ gas forms!",
        "  → 4OH⁻ → 2H₂O + O₂ + 4e⁻"
      ].forEach(function(r, i) {
        ctx.fillStyle = (i === 5 || i === 3) ? "#fde047" : "#f8fafc";
        ctx.font = "800 12.2px Inter, sans-serif"; ctx.fillText(r, 404, 136 + i * 27);
      });
      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#34d399", 2);
      ctx.fillStyle = "#6ee7b7"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("CuSO₄(aq) + Carbon Electrodes: Pink Cu at cathode, O₂ at anode, blue colour FADES!", 44, 350);
      ctx.fillStyle = "#f8fafc"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("CuSO₄(aq) + Copper Electrodes: Copper anode dissolves (Cu → Cu²⁺ + 2e⁻) → blue colour stays CONSTANT!", 44, 384);
      boardFooterRule(ctx, "Electrons flow in WIRES; Positive & Negative IONS move through the liquid electrolyte!", "#38bdf8");

    } else if (slug === "chem-energetics") {
      boardHeader(ctx, "CALORIMETRY, PROFILES & MEXOBENDO BONDS (4CH1 · 3.1–3.8)", "Q = mcΔT · ΔH = −Q/n · Breaking Bonds (+) vs Making Bonds (−)", "#fb7185");
      // Exothermic Profile Diagram
      fillStrokeRR(ctx, 28, 78, 350, 224, 14, "#131d3b", "#fb7185", 2);
      ctx.fillStyle = "#fb7185"; ctx.font = "900 14px Inter, sans-serif"; ctx.fillText("EXOTHERMIC PROFILE (ΔH < 0)", 48, 104);
      ctx.strokeStyle = "#64748b"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(58, 118); ctx.lineTo(58, 276); ctx.lineTo(354, 276); ctx.stroke();
      ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(64, 192); ctx.lineTo(142, 192); ctx.quadraticCurveTo(192, 112, 242, 242); ctx.lineTo(342, 242); ctx.stroke();
      ctx.fillStyle = "#fde047"; ctx.font = "800 11.5px Inter, sans-serif";
      ctx.fillText("Ea ⬆ (Reactants→Peak)", 142, 134);
      ctx.fillStyle = "#4ade80"; ctx.fillText("ΔH ⬇ (−kJ/mol)", 246, 222);

      // Right: MEXOBENDO Formula Box
      fillStrokeRR(ctx, 396, 78, 348, 224, 14, "#131d3b", "#fbbf24", 2);
      ctx.fillStyle = "#fbbf24"; ctx.font = "900 14.5px Inter, sans-serif"; ctx.fillText("M.E.X.O.B.E.N.D.O. BOND MATH", 416, 106);
      [
        "🔨 BREAKING old bonds = ENDOTHERMIC (+)",
        "💞 MAKING new bonds   = EXOTHERMIC (−)",
        "ΔH = Σ(Bonds BROKEN) − Σ(Bonds MADE)!",
        "CH₄ + 2O₂ → CO₂ + 2H₂O:",
        "Break: 4(C–H) + 2(O=O) | Make: 2(C=O) + 4(O–H)"
      ].forEach(function(r, i) {
        ctx.fillStyle = i === 2 ? "#fde047" : "#f8fafc";
        ctx.font = "800 12.5px Inter, sans-serif"; ctx.fillText(r, 412, 142 + i * 32);
      });
      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#34d399", 2);
      ctx.fillStyle = "#6ee7b7"; ctx.font = "800 14px Inter, sans-serif";
      ctx.fillText("Polystyrene Cup Practical:  Q (J) = m_solution × 4.18 × ΔT   →   ΔH = −(Q ÷ 1000) ÷ moles_limiting", 44, 352);
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Temp RISES = Exothermic = NEGATIVE −ΔH  |  Temp DROPS = Endothermic = POSITIVE +ΔH!", 44, 384);
      boardFooterRule(ctx, "Never do Products − Reactants for bond energies! Always BROKEN minus MADE!", "#fb7185");

    } else if (slug === "chem-rates") {
      boardHeader(ctx, "COLLISION THEORY, CATALYSTS & LE CHATELIER (4CH1 · 3.9–3.22C)", "Powder vs Lumps Plateau · Lowered Ea · Dynamic Equilibrium Shifts", "#34d399");
      // Rate curves (Powder vs Lumps same mass!)
      fillStrokeRR(ctx, 28, 78, 350, 224, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("GAS VOLUME: POWDER vs LUMPS (Same Mass)", 42, 104);
      ctx.strokeStyle = "#64748b"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(58, 122); ctx.lineTo(58, 276); ctx.lineTo(354, 276); ctx.stroke();
      ctx.strokeStyle = "#f472b6"; ctx.lineWidth = 3.5; // Powder fast, same plateau!
      ctx.beginPath(); ctx.moveTo(58, 276); ctx.quadraticCurveTo(92, 148, 185, 148); ctx.lineTo(348, 148); ctx.stroke();
      ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 3.5; // Lumps slower, same plateau!
      ctx.beginPath(); ctx.moveTo(58, 276); ctx.quadraticCurveTo(165, 152, 295, 148); ctx.lineTo(348, 148); ctx.stroke();
      ctx.fillStyle = "#f472b6"; ctx.font = "800 11.5px Inter, sans-serif"; ctx.fillText("Powder (Steeper!)", 78, 140);
      ctx.fillStyle = "#fde047"; ctx.fillText("SAME Final Height!", 222, 138);

      // Right: Haber Equilibrium Le Chatelier Card
      fillStrokeRR(ctx, 396, 78, 348, 224, 14, "#131d3b", "#34d399", 2);
      ctx.fillStyle = "#34d399"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("N₂(g) + 3H₂(g) ⇌ 2NH₃(g)   ΔH = −92 kJ/mol", 412, 104);
      [
        "4 moles gas (Left)  ⇌  2 moles gas (Right)",
        "⬆ Pressure → Shifts RIGHT (fewer gas moles!)",
        "⬆ Temp     → Shifts LEFT (endothermic way!)",
        "⚡ Catalyst → Faster both ways, ZERO yield shift!",
        "CuSO₄·5H₂O (Blue) ⇌ CuSO₄ (White) + 5H₂O"
      ].forEach(function(r, i) {
        ctx.fillStyle = i === 3 ? "#fde047" : "#f8fafc";
        ctx.font = "800 12.2px Inter, sans-serif"; ctx.fillText(r, 412, 142 + i * 32);
      });
      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#fbbf24", 2);
      ctx.fillStyle = "#fef08a"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("Catalyst Definition: Increases rate (unchanged in mass) via an ALTERNATIVE PATHWAY WITH LOWER Ea!", 42, 352);
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Dynamic Equilibrium: Forward rate = Reverse rate AND concentrations of reactants & products stay CONSTANT!", 42, 384);
      boardFooterRule(ctx, "Always say 'more collisions PER SECOND' (frequency) — never just 'more collisions'!", "#34d399");

    } else if (slug === "chem-acids-bases") {
      boardHeader(ctx, "ACIDS, INDICATORS & 3 SALT PLAYBOOKS (4CH1 · 2.28–2.43C)", "H⁺ Donor vs Acceptor · SNAP Solubility · Excess Base vs Titration vs Precipitation", "#f472b6");
      const methods = [
        { x: 28,  col: "#38bdf8", t: "1. EXCESS INSOLUBLE BASE", ex: "e.g. CuSO₄·5H₂O crystals", s1: "Warm H₂SO₄ + excess CuO", s2: "Filter → Evaporate half → Cool!" },
        { x: 274, col: "#f472b6", t: "2. TITRATION (Na/K/NH₄!)", ex: "e.g. NaCl or KNO₃",        s1: "Burette + Phenolphthalein", s2: "Repeat exact vol NO indicator!" },
        { x: 520, col: "#fbbf24", t: "3. PRECIPITATION",         ex: "Insoluble: BaSO₄, AgCl, PbI₂", s1: "Mix 2 SNAP solutions", s2: "Filter → WASH dist H₂O → Dry!" }
      ];
      methods.forEach(function(m) {
        fillStrokeRR(ctx, m.x, 78, 228, 224, 14, "#131d3b", m.col, 2.2);
        ctx.fillStyle = m.col; ctx.font = "900 13px Inter, sans-serif"; ctx.fillText(m.t, m.x + 14, 106);
        ctx.fillStyle = "#fde047"; ctx.font = "800 12px Inter, sans-serif"; ctx.fillText(m.ex, m.x + 14, 134);
        ctx.fillStyle = "#f8fafc"; ctx.font = "700 12px Inter, sans-serif";
        ctx.fillText(m.s1, m.x + 14, 184); ctx.fillText(m.s2, m.x + 14, 214);
      });
      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#f472b6", 2);
      ctx.fillStyle = "#fbcfe8"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("Phenolphthalein: Colourless (acid) → Pink (alkali)  |  Methyl Orange: Red (acid) → Yellow (alkali)", 44, 350);
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("SNAP Always Soluble: Sodium, Nitrate, Ammonium, Potassium!  |  Neutralisation: H⁺(aq) + OH⁻(aq) → H₂O(l)", 44, 384);
      boardFooterRule(ctx, "NEVER use Universal Indicator in a titration, and NEVER boil hydrated crystals dry to powder!", "#f472b6");

    } else if (slug === "chem-metals") {
      boardHeader(ctx, "REACTIVITY, BLAST FURNACE, CRYOLITE Al & ALLOYS (2.15–2.27C)", "Sacrificial Zinc · Fe₂O₃ + 3CO · Molten Cryolite 950 °C · Distorted Alloy Layers", "#fbbf24");
      // Left: Blast Furnace vs Cryolite Al
      fillStrokeRR(ctx, 28, 78, 360, 224, 14, "#131d3b", "#fb923c", 2.2);
      ctx.fillStyle = "#fb923c"; ctx.font = "900 14px Inter, sans-serif"; ctx.fillText("BLAST FURNACE (Fe < C) vs Al (> C)", 46, 104);
      [
        "Fe₂O₃ + 3CO → 2Fe + 3CO₂  (Coke → CO)",
        "CaCO₃ → CaO + CO₂; CaO + SiO₂ → CaSiO₃ (Slag!)",
        "Al₂O₃ dissolved in molten CRYOLITE (~950 °C)",
        "Cathode: Al³⁺ + 3e⁻ → Al | Anode burns: C+O₂→CO₂!"
      ].forEach(function(r, i) {
        ctx.fillStyle = i >= 2 ? "#38bdf8" : "#fed7aa";
        ctx.font = "800 12px Inter, sans-serif"; ctx.fillText(r, 44, 142 + i * 36);
      });

      // Right: Pure Metal Sliding Layers vs Hard Distorted Alloy
      fillStrokeRR(ctx, 404, 78, 340, 224, 14, "#131d3b", "#34d399", 2.2);
      ctx.fillStyle = "#34d399"; ctx.font = "900 14px Inter, sans-serif"; ctx.fillText("WHY STEEL ALLOY IS HARDER!", 424, 104);
      for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) {
        ctx.fillStyle = "#94a3b8"; ctx.beginPath(); ctx.arc(442 + c * 28, 146 + r * 28, 11, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = "#cbd5e1"; ctx.font = "700 11.5px Inter, sans-serif"; ctx.fillText("Pure Fe: Regular layers slide", 424, 206);
      [[602, 144, 11, "#94a3b8"], [632, 148, 11, "#94a3b8"], [656, 140, 6, "#ef4444"], [682, 150, 11, "#94a3b8"],
       [606, 174, 11, "#94a3b8"], [630, 168, 6, "#ef4444"], [658, 176, 11, "#94a3b8"], [688, 178, 11, "#94a3b8"]].forEach(function(a) {
        ctx.fillStyle = a[3]; ctx.beginPath(); ctx.arc(a[0], a[1], a[2], 0, Math.PI * 2); ctx.fill();
      });
      ctx.fillStyle = "#fde047"; ctx.fillText("Alloy: Carbon jams layers!", 585, 206);
      ctx.fillStyle = "#6ee7b7"; ctx.font = "800 12px Inter, sans-serif";
      ctx.fillText("Galvanising: Zn > Fe loses e⁻ sacrificially!", 424, 266);

      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#fbbf24", 2);
      ctx.fillStyle = "#fef08a"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("Rusting requires BOTH Oxygen AND Water! Boiled water + oil (no O₂) or CaCl₂ (no H₂O) = ZERO rust!", 44, 352);
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Aluminium overhead cables = Low density + Good conductor  |  Copper wires = Ductile + Superb conductor", 44, 384);
      boardFooterRule(ctx, "Only IRON/STEEL 'rusts' — say sacrificial Zinc OXIDISES / CORRODES preferentially!", "#fbbf24");

    } else if (slug === "chem-environment") {
      boardHeader(ctx, "21% O₂ SYRINGE, POLLUTANTS & WATER TESTS (4CH1 · 2.9–2.14 & 2.44)", "78% N₂ · 21% O₂ · 0.9% Ar · 0.04% CO₂ · IR Greenhouse · Anhydrous CuSO₄ vs 100 °C", "#38bdf8");
      // Top: Dual Gas Syringe Heated Copper Setup
      fillStrokeRR(ctx, 28, 78, 716, 124, 14, "#131d3b", "#fb923c", 2);
      ctx.fillStyle = "#fed7aa"; ctx.font = "900 13.5px Inter, sans-serif";
      ctx.fillText("2Cu (Pink) + O₂ → 2CuO (Black):  100 cm³ Air  ──Pass & COOL──▶  79 cm³ N₂/Ar Left  (21% O₂!)", 46, 106);
      fillStrokeRR(ctx, 88, 132, 165, 36, 6, "rgba(186,230,253,0.28)", "#cbd5e1", 2.5);
      fillStrokeRR(ctx, 253, 138, 255, 24, 4, "#1e293b", "#fb923c", 3);
      fillStrokeRR(ctx, 508, 132, 165, 36, 6, "rgba(186,230,253,0.28)", "#cbd5e1", 2.5);
      ctx.fillStyle = "#f97316"; ctx.font = "900 12px Inter, sans-serif"; ctx.fillText("🔥 Excess Cu → Black CuO", 304, 186);

      // Bottom 2 cards: Pollutants vs Water Tests
      fillStrokeRR(ctx, 28, 218, 352, 196, 14, "#131d3b", "#fb7185", 2);
      ctx.fillStyle = "#fb7185"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("THREE ATMOSPHERIC VILLAINS", 46, 244);
      ["CO: Incomplete combustion → binds Hb!", "SO₂: Burning sulfur impurities → Acid rain!", "NOₓ: Hot car engine sparks N₂+O₂ from AIR!", "CO₂/CH₄: Absorb outgoing INFRARED!"].forEach(function(r, i) {
        ctx.fillStyle = "#f8fafc"; ctx.font = "700 12.2px Inter, sans-serif"; ctx.fillText(r, 46, 278 + i * 30);
      });

      fillStrokeRR(ctx, 396, 218, 348, 196, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("WATER: PRESENCE vs PURITY!", 416, 244);
      ctx.fillStyle = "#f8fafc"; ctx.font = "800 12.5px Inter, sans-serif";
      ctx.fillText("1) PRESENCE Test (Chemical):", 416, 280);
      ctx.fillStyle = "#60a5fa"; ctx.fillText("   White anhydrous CuSO₄ → BLUE!", 416, 304);
      ctx.fillStyle = "#f8fafc"; ctx.fillText("2) PURITY Test (Physical):", 416, 344);
      ctx.fillStyle = "#fde047"; ctx.fillText("   Boils sharply at exact 100 °C!", 416, 368);
      boardFooterRule(ctx, "Wait for copper-syringe gas to COOL to room temp, and scale if starting air ≠ 100 cm³!", "#38bdf8");

    } else if (slug === "chem-organic") {
      boardHeader(ctx, "CRUDE OIL, CRACKING, ESTERS & POLYMERS (4CH1 · 4.1–4.47C)", "RFDKNB Fractions · 650 °C Al₂O₃ Cracking · Bromine Water · Ethyl Ethanoate · Polyesters", "#c084fc");
      // Left: Fractionating Column
      fillStrokeRR(ctx, 28, 78, 228, 336, 14, "#131d3b", "#fbbf24", 2);
      ctx.fillStyle = "#fbbf24"; ctx.font = "900 13px Inter, sans-serif"; ctx.fillText("CRUDE OIL TOWER", 48, 104);
      ["Refinery Gas (Bottled)", "Gasoline (Car Petrol)", "Kerosene (Jet Fuel)", "Diesel (Lorries)", "Fuel Oil (Ships)", "Bitumen (Roads)"].forEach(function(f, i) {
        const cols = ["#38bdf8", "#4ade80", "#facc15", "#fb923c", "#f87171", "#64748b"];
        fillStrokeRR(ctx, 44, 118 + i * 46, 196, 36, 8, "#1d284d", cols[i], 2);
        ctx.fillStyle = cols[i]; ctx.font = "800 11.8px Inter, sans-serif"; ctx.fillText((i + 1) + ". " + f, 54, 141 + i * 46);
      });

      // Right: Cracking, Bromine, Esters & Polyesters
      fillStrokeRR(ctx, 274, 78, 470, 336, 14, "#131d3b", "#c084fc", 2);
      [
        ["🔥 CATALYTIC CRACKING:", "600–700 °C + SiO₂/Al₂O₃ → Alkane + C=C Alkene!"],
        ["🧪 ALKENE C=C TEST:", "Orange bromine water → COLOURLESS (Addition, dark!)"],
        ["🍺 ETHANOL ROUTES:", "Yeast 30°C anaerobic (renewable) vs Ethene+Steam 300°C/65atm/H₃PO₄"],
        ["🍐 TRIPLE ESTERS:", "Carboxylic Acid + Alcohol ⇌ Ester (-COO-) + H₂O (conc H₂SO₄)"],
        ["♻️ CONDENSATION POLY:", "Diol + Dicarboxylic acid → Polyester + 2n H₂O (Biopolyesters rot!)"]
      ].forEach(function(item, i) {
        ctx.fillStyle = "#f472b6"; ctx.font = "900 12.8px Inter, sans-serif"; ctx.fillText(item[0], 292, 110 + i * 62);
        ctx.fillStyle = "#f8fafc"; ctx.font = "700 12.2px Inter, sans-serif"; ctx.fillText(item[1], 292, 132 + i * 62);
      });
      boardFooterRule(ctx, "Say Bromine water turns COLOURLESS (never 'clear'!), and Alcohol gives the '-yl' ester first name!", "#c084fc");

    } else if (slug === "chem-analysis") {
      boardHeader(ctx, "FLAME TESTS, CATION NaOH & ANION DETECTIVE LAB (1.10 & 2.45–2.50)", "Pencil Rf Chromatography · 5 Flame Colours · Cu²⁺/Fe²⁺/Fe³⁺ · HNO₃ + AgNO₃ Halides", "#34d399");
      // 5 Bunsen Flame Cones across top!
      fillStrokeRR(ctx, 28, 78, 716, 142, 14, "#131d3b", "#fbbf24", 2);
      ctx.fillStyle = "#fbbf24"; ctx.font = "900 13px Inter, sans-serif"; ctx.fillText("FIVE SIGNATURE FLAME COLOURS (Clean wire in conc. HCl!)", 46, 102);
      [
        ["Li⁺", "Crimson Red", "#dc2626"], ["Na⁺", "Yellow", "#facc15"], ["K⁺", "Lilac", "#c084fc"],
        ["Ca²⁺", "Orange-Red", "#f97316"], ["Cu²⁺", "Blue-Green", "#14b8a6"]
      ].forEach(function(fl, i) {
        const fx = 92 + i * 142;
        ctx.fillStyle = fl[2];
        ctx.beginPath(); ctx.moveTo(fx, 114 + Math.sin(t * 9 + i) * 4); ctx.quadraticCurveTo(fx + 24, 152, fx, 178); ctx.quadraticCurveTo(fx - 24, 152, fx, 114); ctx.fill();
        ctx.fillStyle = "#f8fafc"; ctx.font = "900 12.5px Inter, sans-serif"; ctx.fillText(fl[0] + ": " + fl[1], fx - 44, 204);
      });

      // Bottom left: NaOH Cations; Bottom right: Anion Trio
      fillStrokeRR(ctx, 28, 234, 346, 180, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("ADD NaOH(aq) CATION TESTS", 46, 260);
      ["Cu²⁺ → Blue precipitate", "Fe²⁺ → Dirty Green precipitate", "Fe³⁺ → Red-Brown precipitate", "NH₄⁺ + warm → NH₃ (damp red litmus → blue!)"].forEach(function(r, i) {
        ctx.fillStyle = "#f8fafc"; ctx.font = "700 12.2px Inter, sans-serif"; ctx.fillText(r, 46, 290 + i * 28);
      });

      fillStrokeRR(ctx, 390, 234, 354, 180, 14, "#131d3b", "#34d399", 2);
      ctx.fillStyle = "#34d399"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("ANION TESTS (Acidify First!)", 408, 260);
      ["CO₃²⁻ + acid → CO₂ clouds limewater", "SO₄²⁻ + HCl + BaCl₂ → WHITE ppt", "Cl⁻ + HNO₃ + AgNO₃ → WHITE ppt", "Br⁻ → CREAM ppt  |  I⁻ → YELLOW ppt!"].forEach(function(r, i) {
        ctx.fillStyle = i >= 2 ? "#fef08a" : "#f8fafc"; ctx.font = "700 12.2px Inter, sans-serif"; ctx.fillText(r, 408, 290 + i * 28);
      });
      boardFooterRule(ctx, "Pencil baseline for Rf; NEVER use HCl before AgNO₃ (use dilute NITRIC ACID HNO₃)!", "#34d399");

    // -------------------- PHYSICS (10 EPISODES) --------------------
    } else if (slug === "phys-motion") {
      boardHeader(ctx, "VELOCITY-TIME AREA, SUVAT & TERMINAL VELOCITY (4PH1 · 1.1–1.21)", "v-t Gradient = Acceleration · Area = Distance · Drag = Weight → Resultant 0 N", "#38bdf8");
      // v-t shaded area graph
      fillStrokeRR(ctx, 28, 78, 352, 224, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("VELOCITY-TIME GRAPH (Area = Distance!)", 44, 104);
      ctx.fillStyle = "rgba(56,189,248,0.24)";
      ctx.beginPath(); ctx.moveTo(64, 264); ctx.lineTo(148, 144); ctx.lineTo(296, 144); ctx.lineTo(348, 264); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = "#fde047"; ctx.lineWidth = 3.8;
      ctx.beginPath(); ctx.moveTo(64, 264); ctx.lineTo(148, 144); ctx.lineTo(296, 144); ctx.lineTo(348, 264); ctx.stroke();
      ctx.fillStyle = "#f8fafc"; ctx.font = "800 11.5px Inter, sans-serif";
      ctx.fillText("Flat = Constant v!", 166, 134); ctx.fillText("Area = ½bh + bh", 156, 216);

      // Skydiver Force Vectors
      fillStrokeRR(ctx, 398, 78, 346, 224, 14, "#131d3b", "#34d399", 2);
      ctx.fillStyle = "#34d399"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("TERMINAL VELOCITY (Resultant = 0 N)", 416, 104);
      ctx.fillStyle = "#f472b6"; ctx.beginPath(); ctx.arc(568, 190, 18, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 5; // Weight down
      ctx.beginPath(); ctx.moveTo(568, 208); ctx.lineTo(568, 268); ctx.stroke();
      ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 5; // Drag up = equal!
      ctx.beginPath(); ctx.moveTo(568, 172); ctx.lineTo(568, 112); ctx.stroke();
      ctx.fillStyle = "#bae6fd"; ctx.font = "800 12px Inter, sans-serif"; ctx.fillText("Drag = 700 N ↑", 584, 138);
      ctx.fillStyle = "#fca5a5"; ctx.fillText("Weight = 700 N ↓", 584, 252);

      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#fbbf24", 2);
      ctx.fillStyle = "#fef08a"; ctx.font = "800 14px Inter, sans-serif";
      ctx.fillText("Formulas:  a = (v − u) / t   |   v² = u² + 2as   |   Stopping = Thinking + Braking Distance", 44, 352);
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Tired/Phone/Alcohol → Thinking ONLY  |  Ice/Worn tyres/Mass → Braking ONLY  |  Speed → BOTH!", 44, 384);
      boardFooterRule(ctx, "Parachute opening NEVER makes a skydiver move upward — they decelerate while falling downward!", "#38bdf8");

    } else if (slug === "phys-forces") {
      boardHeader(ctx, "HOOKE'S SPRINGS, MOMENTS & CRUMPLE ZONES (4PH1 · 1.11–1.33P)", "Edexcel g = 10 N/kg · F ∝ Extension · CW = ACW Moments · F = Δp / Δt", "#fbbf24");
      // Balanced Moments Seesaw
      fillStrokeRR(ctx, 28, 78, 352, 224, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("PRINCIPLE OF MOMENTS (From Pivot!)", 44, 104);
      fillStrokeRR(ctx, 58, 192, 292, 12, 4, "#fbbf24", "#ffffff", 1.5);
      ctx.fillStyle = "#f472b6"; ctx.beginPath(); ctx.moveTo(204, 204); ctx.lineTo(186, 242); ctx.lineTo(222, 242); ctx.closePath(); ctx.fill();
      fillStrokeRR(ctx, 76, 158, 38, 34, 6, "#38bdf8", null, 0);
      fillStrokeRR(ctx, 272, 150, 44, 42, 6, "#34d399", null, 0);
      ctx.fillStyle = "#f8fafc"; ctx.font = "800 11.5px Inter, sans-serif";
      ctx.fillText("6 N × 40 cm = 240", 54, 148); ctx.fillText("8 N × 30 cm = 240", 236, 142);

      // Momentum & Crumple Zone F = dp/dt
      fillStrokeRR(ctx, 398, 78, 346, 224, 14, "#131d3b", "#fb7185", 2);
      ctx.fillStyle = "#fb7185"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("MOMENTUM & CRASH SAFETY (4PH1)", 416, 104);
      [
        "Vector p = m × v  (Left velocity = −v!)",
        "Total p BEFORE = Total p AFTER",
        "Crumple Zones / Seatbelts / Airbags:",
        "Same Δp over LONGER impact time Δt",
        "Since F = Δp / Δt → SMALLER FORCE on body!"
      ].forEach(function(r, i) {
        ctx.fillStyle = i >= 3 ? "#fde047" : "#f8fafc";
        ctx.font = "800 12.2px Inter, sans-serif"; ctx.fillText(r, 414, 140 + i * 32);
      });
      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#34d399", 2);
      ctx.fillStyle = "#6ee7b7"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("W = m × g (Earth g = 10 N/kg!)  |  Resultant F = m × a  |  Extension e = Stretched − Original Length!", 44, 352);
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Hooke's Law: F ∝ e straight line through (0,0) up to limit of proportionality (rubber bands curve!).", 44, 384);
      boardFooterRule(ctx, "Always subtract unstretched length first, and ALWAYS link crumple zones to F = Δp / Δt!", "#fbbf24");

    } else if (slug === "phys-energy") {
      boardHeader(ctx, "KE = ½mv², SANKEY EFFICIENCY & IR TRANSFER (4PH1 · 4.1–4.18)", "GPE = mgh · 2× Speed = 4× KE! · Conduction/Convection/IR · Vacuum Flask", "#34d399");
      // Sankey Diagram
      fillStrokeRR(ctx, 28, 78, 350, 224, 14, "#131d3b", "#34d399", 2);
      ctx.fillStyle = "#34d399"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("SANKEY EFFICIENCY (Width ∝ Joules)", 46, 104);
      fillStrokeRR(ctx, 56, 142, 130, 64, 4, "#38bdf8", null, 0); // 100 J in
      fillStrokeRR(ctx, 182, 142, 152, 42, 4, "#34d399", null, 0); // 75 J useful
      fillStrokeRR(ctx, 182, 184, 32, 86, 4, "#fb7185", null, 0);  // 25 J thermal dissipated
      ctx.fillStyle = "#090d16"; ctx.font = "900 12px Inter, sans-serif"; ctx.fillText("100 J In", 74, 178); ctx.fillText("75 J Useful", 208, 168);
      ctx.fillStyle = "#fda4af"; ctx.fillText("25 J Dissipated (Heat)", 224, 248);

      // Right: Matte Black vs Shiny Silver + Vacuum Flask
      fillStrokeRR(ctx, 396, 78, 348, 224, 14, "#131d3b", "#fbbf24", 2);
      ctx.fillStyle = "#fbbf24"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("THERMAL TRANSFER TRIO", 416, 104);
      [
        "Conduction: Metals win via DELOCALISED e⁻!",
        "Convection: Fluid expands → LESS DENSE → rises!",
        "Radiation: INFRARED waves (crosses vacuum!)",
        "Matte Black = BEST IR absorber & emitter",
        "Shiny Silver = WORST emitter (BEST reflector!)"
      ].forEach(function(r, i) {
        ctx.fillStyle = i === 3 ? "#fde047" : "#f8fafc";
        ctx.font = "800 12.2px Inter, sans-serif"; ctx.fillText(r, 414, 140 + i * 32);
      });
      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#38bdf8", 2);
      ctx.fillStyle = "#bae6fd"; ctx.font = "800 14px Inter, sans-serif";
      ctx.fillText("GPE = mgh   |   KE = ½mv² (Double v → 4× KE!)   |   Work W = F × d   |   Power P = E / t (Watts)", 44, 352);
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Thermos Flask: Vacuum stops conduction & convection; Silvered walls reflect IR; Plastic cap insulates!", 44, 384);
      boardFooterRule(ctx, "Fluid expands (NEVER 'particles expand'!), and energy is DISSIPATED (never 'destroyed')!", "#34d399");

    } else if (slug === "phys-thermal") {
      boardHeader(ctx, "SHC, −273 °C KELVIN & GAS PRESSURE LAWS (4PH1 · 5.1–5.22)", "ρ = m/V · P = F/A · P = hρg · ΔQ = mcΔT · P₁V₁ = P₂V₂ · P₁/T₁ = P₂/T₂ (KELVIN!)", "#fb923c");
      // Left: Absolute Zero Extrapolation
      fillStrokeRR(ctx, 28, 78, 350, 224, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("ABSOLUTE ZERO = −273 °C (0 K)", 46, 104);
      ctx.strokeStyle = "#64748b"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(185, 118); ctx.lineTo(185, 266); ctx.moveTo(52, 256); ctx.lineTo(352, 256); ctx.stroke();
      ctx.setLineDash([5, 5]); ctx.strokeStyle = "#f472b6"; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(68, 256); ctx.lineTo(185, 198); ctx.stroke(); ctx.setLineDash([]);
      ctx.strokeStyle = "#fde047"; ctx.lineWidth = 3.8;
      ctx.beginPath(); ctx.moveTo(185, 198); ctx.lineTo(338, 122); ctx.stroke();
      ctx.fillStyle = "#fbcfe8"; ctx.font = "800 11.5px Inter, sans-serif"; ctx.fillText("−273 °C (0 K)", 54, 278);
      ctx.fillStyle = "#cbd5e1"; ctx.fillText("0 °C (273 K)", 168, 278);

      // Right: Bouncing Gas Molecules in Piston
      fillStrokeRR(ctx, 396, 78, 348, 224, 14, "#131d3b", "#fbbf24", 2);
      ctx.fillStyle = "#fbbf24"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("GAS LAWS: T(K) = T(°C) + 273!", 416, 104);
      const pistW = 185 + Math.sin(t * 2.5) * 45;
      fillStrokeRR(ctx, 424, 128, pistW, 112, 10, "rgba(56,189,248,0.16)", "#38bdf8", 3);
      fillStrokeRR(ctx, 424 + pistW - 12, 126, 14, 116, 4, "#fb923c", "#fff", 1.5);
      for (let m = 0; m < 7; m++) {
        const mx = 440 + ((t * 110 + m * 37) % Math.max(30, pistW - 32));
        const my = 144 + ((t * 85 + m * 29) % 82);
        ctx.fillStyle = "#fde047"; ctx.beginPath(); ctx.arc(mx, my, 5, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 12px Inter, sans-serif";
      ctx.fillText("P₁V₁ = P₂V₂ (Const T: same speed, oftener hits)", 416, 266);
      ctx.fillText("P₁/T₁ = P₂/T₂ (Const V: faster, harder & oftener!)", 416, 288);

      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#fb923c", 2);
      ctx.fillStyle = "#fed7aa"; ctx.font = "800 14px Inter, sans-serif";
      ctx.fillText("SHC: ΔQ = m × c × ΔT   |   Density: ρ = m / V (Eureka can)   |   Liquid Pressure: P = h × ρ × g", 44, 352);
      ctx.fillStyle = "#f8fafc"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Average kinetic energy of gas molecules is DIRECTLY PROPORTIONAL to Kelvin temperature!", 44, 384);
      boardFooterRule(ctx, "ALWAYS add 273 to Celsius BEFORE using P₁ / T₁ = P₂ / T₂!", "#fb923c");

    } else if (slug === "phys-waves") {
      boardHeader(ctx, "REFRACTION, SNELL'S LAW & CRITICAL ANGLE TIR (3.1–3.22)", "v = f × λ · Measure Angles to 90° NORMAL · n = sin i / sin r · sin c = 1 / n", "#38bdf8");
      // Left: Snell's Refraction into Glass Block
      fillStrokeRR(ctx, 28, 78, 350, 224, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("AIR → GLASS (Slows, Bends TO Normal)", 44, 104);
      fillStrokeRR(ctx, 68, 168, 270, 96, 8, "rgba(56,189,248,0.22)", "#38bdf8", 2);
      ctx.setLineDash([5, 4]); ctx.strokeStyle = "#cbd5e1"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(195, 114); ctx.lineTo(195, 282); ctx.stroke(); ctx.setLineDash([]);
      ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(118, 118); ctx.lineTo(195, 168); ctx.lineTo(232, 264); ctx.stroke();
      ctx.fillStyle = "#fde047"; ctx.font = "800 12px Inter, sans-serif"; ctx.fillText("i (to Normal!)", 114, 156); ctx.fillText("r < i", 204, 232);

      // Right: Optical Fibre Total Internal Reflection (i > c)
      fillStrokeRR(ctx, 396, 78, 348, 224, 14, "#131d3b", "#34d399", 2);
      ctx.fillStyle = "#34d399"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("OPTICAL FIBRE TIR (Denser→Less, i > c!)", 412, 104);
      fillStrokeRR(ctx, 422, 152, 296, 76, 12, "rgba(52,211,153,0.18)", "#34d399", 3.5);
      ctx.strokeStyle = "#fde047"; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(426, 206); ctx.lineTo(498, 155); ctx.lineTo(586, 225); ctx.lineTo(674, 155); ctx.lineTo(714, 188); ctx.stroke();
      ctx.fillStyle = "#f8fafc"; ctx.font = "800 12px Inter, sans-serif";
      ctx.fillText("sin c = 1 / n  (Glass c ≈ 42°; Diamond c = 24.4°)", 422, 268);

      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#38bdf8", 2);
      ctx.fillStyle = "#bae6fd"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("Transverse = ⊥ vibrations (EM waves, ripples)  |  Longitudinal = ∥ vibrations (sound)  |  v = fλ,  f = 1/T", 42, 352);
      ctx.fillStyle = "#fde047"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Refraction keeps FREQUENCY f CONSTANT — wave speed v changes, so wavelength λ changes!", 42, 384);
      boardFooterRule(ctx, "If given angle to the block surface (e.g. 30°), subtract from 90° first (i = 60°)!", "#38bdf8");

    } else if (slug === "phys-sound-em") {
      boardHeader(ctx, "EM SPECTRUM, DOPPLER WAVEFRONTS & CRO SOUND (3.8–3.29P)", "Radio → Gamma (All 3×10⁸ m/s in Vacuum) · Moving Source Wavefronts · Echo ÷ 2", "#c084fc");
      // 7-Band EM Spectrum Strip
      const bands = [["Radio", "#64748b"], ["Micro", "#fb923c"], ["IR", "#ef4444"], ["Visible", "#22c55e"], ["UV", "#8b5cf6"], ["X-Ray", "#38bdf8"], ["Gamma", "#ec4899"]];
      bands.forEach(function(b, i) {
        fillStrokeRR(ctx, 28 + i * 102, 78, 96, 48, 8, b[1], "#ffffff", 1.5);
        ctx.fillStyle = "#ffffff"; ctx.font = "900 12.5px Inter, sans-serif"; ctx.fillText(b[0], 46 + i * 102, 107);
      });

      // Left: Doppler Moving Source Wavefronts
      fillStrokeRR(ctx, 28, 142, 350, 168, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 13px Inter, sans-serif"; ctx.fillText("DOPPLER WAVEFRONTS (Source → Right)", 44, 166);
      for (let k = 1; k <= 4; k++) {
        ctx.strokeStyle = "#fde047"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(236 - k * 16, 232, k * 19, 0, Math.PI * 2); ctx.stroke();
      }
      ctx.fillStyle = "#ef4444"; ctx.beginPath(); ctx.arc(236, 232, 7, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#6ee7b7"; ctx.font = "800 11px Inter, sans-serif"; ctx.fillText("Front: λ↓ f↑!", 266, 236);
      ctx.fillStyle = "#fda4af"; ctx.fillText("Behind: λ↑ f↓", 44, 236);

      // Right: CRO Oscilloscope Grid
      fillStrokeRR(ctx, 396, 142, 348, 168, 14, "#052e16", "#4ade80", 2.5);
      ctx.fillStyle = "#4ade80"; ctx.font = "900 13px Inter, sans-serif"; ctx.fillText("CRO TRACE: Height=Loudness · Width=T", 414, 166);
      ctx.strokeStyle = "#4ade80"; ctx.lineWidth = 3.5;
      ctx.beginPath();
      for (let x = 0; x <= 300; x += 4) {
        const y = 232 + Math.sin((x / 38) + t * 8) * 38;
        if (x === 0) ctx.moveTo(420 + x, y); else ctx.lineTo(420 + x, y);
      }
      ctx.stroke();

      fillStrokeRR(ctx, 28, 324, 716, 90, 12, "#101935", "#c084fc", 2);
      ctx.fillStyle = "#f5d0fe"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("Human Hearing: 20 Hz – 20,000 Hz (>20 kHz = Ultrasound)   |   Sonar Echo Depth: d = (v × t) ÷ 2!", 44, 356);
      ctx.fillStyle = "#fde047"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("CRO Frequency: Period T = (divisions for 1 wave) × (timebase in SECONDS, ÷1000 from ms!) → f = 1 / T", 44, 388);
      boardFooterRule(ctx, "ALL 7 EM waves travel at 3.0 × 10⁸ m/s in a vacuum, and Doppler never changes wave speed in air!", "#c084fc");

    } else if (slug === "phys-electricity") {
      boardHeader(ctx, "CIRCUITS, IV CURVES, MAINS SAFETY & STATIC (4PH1 · 2.1–2.28P)", "Q = It · E = QV (1 V = 1 J/C!) · V = IR · P = IV · LURD / TURD · Electrons Only!", "#fbbf24");
      // 3 IV Curves across top
      [
        { x: 28,  t: "OHMIC RESISTOR", sub: "Const T → Straight" },
        { x: 274, t: "FILAMENT LAMP",  sub: "Hotter → R ↑ (S-curve)" },
        { x: 520, t: "DIODE",          sub: "1 Direction Only!" }
      ].forEach(function(g, idx) {
        fillStrokeRR(ctx, g.x, 78, 224, 198, 14, "#131d3b", "#38bdf8", 2);
        ctx.fillStyle = "#38bdf8"; ctx.font = "900 13px Inter, sans-serif"; ctx.fillText(g.t, g.x + 16, 102);
        const ox = g.x + 112, oy = 186;
        ctx.strokeStyle = "#64748b"; ctx.lineWidth = 1.8;
        ctx.beginPath(); ctx.moveTo(ox - 80, oy); ctx.lineTo(ox + 80, oy); ctx.moveTo(ox, oy - 62); ctx.lineTo(ox, oy + 62); ctx.stroke();
        ctx.strokeStyle = "#fde047"; ctx.lineWidth = 3.6;
        ctx.beginPath();
        if (idx === 0) { ctx.moveTo(ox - 65, oy + 52); ctx.lineTo(ox + 65, oy - 52); }
        else if (idx === 1) { ctx.moveTo(ox - 70, oy + 38); ctx.bezierCurveTo(ox - 20, oy + 36, ox + 20, oy - 36, ox + 70, oy - 38); }
        else { ctx.moveTo(ox - 70, oy); ctx.lineTo(ox + 12, oy); ctx.quadraticCurveTo(ox + 28, oy - 5, ox + 46, oy - 56); }
        ctx.stroke();
        ctx.fillStyle = "#cbd5e1"; ctx.font = "700 11.5px Inter, sans-serif"; ctx.fillText(g.sub, g.x + 16, 262);
      });

      fillStrokeRR(ctx, 28, 292, 716, 122, 12, "#101935", "#fbbf24", 2);
      ctx.fillStyle = "#fef08a"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("LURD (Light ↑ → LDR R ↓)  |  TURD (Temp ↑ → Thermistor R ↓)  |  Fuse (3A/5A/13A) & Switch in LIVE Wire!", 42, 324);
      ctx.fillStyle = "#f8fafc"; ctx.font = "700 12.8px Inter, sans-serif";
      ctx.fillText("Live hits metal case → Low-R Earth surge melts Fuse!  |  Plastic case = Double Insulation (no Earth needed).", 42, 356);
      ctx.fillStyle = "#fda4af"; ctx.font = "800 13px Inter, sans-serif";
      ctx.fillText("Static Friction on Insulators: ONLY NEGATIVE ELECTRONS TRANSFER (Lose e⁻ = +; Gain e⁻ = −)!", 42, 390);
      boardFooterRule(ctx, "Adding a parallel branch DECREASES total resistance, and PROTONS NEVER MOVE in static!", "#fbbf24");

    } else if (slug === "phys-magnetism") {
      boardHeader(ctx, "FLEMING'S MOTOR, INDUCTION & TRANSFORMERS (4PH1 · 6.1–6.20P)", "Left-Hand Motor (Split Ring) vs Generator Induction (Slip Rings) · Vp/Vs = Np/Ns", "#34d399");
      // Left: Fleming's LHR + Split-Ring Motor
      fillStrokeRR(ctx, 28, 78, 350, 224, 14, "#131d3b", "#38bdf8", 2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("FLEMING'S LEFT-HAND MOTOR RULE", 46, 104);
      [
        "👍 ThuMb     = Motion / Force",
        "👆 First     = Field (North → South)",
        "🖕 seCond    = Current (+ to −)",
        "🔄 Split-Ring Commutator flips current",
        "   every 180° half-turn → continuous spin!"
      ].forEach(function(r, i) {
        ctx.fillStyle = i === 3 ? "#fde047" : "#f8fafc";
        ctx.font = "800 12.5px Inter, sans-serif"; ctx.fillText(r, 48, 140 + i * 31);
      });

      // Right: Step-Up / Step-Down Transformer Core
      fillStrokeRR(ctx, 396, 78, 348, 224, 14, "#131d3b", "#34d399", 2);
      ctx.fillStyle = "#34d399"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("AC TRANSFORMER (Laminated Soft Iron)", 414, 104);
      fillStrokeRR(ctx, 468, 128, 204, 118, 12, "rgba(148,163,184,0.22)", "#94a3b8", 12);
      fillStrokeRR(ctx, 498, 148, 144, 78, 6, "#131d3b", null, 0);
      for (let i = 0; i < 4; i++) { ctx.strokeStyle = "#f472b6"; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(454, 144 + i * 24); ctx.lineTo(482, 144 + i * 24); ctx.stroke(); }
      for (let i = 0; i < 8; i++) { ctx.strokeStyle = "#fde047"; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.moveTo(658, 134 + i * 14); ctx.lineTo(686, 134 + i * 14); ctx.stroke(); }
      ctx.fillStyle = "#fef08a"; ctx.font = "800 12px Inter, sans-serif";
      ctx.fillText("Vp / Vs = Np / Ns   &   VpIp = VsIs (100%)", 436, 280);

      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#34d399", 2);
      ctx.fillStyle = "#6ee7b7"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("National Grid: Step-up boosts V → lowers current I (P = VI) → slashes cable heating loss P = I²R!", 42, 350);
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Spinning AC Alternator 2× faster DOUBLES peak voltage AND DOUBLES frequency (halves period)!", 42, 384);
      boardFooterRule(ctx, "Transformers NEVER work on steady DC — they need AC's changing magnetic field to cut coils!", "#34d399");

    } else if (slug === "phys-nuclear") {
      boardHeader(ctx, "GOLD FOIL, α/β/γ, HALF-LIFE & FISSION/FUSION (4PH1 · 7.1–7.26)", "Empty Space + Tiny + Nucleus · Absorbers · Subtract Background · Moderator vs Boron", "#fb7185");
      // Left: Alpha / Beta / Gamma Penetration Barriers
      fillStrokeRR(ctx, 28, 78, 356, 224, 14, "#131d3b", "#fbbf24", 2);
      ctx.fillStyle = "#fbbf24"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("PENETRATION & IONISING POWER", 46, 104);
      fillStrokeRR(ctx, 168, 122, 10, 158, 2, "#f8fafc", null, 0); // Paper
      fillStrokeRR(ctx, 242, 122, 16, 158, 2, "#94a3b8", null, 0); // 5mm Al
      fillStrokeRR(ctx, 318, 122, 34, 158, 4, "#475569", null, 0); // Thick Lead
      ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(52, 150); ctx.lineTo(168, 150); ctx.stroke();
      ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(52, 198); ctx.lineTo(242, 198); ctx.stroke();
      ctx.strokeStyle = "#c084fc"; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(52, 246); ctx.lineTo(364, 246); ctx.stroke();
      ctx.fillStyle = "#fca5a5"; ctx.font = "800 11.5px Inter, sans-serif"; ctx.fillText("α (⁴₂He)", 52, 142);
      ctx.fillStyle = "#bae6fd"; ctx.fillText("β⁻ (⁰₋₁e, Z+1!)", 52, 190);
      ctx.fillStyle = "#f5d0fe"; ctx.fillText("γ (EM Wave)", 52, 238);
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 10.5px Inter, sans-serif"; ctx.fillText("Paper", 156, 294); ctx.fillText("5mm Al", 230, 294); ctx.fillText("Lead", 322, 294);

      // Right: U-235 Fission Reactor vs Star Fusion
      fillStrokeRR(ctx, 400, 78, 344, 224, 14, "#131d3b", "#fb7185", 2);
      ctx.fillStyle = "#fb7185"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("FISSION REACTOR vs STAR FUSION", 418, 104);
      [
        "Graphite MODERATOR: SLOWS neutrons",
        "Boron CONTROL RODS: ABSORB neutrons",
        "Concrete SHIELD: Absorbs γ & neutrons",
        "Irradiation = Rays pass (NOT radioactive!)",
        "Fusion: High T & P beat +/+ repulsion!"
      ].forEach(function(r, i) {
        ctx.fillStyle = i < 2 ? "#fde047" : "#f8fafc";
        ctx.font = "800 12.2px Inter, sans-serif"; ctx.fillText(r, 418, 140 + i * 32);
      });
      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#38bdf8", 2);
      ctx.fillStyle = "#bae6fd"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("Gold Foil: 99.9% straight = Mostly Empty Space · Deflected = + Charge · Bounce back = Tiny Dense Mass!", 42, 350);
      ctx.fillStyle = "#fde047"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Half-Life Trap: SUBTRACT Background Count Rate FIRST → Halve n times → Add Background back!", 42, 384);
      boardFooterRule(ctx, "In Beta-minus decay, Atomic Number Z INCREASES by +1 (neutron → proton + electron)!", "#fb7185");

    } else {
      // phys-space (Episode 37 Finale!)
      boardHeader(ctx, "ORBITS, HR DIAGRAM & BIG BANG REDSHIFT (4PH1 · 8.1–8.18P)", "v = 2πr / T · Blue=Hottest · Backwards HR Temp Axis · Δλ / λ₀ = v / c · CMBR", "#38bdf8");
      // Left: Hertzsprung-Russell Diagram (Backwards T axis!)
      fillStrokeRR(ctx, 28, 78, 352, 224, 14, "#0b1124", "#c084fc", 2.2);
      ctx.fillStyle = "#c084fc"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("HERTZSPRUNG-RUSSELL (HR) DIAGRAM", 44, 104);
      ctx.strokeStyle = "#64748b"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(62, 118); ctx.lineTo(62, 268); ctx.lineTo(356, 268); ctx.stroke();
      // Main sequence diagonal top-left to bottom-right
      ctx.strokeStyle = "#fde047"; ctx.lineWidth = 10; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(88, 134); ctx.lineTo(322, 252); ctx.stroke();
      ctx.fillStyle = "#ef4444"; ctx.beginPath(); ctx.ellipse(298, 146, 36, 20, 0, 0, Math.PI * 2); ctx.fill(); // Red Giants/Supergiants
      ctx.fillStyle = "#bae6fd"; ctx.beginPath(); ctx.ellipse(126, 242, 28, 12, 0, 0, Math.PI * 2); ctx.fill(); // White Dwarfs
      ctx.fillStyle = "#ffffff"; ctx.font = "800 10.5px Inter, sans-serif";
      ctx.fillText("Red Supergiants", 258, 150); ctx.fillStyle = "#090d16"; ctx.fillText("White Dwarfs", 96, 246);
      ctx.fillStyle = "#60a5fa"; ctx.fillText("← HOT Blue (30,000 K)", 64, 288);
      ctx.fillStyle = "#f87171"; ctx.fillText("COOL Red (3,000 K) →", 232, 288);

      // Right: Galactic Redshift Spectral Lines + Big Bang
      fillStrokeRR(ctx, 398, 78, 346, 224, 14, "#0b1124", "#38bdf8", 2.2);
      ctx.fillStyle = "#38bdf8"; ctx.font = "900 13.5px Inter, sans-serif"; ctx.fillText("COSMOLOGICAL REDSHIFT (Δλ/λ₀ = v/c)", 414, 104);
      [0, 1, 2].forEach(function(row) {
        const g = ctx.createLinearGradient(422, 0, 718, 0);
        g.addColorStop(0, "#3b82f6"); g.addColorStop(0.5, "#22c55e"); g.addColorStop(1, "#ef4444");
        fillStrokeRR(ctx, 422, 124 + row * 48, 296, 26, 4, g, null, 0);
        const shift = row * 28;
        [468, 535, 612].forEach(function(lx) {
          ctx.fillStyle = "#000000"; ctx.fillRect(lx + shift, 124 + row * 48, 4, 26);
        });
        ctx.fillStyle = "#cbd5e1"; ctx.font = "700 10.5px Inter, sans-serif";
        ctx.fillText(["Lab Reference", "Nearby Galaxy (Redshifted →)", "Distant Galaxy (MORE Redshift → Faster!)"][row], 422, 162 + row * 48);
      });

      fillStrokeRR(ctx, 28, 316, 716, 98, 12, "#101935", "#fbbf24", 2);
      ctx.fillStyle = "#fef08a"; ctx.font = "800 13.5px Inter, sans-serif";
      ctx.fillText("Comet = Squashed Elliptical Orbit (Max KE/speed closest to Sun!)   |   Main Sequence: Gravity = Fusion Pressure!", 42, 350);
      ctx.fillStyle = "#e2e8f0"; ctx.font = "700 12.5px Inter, sans-serif";
      ctx.fillText("Big Bang Twin Evidence: 1) Galactic Redshift (expansion)  +  2) CMBR (remnant heat ONLY Big Bang explains!)", 42, 384);
      boardFooterRule(ctx, "Blue-white stars are HOTTEST (~25,000 K); Red stars are COOLEST (~3,000 K)!", "#38bdf8");
    }

    ctx.restore();
  }

  /* =========================================================================
   * 7B. BESPOKE 37-EPISODE FOREGROUND BENCH PROPS (Unique Physical Props!)
   * ========================================================================= */


  /* =========================================================================
   * GUARANTEED-SOUND HUMAN AUDIO CONTROLLER
   * 1. On Vercel (http/https): Uses persistent <audio id="masterStudioAudio" playsinline>
   *    streaming /api/tts?voice=sonia|libby|ryan|ava&text=... SYNCHRONOUSLY inside user click!
   * 2. 3.2-second watchdog + onerror auto-failover: If /api/tts is offline or slow,
   *    switches immediately to GC-safe (window.__y11ActiveUtterance), Chrome-safe
   *    Clause-Prosody Browser Speech so sound NEVER goes silent!
   * ========================================================================= */
  const IS_HTTP = window.location.protocol.startsWith("http");
  const STUDIO_VOICES = [
    { id: "studio:sonia", label: "🇬🇧 Studio Neural: Sonia (Warm British Tutor)" },
    { id: "studio:libby", label: "🇬🇧 Studio Neural: Libby (Friendly UK Tutor)" },
    { id: "studio:ryan",  label: "🇬🇧 Studio Neural: Ryan (British Male Mentor)" },
    { id: "studio:ava",   label: "✨ Studio Neural: Ava (Conversational HD)" }
  ];
  const ROBOTIC_BLACKLIST = /albert|bad news|bahh|bells|boing|bubbles|cellos|deranged|fred|good news|hysterical|jester|junior|kathy|organ|princess|ralph|superstar|trinoids|whisper|wobble|zarvox|espeak|compact/i;

  let studioAudio = document.getElementById("masterStudioAudio");
  if (!studioAudio) {
    studioAudio = document.createElement("audio");
    studioAudio.id = "masterStudioAudio";
    studioAudio.preload = "auto";
    studioAudio.setAttribute("playsinline", "");
    document.body.appendChild(studioAudio);
  }

  let selectedVoiceId = IS_HTTP ? "studio:sonia" : "sys:auto";
  let studioRouteHealthy = IS_HTTP;
  let deviceVoices = [];
  let isAudioActuallyPlaying = false;
  let watchdogTimer = null;
  let speechTimer = null;
  const prefetchedUrls = new Set();

  function setVoiceBadge(txt) {
    const b = document.getElementById("voiceStatusBadge");
    if (b) b.textContent = txt;
  }

  function scoreVoice(v) {
    if (!v || !v.lang || !v.lang.toLowerCase().startsWith("en")) return -999;
    if (ROBOTIC_BLACKLIST.test(v.name)) return -500;
    let sc = 10;
    const n = v.name || "";
    if (/natural|neural|online/i.test(n)) sc += 130;
    if (/premium|enhanced/i.test(n)) sc += 95;
    if (/Sonia|Libby|Maisie|Ryan|Aria|Jenny|Ava|Serena|Zoe|Martha|Arthur/i.test(n)) sc += 75;
    if (/Google UK English Female/i.test(n)) sc += 90;
    if (/Google UK English Male|Google US English/i.test(n)) sc += 65;
    if (/Daniel|Samantha|Karen|Moira|Tessa/i.test(n)) sc += 45;
    if (v.lang.toLowerCase().startsWith("en-gb")) sc += 25;
    if (!v.localService) sc += 20;
    return sc;
  }

  function refreshDeviceVoices() {
    if (!window.speechSynthesis) return [];
    const raw = window.speechSynthesis.getVoices() || [];
    deviceVoices = raw
      .map(v => ({ v, s: scoreVoice(v) }))
      .filter(x => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 8)
      .map(x => x.v);
    return deviceVoices;
  }

  function rebuildVoiceDropdown() {
    const sel = document.getElementById("voiceSelect");
    if (!sel) return;
    refreshDeviceVoices();
    const opts = [];
    if (IS_HTTP) {
      STUDIO_VOICES.forEach(sv => {
        opts.push(`<option value="${sv.id}">${escHtml(sv.label)}</option>`);
      });
    }
    opts.push(`<option value="sys:auto">⚡ Instant Browser Voice (Best Available)</option>`);
    deviceVoices.forEach(dv => {
      opts.push(`<option value="sys:${escHtml(dv.name)}">🔊 ${escHtml(dv.name)}</option>`);
    });
    sel.innerHTML = opts.join("");
    if ([...sel.options].some(o => o.value === selectedVoiceId)) {
      sel.value = selectedVoiceId;
    } else {
      sel.selectedIndex = 0;
      selectedVoiceId = sel.value;
    }
  }

  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = rebuildVoiceDropdown;
  }

  function buildTtsUrl(voiceId, text) {
    const vKey = String(voiceId || "studio:sonia").replace(/^studio:/, "") || "sonia";
    return `/api/tts?voice=${encodeURIComponent(vKey)}&text=${encodeURIComponent(text)}`;
  }

  function prefetchAudioUrl(voiceId, text) {
    if (!IS_HTTP || !studioRouteHealthy || !String(voiceId).startsWith("studio:") || !text) return;
    const url = buildTtsUrl(voiceId, text);
    if (prefetchedUrls.has(url)) return;
    prefetchedUrls.add(url);
    fetch(url).catch(() => {});
  }

  function stopAllAudio() {
    isAudioActuallyPlaying = false;
    if (watchdogTimer) { clearTimeout(watchdogTimer); watchdogTimer = null; }
    if (speechTimer) { clearTimeout(speechTimer); speechTimer = null; }
    try {
      studioAudio.onended = null;
      studioAudio.onerror = null;
      studioAudio.onplaying = null;
      studioAudio.pause();
    } catch (e) {}
    window.__y11ActiveUtterance = null;
    try {
      if (window.speechSynthesis && (window.speechSynthesis.speaking || window.speechSynthesis.pending)) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {}
  }

  function unlockBrowserAudioOnGesture() {
    try {
      studioAudio.muted = false;
      studioAudio.volume = 1.0;
      if (window.speechSynthesis && window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
    } catch (e) {}
  }

  function splitHumanClauses(text) {
    const raw = String(text || "").match(/[^.?!;:—]+[.?!;:—]*/g) || [String(text || "")];
    const merged = [];
    for (const part of raw) {
      const c = part.trim();
      if (!c) continue;
      if (merged.length > 0 && c.split(/\s+/).length <= 3) merged[merged.length - 1] += " " + c;
      else merged.push(c);
    }
    return merged.length ? merged : [String(text || "")];
  }

  function speakViaBrowserProsody(sayText, role, rate, sessionTok, onAudioStarted, onCueFinished) {
    if (!window.speechSynthesis) {
      const est = Math.max(2400, (String(sayText).split(/\s+/).length / (2.3 * rate)) * 1000);
      onAudioStarted(est);
      speechTimer = setTimeout(() => { if (sessionTok === speechSession) onCueFinished(); }, est);
      return;
    }

    const runSpeak = () => {
      if (sessionTok !== speechSession) return;
      try { if (window.speechSynthesis.paused) window.speechSynthesis.resume(); } catch (e) {}

      refreshDeviceVoices();
      let chosen = null;
      if (selectedVoiceId.startsWith("sys:") && selectedVoiceId !== "sys:auto") {
        const target = selectedVoiceId.slice(4);
        chosen = (window.speechSynthesis.getVoices() || []).find(v => v.name === target) || null;
      }
      if (!chosen && deviceVoices.length > 0) chosen = deviceVoices[0];

      const clauses = splitHumanClauses(sayText);
      const totalEst = Math.max(2400, (String(sayText).split(/\s+/).length / (2.3 * rate)) * 1000);
      let cIdx = 0;

      const speakNextClause = () => {
        if (sessionTok !== speechSession) return;
        if (cIdx >= clauses.length) {
          isAudioActuallyPlaying = false;
          speechTimer = setTimeout(() => { if (sessionTok === speechSession) onCueFinished(); }, 280);
          return;
        }
        const cl = clauses[cIdx];
        const u = new SpeechSynthesisUtterance(cl);
        // CRITICAL: Pin reference on window so Chrome/Safari GC never collects mid-utterance!
        window.__y11ActiveUtterance = u;
        if (chosen) {
          u.voice = chosen;
          u.lang = chosen.lang || "en-GB";
        } else {
          u.lang = "en-GB";
        }
        u.volume = 1.0;

        if (/\?$/.test(cl)) { u.pitch = 1.06; u.rate = rate * 0.97; }
        else if (role === "hook") { u.pitch = 1.03; u.rate = rate * 0.99; }
        else if (role === "watchout") { u.pitch = 0.98; u.rate = rate * 0.94; }
        else { u.pitch = 1.01; u.rate = rate * 0.96; }

        const pauseMs = /\?$/.test(cl) ? 380 : /[.!]$/.test(cl) ? 300 : 170;
        let settled = false;
        const finishClause = () => {
          if (settled || sessionTok !== speechSession) return;
          settled = true;
          cIdx++;
          speechTimer = setTimeout(speakNextClause, pauseMs);
        };

        u.onstart = () => {
          if (sessionTok !== speechSession) return;
          isAudioActuallyPlaying = true;
          setVoiceBadge(`🔊 Speaking (${chosen ? chosen.name.split(" ")[0] : "Tutor"})`);
          if (cIdx === 0) onAudioStarted(totalEst);
        };
        u.onend = finishClause;
        u.onerror = finishClause;

        const clauseWatchdog = Math.max(2200, (cl.split(/\s+/).length / (1.9 * rate)) * 1000 + 2000);
        setTimeout(finishClause, clauseWatchdog);

        try {
          if (window.speechSynthesis.paused) window.speechSynthesis.resume();
          window.speechSynthesis.speak(u);
        } catch (e) {
          finishClause();
        }
      };

      speakNextClause();
    };

    // Avoid Chrome's cancel()+speak() same-tick race!
    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
      speechTimer = setTimeout(runSpeak, 65);
    } else {
      runSpeak();
    }
  }

  const CHAPTERS = DATA.chapters || [];
  let chIdx = 0;
  let lineIdx = 0;
  let isPlaying = false;
  let voiceMuted = false;
  let speechRate = 0.98;
  let speechSession = 0;
  let lineStartPerf = performance.now();
  let lineEstMs = 3600;
  const doneChapters = new Set();

  function getCue(cIdx, lIdx) {
    const ch = CHAPTERS[cIdx] || CHAPTERS[0];
    if (!ch) return { cap: "", say: "", role: "explain" };
    if (ch.cues && ch.cues[lIdx]) return ch.cues[lIdx];
    const txt = (ch.lines && ch.lines[lIdx]) || ch.title;
    return { cap: txt, say: txt, role: "explain" };
  }

  function updateUiStatus() {
    const cue = getCue(chIdx, lineIdx);
    const cap = document.getElementById("captionText");
    if (cap) cap.textContent = cue.cap || "Press Play Studio Masterclass to start.";
    const pb = document.getElementById("playBtn");
    if (pb) pb.textContent = isPlaying ? "⏸ Pause" : "▶ Play";
    const progLbl = document.getElementById("chProgressLabel");
    if (progLbl) progLbl.textContent = `${doneChapters.size} / ${CHAPTERS.length} done`;

    document.querySelectorAll(".ch-item").forEach((el, i) => {
      el.classList.toggle("active", i === chIdx);
      el.classList.toggle("done", doneChapters.has(CHAPTERS[i].id));
    });
  }

  function prefetchUpcoming() {
    const ch = CHAPTERS[chIdx];
    if (!ch) return;
    const total = (ch.cues || ch.lines || []).length;
    if (lineIdx + 1 < total) {
      prefetchAudioUrl(selectedVoiceId, getCue(chIdx, lineIdx + 1).say);
    } else if (chIdx + 1 < CHAPTERS.length) {
      prefetchAudioUrl(selectedVoiceId, getCue(chIdx + 1, 0).say);
    }
  }

  function advanceMasterclassStep() {
    const ch = CHAPTERS[chIdx];
    if (!ch) return;
    const total = (ch.cues || ch.lines || []).length;
    if (lineIdx + 1 < total) {
      lineIdx++;
      playCurrentLine();
      return;
    }
    if (!doneChapters.has(ch.id)) {
      doneChapters.add(ch.id);
      postApp("chapter-done", { chapter: ch.id });
    }
    if (chIdx + 1 < CHAPTERS.length) {
      chIdx++;
      lineIdx = 0;
      playCurrentLine();
    } else {
      isPlaying = false;
      stopAllAudio();
      setVoiceBadge("✅ Lesson Complete");
      postApp("complete", {});
      updateUiStatus();
      const cap = document.getElementById("captionText");
      if (cap) cap.textContent = "🎉 Studio Masterclass Complete! +5 ⭐ awarded — try Think Deeper or the Auto-Marked Exam Check above!";
    }
  }

  function playCurrentLine() {
    speechSession++;
    const mySession = speechSession;
    stopAllAudio();

    if (!isPlaying) {
      setVoiceBadge("⏸ Paused");
      updateUiStatus();
      return;
    }

    const cue = getCue(chIdx, lineIdx);
    const sayText = cue.say || cue.cap || DATA.title;
    updateUiStatus();

    const estFallback = Math.max(2400, (String(sayText).split(/\s+/).length / (2.3 * speechRate)) * 1000);

    if (voiceMuted) {
      setVoiceBadge("🔇 Muted");
      lineStartPerf = performance.now();
      lineEstMs = estFallback;
      speechTimer = setTimeout(() => {
        if (mySession === speechSession && isPlaying) advanceMasterclassStep();
      }, estFallback);
      return;
    }

    // Mode 1: Synchronous HTML5 <audio> streaming from Vercel /api/tts!
    if (IS_HTTP && studioRouteHealthy && selectedVoiceId.startsWith("studio:")) {
      setVoiceBadge("⏳ Connecting Studio Voice…");
      const url = buildTtsUrl(selectedVoiceId, sayText);
      let started = false;

      const fallbackToBrowser = () => {
        if (started || mySession !== speechSession || !isPlaying) return;
        started = true;
        studioRouteHealthy = false; // Avoid re-hitting failing route for rest of session
        try { studioAudio.pause(); } catch (e) {}
        setVoiceBadge("⚡ Switching to Browser Voice…");
        speakViaBrowserProsody(
          sayText,
          cue.role,
          speechRate,
          mySession,
          (dur) => { lineStartPerf = performance.now(); lineEstMs = dur; },
          () => { if (mySession === speechSession && isPlaying) advanceMasterclassStep(); }
        );
      };

      // 3.5-second watchdog so audio NEVER hangs silently!
      watchdogTimer = setTimeout(fallbackToBrowser, 3500);

      studioAudio.onplaying = () => {
        if (mySession !== speechSession) return;
        started = true;
        if (watchdogTimer) { clearTimeout(watchdogTimer); watchdogTimer = null; }
        isAudioActuallyPlaying = true;
        const dur = Number.isFinite(studioAudio.duration) && studioAudio.duration > 0.3
          ? (studioAudio.duration / speechRate) * 1000
          : estFallback;
        lineStartPerf = performance.now();
        lineEstMs = dur;
        const vName = selectedVoiceId.split(":")[1] || "sonia";
        setVoiceBadge(`🔊 Studio HD (${vName.charAt(0).toUpperCase() + vName.slice(1)})`);
        prefetchUpcoming();
      };

      studioAudio.onended = () => {
        if (mySession !== speechSession) return;
        isAudioActuallyPlaying = false;
        speechTimer = setTimeout(() => {
          if (mySession === speechSession && isPlaying) advanceMasterclassStep();
        }, 260);
      };

      studioAudio.onerror = fallbackToBrowser;

      studioAudio.src = url;
      studioAudio.playbackRate = speechRate;
      const p = studioAudio.play();
      if (p && typeof p.catch === "function") {
        p.catch(fallbackToBrowser);
      }
      return;
    }

    // Mode 2: Synchronous GC-safe Clause-Prosody Browser Speech
    speakViaBrowserProsody(
      sayText,
      cue.role,
      speechRate,
      mySession,
      (dur) => { lineStartPerf = performance.now(); lineEstMs = dur; },
      () => { if (mySession === speechSession && isPlaying) advanceMasterclassStep(); }
    );
  }

  window.testTutorSound = function() {
    unlockBrowserAudioOnGesture();
    isPlaying = false;
    speechSession++;
    const mySession = speechSession;
    stopAllAudio();
    const sample = "Hi Vani! Audio is working loud and clear for your Year 11 Masterclass.";
    const cap = document.getElementById("captionText");
    if (cap) cap.textContent = "🔔 Sound Check: “" + sample + "”";

    if (IS_HTTP && selectedVoiceId.startsWith("studio:")) {
      studioRouteHealthy = true;
      setVoiceBadge("🔔 Testing Studio Voice…");
      let ok = false;
      const fb = () => {
        if (ok || mySession !== speechSession) return;
        ok = true;
        studioRouteHealthy = false;
        speakViaBrowserProsody(sample, "hook", 1.0, mySession, () => {}, () => { setVoiceBadge("🔊 Sound Ready"); });
      };
      watchdogTimer = setTimeout(fb, 3500);
      studioAudio.onplaying = () => {
        ok = true;
        if (watchdogTimer) { clearTimeout(watchdogTimer); watchdogTimer = null; }
        isAudioActuallyPlaying = true;
        setVoiceBadge("🔊 Studio Voice Loud & Clear!");
      };
      studioAudio.onended = () => { isAudioActuallyPlaying = false; setVoiceBadge("✅ Studio Voice Ready"); };
      studioAudio.onerror = fb;
      studioAudio.src = buildTtsUrl(selectedVoiceId, sample);
      studioAudio.playbackRate = 1.0;
      const p = studioAudio.play();
      if (p && p.catch) p.catch(fb);
    } else {
      speakViaBrowserProsody(sample, "hook", 1.0, mySession, () => {}, () => { setVoiceBadge("✅ Browser Voice Ready"); });
    }
  };

  window.changeTutorVoice = function(val) {
    unlockBrowserAudioOnGesture();
    selectedVoiceId = val;
    if (val.startsWith("studio:")) studioRouteHealthy = true;
    try { localStorage.setItem("y11sci.masterclassVoiceV3", val); } catch (e) {}
    if (isPlaying) playCurrentLine();
    else prefetchUpcoming();
  };

  try {
    const savedV = localStorage.getItem("y11sci.masterclassVoiceV3");
    if (savedV) selectedVoiceId = savedV;
  } catch (e) {}

  window.startMasterclass = function() {
    unlockBrowserAudioOnGesture();
    document.getElementById("startOverlay").classList.add("hidden");
    isPlaying = true;
    playCurrentLine();
  };
  window.togglePlay = function() {
    unlockBrowserAudioOnGesture();
    document.getElementById("startOverlay").classList.add("hidden");
    isPlaying = !isPlaying;
    playCurrentLine();
  };
  window.jumpChapter = function(i) {
    unlockBrowserAudioOnGesture();
    document.getElementById("startOverlay").classList.add("hidden");
    chIdx = Math.max(0, Math.min(CHAPTERS.length - 1, i));
    lineIdx = 0;
    if (isPlaying) playCurrentLine();
    else { stopAllAudio(); updateUiStatus(); prefetchUpcoming(); }
  };
  window.prevChapter = function() { window.jumpChapter(Math.max(0, chIdx - 1)); };
  window.nextChapter = function() { window.jumpChapter(Math.min(CHAPTERS.length - 1, chIdx + 1)); };
  window.changeRate = function(v) {
    speechRate = parseFloat(v) || 0.98;
    if (isPlaying) playCurrentLine();
  };
  window.toggleMute = function() {
    voiceMuted = !voiceMuted;
    const b = document.getElementById("muteBtn");
    if (b) b.textContent = voiceMuted ? "🔇 Voice: Muted" : "🔊 Voice: On";
    if (isPlaying) playCurrentLine();
  };
  window.switchTab = function(tab, btn) {
    if (tab !== "watch" && isPlaying) {
      isPlaying = false;
      stopAllAudio();
      updateUiStatus();
    }
    document.querySelectorAll(".drawer-panel").forEach(p => p.classList.remove("active"));
    const target = document.getElementById("tab-" + tab);
    if (target) target.classList.add("active");
    document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");
    reportHeight();
  };

  // Ambient Focus Pad
  let padCtx = null, padGain = null, padOn = false;
  window.toggleFocusPad = function() {
    try {
      if (!padCtx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        padCtx = new AC();
        padGain = padCtx.createGain();
        padGain.gain.value = 0.0;
        padGain.connect(padCtx.destination);
        [261.63, 329.63, 392.00, 493.88].forEach(freq => {
          const osc = padCtx.createOscillator();
          osc.type = "sine";
          osc.frequency.value = freq;
          const g = padCtx.createGain();
          g.gain.value = 0.014;
          osc.connect(g);
          g.connect(padGain);
          osc.start();
        });
      }
      if (padCtx.state === "suspended") padCtx.resume();
      padOn = !padOn;
      padGain.gain.setTargetAtTime(padOn ? 0.5 : 0.0, padCtx.currentTime, 0.25);
      const b = document.getElementById("padBtn");
      if (b) b.textContent = padOn ? "🎵 Focus Pad: On" : "🎵 Focus Pad: Off";
    } catch (e) {}
  };

  function renderPlaylist() {
    const host = document.getElementById("chapterList");
    if (!host) return;
    host.innerHTML = CHAPTERS.map(function(c, i) {
      const nCues = (c.cues || c.lines || []).length;
      return `<button type="button" class="ch-item ${i === 0 ? 'active' : ''}" onclick="jumpChapter(${i})">
        <span class="ch-num">${i + 1}</span>
        <span class="ch-meta">
          <div class="ch-title">${escHtml(c.title)}</div>
          <div class="ch-sub">${nCues} voiced cues · +1 ⭐</div>
        </span>
      </button>`;
    }).join("");
  }

  // --- 60FPS STUDIO WHITEBOARD ---
  const canvas = document.getElementById("stageCanvas");
  const ctx = canvas.getContext("2d");

  const SUBJ_PALETTE = {
    biology:   { accent: "#059669", bright: "#34d399", softLight: "#ecfdf5", softBorder: "#6ee7b7" },
    chemistry: { accent: "#7c3aed", bright: "#a78bfa", softLight: "#f5f3ff", softBorder: "#c4b5fd" },
    physics:   { accent: "#0284c7", bright: "#38bdf8", softLight: "#f0f9ff", softBorder: "#7dd3fc" }
  };

  function wrapCanvasText(text, x, y, maxW, lineH, maxLines, font, color) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = "left";
    const words = String(text || "").split(/\s+/);
    let line = "", lines = [];
    for (const w of words) {
      const test = line ? line + " " + w : w;
      if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = w; }
      else line = test;
    }
    if (line) lines.push(line);
    if (lines.length > maxLines) {
      lines = lines.slice(0, maxLines);
      lines[maxLines - 1] = lines[maxLines - 1].replace(/[.,;:]?$/, "…");
    }
    lines.forEach((l, idx) => ctx.fillText(l, x, y + idx * lineH));
  }

  function renderStudioFrame(now) {
    const t = now * 0.001;
    const isLight = currentTheme === "light";
    const pal = SUBJ_PALETTE[DATA.subject] || SUBJ_PALETTE.biology;
    const ch = CHAPTERS[chIdx] || CHAPTERS[0];
    const totalCues = Math.max(1, (ch.cues || ch.lines || []).length);
    const lineProg = isAudioActuallyPlaying ? Math.min(1, (now - lineStartPerf) / Math.max(1200, lineEstMs)) : 0.5;
    const chProg = (lineIdx + lineProg) / totalCues;

    ctx.clearRect(0, 0, 1280, 720);

    const bg = ctx.createLinearGradient(0, 0, 1280, 720);
    if (isLight) { bg.addColorStop(0, "#f8fafc"); bg.addColorStop(1, "#eef2f8"); }
    else { bg.addColorStop(0, "#081022"); bg.addColorStop(1, "#040813"); }
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 1280, 720);

    if (isLight) {
      ctx.fillStyle = "rgba(148, 163, 184, 0.22)";
      for (let gx = 32; gx < 1260; gx += 32) {
        for (let gy = 84; gy < 700; gy += 32) ctx.fillRect(gx, gy, 1.5, 1.5);
      }
    }

    fillStrokeRR(ctx, 28, 18, 1224, 58, 14, isLight ? "#ffffff" : "rgba(15, 23, 42, 0.9)", isLight ? "#cbd5e1" : "rgba(148,163,184,0.22)", 1.5);
    ctx.textAlign = "left";
    ctx.font = "800 12px sans-serif";
    ctx.fillStyle = isLight ? pal.accent : pal.bright;
    ctx.fillText(`CHAPTER ${chIdx + 1} OF ${CHAPTERS.length}  ·  ${DATA.specCode} STUDIO MASTERCLASS`, 48, 39);
    ctx.font = "900 20px sans-serif";
    ctx.fillStyle = isLight ? "#0f172a" : "#f8fafc";
    ctx.fillText(`${DATA.icon} ${ch.title}`, 48, 63);

    // Honest Equalizer Bars — animate ONLY when audio is genuinely playing!
    for (let b = 0; b < 7; b++) {
      const bh = isAudioActuallyPlaying
        ? Math.max(5, Math.min(26, 8 + 16 * (0.5 + 0.5 * Math.sin(t * 12 + b * 1.15))))
        : 4;
      fillStrokeRR(ctx, 982 + b * 7, 47 - bh / 2, 4.5, bh, 2, isAudioActuallyPlaying ? (isLight ? pal.accent : pal.bright) : "#94a3b8", null, 0);
    }

    fillStrokeRR(ctx, 1044, 30, 188, 34, 17, isLight ? pal.softLight : "rgba(30,41,59,0.9)", isLight ? pal.softBorder : pal.bright, 1.4);
    ctx.textAlign = "center";
    ctx.font = "800 12px sans-serif";
    ctx.fillStyle = isLight ? pal.accent : pal.bright;
    ctx.fillText(`Cue ${lineIdx + 1} of ${totalCues}`, 1138, 51);

    fillStrokeRR(ctx, 28, 90, 608, 606, 18, isLight ? "#ffffff" : "rgba(13, 20, 38, 0.92)", isLight ? "#cbd5e1" : "rgba(148,163,184,0.24)", 1.6);
    const scaleX = 584 / 772, scaleY = 382 / 492;
    ctx.save();
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(40, 102, 584, 382, 14); else ctx.rect(40, 102, 584, 382);
    ctx.clip();
    ctx.fillStyle = "#090f22";
    ctx.fillRect(40, 102, 584, 382);
    ctx.translate(40 - 468 * scaleX, 102 - 44 * scaleY);
    ctx.scale(scaleX, scaleY);
    const phaseMap = ["overview", "mechanism", "graph", "application"];
    const phase = ch.phase || phaseMap[chIdx % phaseMap.length];
    try { drawCustomTopicBoard(ctx, DATA.id, phase, t); } catch (e) {}
    ctx.restore();

    fillStrokeRR(ctx, 42, 498, 580, 182, 14, isLight ? pal.softLight : "rgba(15, 23, 42, 0.92)", isLight ? pal.softBorder : pal.bright, 1.5);
    ctx.textAlign = "left";
    ctx.font = "900 12.5px sans-serif";
    ctx.fillStyle = isLight ? pal.accent : pal.bright;
    ctx.fillText("🔬 CORE PRINCIPLE & WHY IT WORKS", 60, 524);
    wrapCanvasText(ch.coreIdea || DATA.intro, 60, 550, 544, 22, 4, "700 14px sans-serif", isLight ? "#1e293b" : "#e2e8f0");
    if (ch.strategyTag) {
      fillStrokeRR(ctx, 60, 638, 544, 30, 8, isLight ? "#ffffff" : "#0b1325", isLight ? "#cbd5e1" : "rgba(148,163,184,0.28)", 1);
      wrapCanvasText("💡 Exam Strategy: " + ch.strategyTag, 72, 658, 520, 18, 1, "800 12px sans-serif", isLight ? pal.accent : "#fde047");
    }

    fillStrokeRR(ctx, 652, 90, 600, 606, 18, isLight ? "#ffffff" : "rgba(13, 20, 38, 0.92)", isLight ? "#cbd5e1" : pal.bright, 1.6);
    ctx.textAlign = "left";
    ctx.font = "900 13px sans-serif";
    ctx.fillStyle = isLight ? pal.accent : pal.bright;
    ctx.fillText("📝 STUDIO WHITEBOARD — KEY SYLLABUS POINTS", 676, 120);

    const bullets = (ch.bullets && ch.bullets.length ? ch.bullets : []).slice(0, 4);
    bullets.forEach(function(b, i) {
      const by = 138 + i * 106;
      const active = chProg >= (i / Math.max(1, bullets.length)) - 0.04;
      const cardFill = isLight ? (active ? "#f8fafc" : "#fcfdff") : (active ? "rgba(25, 38, 68, 0.96)" : "rgba(9, 15, 28, 0.72)");
      const cardStroke = active ? (isLight ? pal.accent : pal.bright) : (isLight ? "#e2e8f0" : "rgba(148,163,184,0.18)");
      fillStrokeRR(ctx, 674, by, 556, 94, 13, cardFill, cardStroke, active ? 2.0 : 1.1);

      ctx.beginPath();
      ctx.arc(702, by + 47, 15, 0, Math.PI * 2);
      ctx.fillStyle = active ? (isLight ? pal.accent : pal.bright) : (isLight ? "#e2e8f0" : "#1e293b");
      ctx.fill();
      ctx.textAlign = "center";
      ctx.font = "900 13px sans-serif";
      ctx.fillStyle = active ? (isLight ? "#ffffff" : "#041019") : (isLight ? "#64748b" : "#94a3b8");
      ctx.fillText(String(i + 1), 702, by + 52);

      wrapCanvasText(b, 728, by + 32, 484, 21, 3, "700 13.5px sans-serif", active ? (isLight ? "#0f172a" : "#f8fafc") : (isLight ? "#94a3b8" : "#64748b"));
    });

    fillStrokeRR(ctx, 674, 572, 556, 106, 13, isLight ? "#fff1f2" : "rgba(244, 63, 94, 0.12)", isLight ? "#fda4af" : "rgba(244, 63, 94, 0.45)", 1.5);
    ctx.textAlign = "left";
    ctx.font = "900 12px sans-serif";
    ctx.fillStyle = isLight ? "#be123c" : "#fda4af";
    ctx.fillText("⚠️ EDEXCEL EXAMINER WATCHOUT", 692, 596);
    wrapCanvasText(ch.watchout || DATA.defaultWatchout, 692, 620, 520, 20, 3, "700 13px sans-serif", isLight ? "#881337" : "#ffe4e6");

    requestAnimationFrame(renderStudioFrame);
  }

  function initThinkVault() {
    const g = document.getElementById("thinkGrid");
    if (g) {
      g.innerHTML = (DATA.thinkCards || []).map(function(c, idx) {
        return `<div class="think-card ${idx === 0 ? 'open' : ''}" onclick="this.classList.toggle('open')">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
            <span class="badge-tag">Think Deeper #${idx + 1} · ${escHtml(c.heading)}</span>
            <span style="font-size:0.76rem;font-weight:800;color:var(--accent);">Expand ▾</span>
          </div>
          <div class="think-q">${escHtml(c.q)}</div>
          <div class="think-ans">
            <ul style="padding-left:18px;margin-bottom:8px;">
              ${(c.points || []).map(p => `<li style="margin-bottom:4px;color:var(--text-main);font-weight:600;">${escHtml(p)}</li>`).join("")}
            </ul>
            <p>${escHtml(c.explanation)}</p>
            ${c.svg ? `<div class="think-svg-wrap">${c.svg}<div style="color:#94a3b8;font-size:0.74rem;text-align:center;margin-top:6px;">${escHtml(c.svgCaption || "")}</div></div>` : ""}
          </div>
        </div>`;
      }).join("");
    }

    const mg = document.getElementById("mythGrid");
    if (mg) {
      const myths = (DATA.pitfalls || []).map(function(m, idx) {
        return `<div class="think-card open" style="cursor:default;">
          <span class="badge-tag" style="color:#e11d48;border-color:rgba(225,29,72,0.35);background:rgba(225,29,72,0.08);">Examiner Trap #${idx + 1} · ${escHtml(m.spec)}</span>
          <div class="think-q" style="color:#e11d48;">❌ Candidate wrote: &ldquo;${escHtml(m.wrong)}&rdquo;</div>
          <div class="think-ans" style="display:block;color:var(--text-main);font-weight:700;">✅ Full-Mark Wording: ${escHtml(m.right)}</div>
        </div>`;
      });
      const hooks = (DATA.mnemonics || []).map(function(h) {
        return `<div class="think-card open" style="cursor:default;">
          <span class="badge-tag">💡 Memory Hook · ${escHtml(h.label)}</span>
          <div class="think-q">${escHtml(h.hook)}</div>
          <div class="think-ans" style="display:block;">${escHtml(h.detail)}</div>
        </div>`;
      });
      mg.innerHTML = hooks.concat(myths).join("");
    }
  }

  let examMode = "mcq", qIdx = 0, mcqScore = 0, answered = false;
  window.setExamSubmode = function(m) {
    examMode = m; qIdx = 0; answered = false;
    document.getElementById("btnModeMcq").classList.toggle("primary", m === "mcq");
    document.getElementById("btnModeQa").classList.toggle("primary", m === "qa");
    renderQuiz();
    reportHeight();
  };

  function renderQuiz() {
    const box = document.getElementById("quizContainer");
    if (!box) return;
    if (examMode === "mcq") {
      const list = DATA.mcqs || [];
      document.getElementById("quizScoreLabel").textContent = `MCQ Score: ${mcqScore} / ${list.length}`;
      if (qIdx >= list.length) {
        box.innerHTML = `<div style="text-align:center;padding:24px 0;">
          <h3 style="font-size:1.5rem;font-weight:900;margin-bottom:8px;">MCQ Check Complete: ${mcqScore} / ${list.length}</h3>
          <p style="color:var(--text-muted);margin-bottom:16px;">Now test your written mark-scheme precision in Written Auto-Mark!</p>
          <button class="ctrl-btn primary" onclick="mcqScore=0;qIdx=0;answered=false;renderQuiz()">↻ Retry MCQs</button>
          <button class="ctrl-btn" style="margin-left:8px;" onclick="setExamSubmode('qa')">Try Written QAs →</button>
        </div>`;
        return;
      }
      const item = list[qIdx];
      box.innerHTML = `
        <div style="color:var(--accent);font-size:0.76rem;font-weight:900;text-transform:uppercase;">Multiple Choice ${qIdx + 1} of ${list.length}</div>
        <div style="font-size:1.05rem;font-weight:800;margin:8px 0 14px;line-height:1.45;">${escHtml(item.question)}</div>
        <div>
          ${item.options.map((opt, idx) => `<button class="opt-btn" id="opt-${idx}" onclick="pickMcq(${idx})">${String.fromCharCode(65 + idx)}. ${escHtml(opt)}</button>`).join("")}
        </div>
        <div id="qExplain" style="display:none;margin-top:12px;padding:12px;border-radius:12px;background:var(--bg-soft);border:1px solid var(--border-subtle);font-size:0.88rem;line-height:1.5;"></div>
        <div style="margin-top:14px;display:flex;justify-content:flex-end;">
          <button id="nextQBtn" class="ctrl-btn primary" style="display:none;" onclick="nextExamItem()">Next Question →</button>
        </div>
      `;
    } else {
      const list = DATA.qas || [];
      const item = list[qIdx % list.length];
      document.getElementById("quizScoreLabel").textContent = `Written QA ${(qIdx % list.length) + 1} of ${list.length} (${item.marks} marks)`;
      box.innerHTML = `
        <div style="color:var(--accent);font-size:0.76rem;font-weight:900;text-transform:uppercase;">Structured Exam Question ${(qIdx % list.length) + 1} of ${list.length} · [${item.marks} Marks]</div>
        <div style="font-size:1.04rem;font-weight:800;margin:8px 0 8px;line-height:1.45;">${escHtml(item.question)}</div>
        ${item.hint ? `<div style="font-size:0.82rem;color:var(--text-muted);margin-bottom:8px;">💡 Hint: ${escHtml(item.hint)}</div>` : ""}
        <textarea id="qaInput" class="qa-textarea" placeholder="Type your full Edexcel exam answer here, then click Mark My Answer..."></textarea>
        <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">
          <button class="ctrl-btn primary" onclick="gradeWrittenQa()">✓ Mark My Answer</button>
          <button class="ctrl-btn" onclick="qIdx=(qIdx+1)%${list.length};renderQuiz()">Next Written Q →</button>
        </div>
        <div id="qaFeedback" style="display:none;margin-top:14px;padding:14px;border-radius:12px;background:var(--bg-soft);border:1px solid var(--border-subtle);font-size:0.87rem;line-height:1.55;"></div>
      `;
    }
  }

  window.pickMcq = function(idx) {
    if (answered) return;
    answered = true;
    const item = DATA.mcqs[qIdx];
    const corr = document.getElementById("opt-" + item.answerIndex);
    if (corr) corr.classList.add("correct");
    if (idx === item.answerIndex) mcqScore++;
    else { const wr = document.getElementById("opt-" + idx); if (wr) wr.classList.add("wrong"); }
    document.getElementById("quizScoreLabel").textContent = `MCQ Score: ${mcqScore} / ${DATA.mcqs.length}`;
    const ex = document.getElementById("qExplain");
    ex.style.display = "block";
    ex.innerHTML = `<strong>${idx === item.answerIndex ? "✅ Correct!" : "💡 Key Correction:"}</strong> ${escHtml(item.explanation)}`;
    document.getElementById("nextQBtn").style.display = "inline-flex";
    reportHeight();
  };
  window.nextExamItem = function() { answered = false; qIdx++; renderQuiz(); reportHeight(); };

  window.gradeWrittenQa = function() {
    const list = DATA.qas || [];
    const item = list[qIdx % list.length];
    const ans = (document.getElementById("qaInput").value || "").toLowerCase();
    let earned = 0;
    const breakdown = item.markScheme.map(function(mp) {
      const hit = mp.keywords.some(kw => ans.includes(kw.toLowerCase()));
      if (hit) earned++;
      return `<li style="color:${hit ? '#059669' : '#e11d48'};font-weight:700;margin-bottom:4px;">${hit ? '✓' : '✗'} ${escHtml(mp.point)}</li>`;
    }).join("");
    const fb = document.getElementById("qaFeedback");
    fb.style.display = "block";
    fb.innerHTML = `
      <div style="font-weight:900;font-size:1rem;color:var(--accent);margin-bottom:8px;">Auto-Mark Estimate: ${earned} / ${item.marks} marking points matched</div>
      <ul style="padding-left:18px;margin-bottom:10px;">${breakdown}</ul>
      <div style="margin-top:8px;"><strong>Model Answer:</strong> ${escHtml(item.modelAnswer)}</div>
      ${item.commonError ? `<div style="margin-top:6px;color:#e11d48;font-weight:700;">⚠️ Common Exam Error: ${escHtml(item.commonError)}</div>` : ""}
    `;
    reportHeight();
  };

  let lastReportedH = 0;
  function reportHeight() {
    if (!EMBED) return;
    const h = Math.max(680, Math.ceil(document.documentElement.scrollHeight));
    if (Math.abs(h - lastReportedH) > 6) {
      lastReportedH = h;
      postApp("height", { value: h });
    }
  }
  if (EMBED && window.ResizeObserver) new ResizeObserver(reportHeight).observe(document.body);

  setMasterclassTheme(currentTheme);
  rebuildVoiceDropdown();
  renderPlaylist();
  updateUiStatus();
  initThinkVault();
  renderQuiz();
  // Pre-warm Cue 0 in Vercel Blob/CDN cache immediately on load!
  if (IS_HTTP && CHAPTERS[0]) {
    prefetchAudioUrl(selectedVoiceId, getCue(0, 0).say);
  }
  postApp("hello", { chapters: CHAPTERS.map(c => c.id) });
  setTimeout(reportHeight, 120);
  requestAnimationFrame(renderStudioFrame);
})();
