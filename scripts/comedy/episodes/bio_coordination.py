# BODY CORPORATE — S1E1 "The 37 Degree Agenda"
# Edexcel IGCSE Biology 4BI1: Coordination & response, homeostasis, osmoregulation (2.80–2.95B, 2.70–2.79B)
#
# Line format: (WHO, text, {opts})
#   opts: step=int (diagram step), emote=str, act=str (host action), sfx=str,
#         pre=float (pause before, s), post=float (pause after, s)
# Beat (silent visual moment): ("BEAT", seconds, {opts})

EPISODE = {
    "slug": "bio-coordination",
    "show": "BODY CORPORATE",
    "tagline": "A workplace comedy filmed entirely inside one 15-year-old",
    "number": "Episode 1",
    "title": "The 37 Degree Agenda",
    "dedication": "Made for Vani · Y11 Edexcel Biology",
    "scenes": [
        # ───────────────────────── COLD OPEN ─────────────────────────
        {"id": "cold", "shot": "host", "bg": "kitchen", "clock": "07:02", "lines": [
            ("NARR", "Seven oh two a.m. Meera. Fifteen. Year Eleven. She reaches for a mug of Milo that her mother has microwaved to roughly the temperature of the sun.", {"act": "idle"}),
            ("HOST", "Okay. Milo. Let's go.", {"act": "reach", "live": "meera"}),
            ("BEAT", 0.5, {"act": "touch", "sfx": "sizzle"}),
            ("HOST", "OW! Ow ow ow ow!", {"act": "yank", "sfx": "boing"}),
            ("MUM", "Blow on it first! How many times I have to tell you?", {"act": "yank", "live": "mum"}),
        ]},
        {"id": "hq", "shot": "wide", "bg": "hq_split", "cast": ["CORTEX", "RELAY"], "lines": [
            ("CORTEX", "Excuse me. Who moved the arm? I did not approve moving the arm.", {"emote": "shock", "sfx": "scratch"}),
            ("RELAY", "We did, boss. Spinal cord team.", {"emote": "chill"}),
            ("CORTEX", "On whose authority?", {"emote": "angry"}),
            ("RELAY", "Reflex arc lah. Heat receptors in the finger detect the stimulus, fire an electrical impulse up the sensory neurone. Reaches me. I'm the relay neurone. I pass it straight to the motor neurone. Motor neurone tells the arm muscle to contract. Hand moves. Finish.", {"emote": "chill"}),
            ("CORTEX", "And when exactly was I informed?", {"emote": "angry"}),
            ("RELAY", "After. You're the conscious brain, boss. You take forever to decide anything. If we waited for you, that finger would be medium rare.", {"emote": "smug"}),
            ("CORTEX", "I am the C.E.O. of this body.", {"emote": "angry"}),
            ("RELAY", "Ya. And the C.E.O. gets C.C.'d. Not consulted.", {"emote": "smug", "post": 0.4}),
        ]},
        {"id": "arc", "shot": "diagram", "bg": "meeting", "cast": ["CORTEX", "RELAY"], "diagram": "reflex", "lines": [
            ("NARR", "This, for the record, is a reflex arc.", {"step": 0}),
            ("NARR", "Stimulus. Receptor. Sensory neurone. Relay neurone, inside the spinal cord. Motor neurone. Effector, which here is a muscle. Response.", {"step": 1}),
            ("NARR", "It is fast, automatic, and involuntary. The conscious brain finds out afterwards, as a courtesy. Which is why your hand has already moved before you even feel the pain.", {"step": 2}),
            ("CORTEX", "A courtesy.", {"emote": "angry", "post": 0.5}),
        ]},
        {"id": "title", "shot": "title", "bg": "title", "lines": [
            ("BEAT", 0.6, {"sfx": "theme"}),
            ("NARR", "Body Corporate. Episode one. The thirty seven degree agenda.", {"post": 1.4}),
        ]},

        # ───────────────────────── SYNAPSE ─────────────────────────
        {"id": "syn_conf", "shot": "confessional", "bg": "basement", "cast": ["RELAY"],
         "lower": ["RELAY NEURONE", "Spinal cord, basement level. Does all the work. Gets none of the credit."], "lines": [
            ("RELAY", "Okay, one thing that really annoys me. People always say the electrical impulse jumps from one neurone to the next. Like, whoosh. Superhero.", {"emote": "annoyed"}),
            ("RELAY", "No lah. There's a tiny gap between neurones. It's called a synapse. Electricity cannot cross it.", {"emote": "chill"}),
        ]},
        {"id": "syn", "shot": "diagram", "bg": "basement", "cast": ["RELAY"], "diagram": "synapse", "lines": [
            ("NARR", "When an impulse reaches the end of a neurone, tiny sacs called vesicles release a chemical, a neurotransmitter, into the gap.", {"step": 0}),
            ("NARR", "The neurotransmitter diffuses across the gap, binds to receptors on the next neurone, and sets off a brand new electrical impulse.", {"step": 1}),
            ("RELAY", "And only the first side has the chemical. So the signal can only go one way. A synapse is a one way street. Like the school drop off lane. Do not try to reverse.", {"step": 2, "emote": "smug"}),
        ]},
        {"id": "trap1", "shot": "card", "bg": "card", "card": {"bad": "The impulse JUMPS across the synapse", "good": "A neurotransmitter DIFFUSES across the synapse"}, "lines": [
            ("NARR", "Write 'the impulse jumps across' and you lose the mark. Write 'the chemical diffuses across' and you keep it. Simple economics.", {"step": 1, "sfx": "ding", "post": 0.4}),
        ]},

        # ───────────────────────── NERVES vs HORMONES ─────────────────────────
        {"id": "allhands", "shot": "diagram", "bg": "meeting", "cast": ["HYPO", "CORTEX", "ADREN"], "diagram": "comms", "lines": [
            ("NARR", "Nine a.m. The weekly all hands meeting, chaired by the hypothalamus. Small. Lives at the base of the brain. Has never once taken a day off.", {"step": 0}),
            ("HYPO", "Right. Since certain departments", {"step": 0, "emote": "annoyed"}),
            ("CORTEX", "Was that at me?", {"step": 0, "emote": "shock"}),
            ("HYPO", "don't read their memos, a quick refresher on how messages travel in this body. There are exactly two ways.", {"step": 0}),
            ("HYPO", "One. The nervous system. Electrical impulses, along neurones. Very fast, very short lived, and sent to one precise place. Basically a direct message.", {"step": 1}),
            ("HYPO", "Two. The endocrine system. Glands release chemicals called hormones into the blood, and the blood carries them everywhere.", {"step": 2}),
            ("ADREN", "I'M A HORMONE!", {"step": 2, "emote": "panic", "sfx": "boing"}),
            ("HYPO", "Yes, Adrenaline. We know. Sit down.", {"step": 2, "emote": "annoyed"}),
            ("HYPO", "Hormones are like an announcement over the school speakers. Everybody hears it. But when it says, would the netball team please come to the hall, only the netball team gets up.", {"step": 3}),
            ("HYPO", "Same here. A hormone reaches every cell, but only target organs with the right receptors respond. It's slower, but the effect lasts much longer.", {"step": 4}),
            ("CORTEX", "So nerves are D.M.s, and hormones are announcements nobody listens to.", {"step": 4, "emote": "smug"}),
            ("HYPO", "Hormones are announcements the right cells cannot ignore. Unlike my memos.", {"step": 4, "emote": "annoyed"}),
            ("NARR", "Either way, every response follows the same chain. Stimulus. Receptor. Coordinator. Effector. Response. Learn it. It's basically the body's org chart.", {"step": 5, "post": 0.4}),
        ]},

        # ───────────────────────── THE EYE ─────────────────────────
        {"id": "cinema", "shot": "host", "bg": "mall", "clock": "12:00", "lines": [
            ("NARR", "Twelve noon. Meera walks out of a dark cinema into the Singapore sun, which appears to be personally offended by her existence.", {"act": "walk"}),
            ("HOST", "Argh! My eyes!", {"act": "squint", "sfx": "whoosh"}),
        ]},
        {"id": "pupil", "shot": "diagram", "bg": "eyeroom", "cast": ["CIRC", "RADIAL"], "diagram": "pupil", "lines": [
            ("CIRC", "Bright light! My turn. Circular muscles of the iris, contract!", {"step": 1, "emote": "proud"}),
            ("RADIAL", "And the radial muscles relax. Because apparently that's my entire personality.", {"step": 1, "emote": "annoyed"}),
            ("NARR", "The pupil constricts. It gets smaller, so less light gets in, and the retina is protected. It's a reflex. Nobody asked the C.E.O.", {"step": 1}),
            ("NARR", "Back into the dark cinema, and they swap.", {"step": 2}),
            ("RADIAL", "Radial muscles contract. Finally. Some respect.", {"step": 2, "emote": "proud"}),
            ("CIRC", "Circular muscles relax. Pupil dilates. More light gets in. Happy now?", {"step": 2, "emote": "annoyed"}),
            ("RADIAL", "No.", {"step": 2, "emote": "annoyed", "post": 0.3}),
        ]},
        {"id": "trap2", "shot": "card", "bg": "card", "card": {"bad": "The pupil contracts", "good": "The CIRCULAR muscles of the iris contract"}, "lines": [
            ("NARR", "And never write 'the pupil contracts'. The pupil is a hole. You cannot flex a hole.", {"step": 1, "sfx": "ding", "post": 0.4}),
        ]},
        {"id": "maths", "shot": "host", "bg": "classroom", "clock": "12:40", "lines": [
            ("NARR", "Twelve forty. Maths. Meera looks from the whiteboard, down to the phone hidden under her desk. The eye now has to refocus. This is called accommodation.", {"act": "phone"}),
        ]},
        {"id": "lens", "shot": "diagram", "bg": "eyeroom", "cast": ["CILIARY", "LIGS", "LENS"], "diagram": "lens", "lines": [
            ("CILIARY", "Near object, mate! Ciliary muscles, contract! That's me. Getting a pump.", {"step": 1, "emote": "proud"}),
            ("LIGS", "And the suspensory ligaments go slack. We're very relaxed about it.", {"step": 1, "emote": "sleepy"}),
            ("LENS", "And with nobody pulling on me, I go fat and round. Thanks for pointing that out.", {"step": 1, "emote": "annoyed"}),
            ("NARR", "A fatter lens refracts light more strongly, so light from the nearby phone is focused onto the retina.", {"step": 1}),
            ("NARR", "Look back up at the whiteboard, and it reverses. Ciliary muscles relax. The ligaments are pulled tight. The lens is stretched thin.", {"step": 2}),
            ("CILIARY", "Easy way to remember it. Near? Contract. Slack. Fat. Like me after leg day.", {"step": 3, "emote": "smug"}),
            ("NARR", "And do not write 'the ligaments contract'. Ligaments are not muscles. They just go slack, or tight. Like a phone charger cable.", {"step": 3}),
            ("TEACHER", "Meera. Phone. Now.", {"step": 3, "sfx": "scratch", "post": 0.5}),
        ]},

        # ───────────────────────── TEMPERATURE ─────────────────────────
        {"id": "hypo_conf", "shot": "confessional", "bg": "thermo", "cast": ["HYPO"],
         "lower": ["THE HYPOTHALAMUS", "Chair, Temperature & Water Committee. The body's thermostat. Hates surprises."], "lines": [
            ("NARR", "Homeostasis. Keeping the body's internal conditions constant, even when the outside world is being completely unreasonable.", {}),
            ("HYPO", "Thirty seven degrees. Not thirty eight. Not thirty six point five. Thirty seven.", {"emote": "intense"}),
            ("HYPO", "Because that's the best temperature for our enzymes. Too hot, they denature. Too cold, everything slows down. And then I get a headache. Which is ironic. Because I live in the head.", {"emote": "annoyed"}),
        ]},
        {"id": "pe", "shot": "host", "bg": "field", "clock": "14:00", "lines": [
            ("NARR", "Two p.m. P.E. Outdoors. In Singapore. Thirty four degrees, with a humidity of: why.", {"act": "run"}),
            ("HOST", "Coach, it's literally a sauna out here.", {"act": "hot", "live": "meera"}),
            ("HYPO", "Blood temperature thirty seven point six! Initiate cooling procedures!", {"act": "hot", "sfx": "alarm", "emote": "panic"}),
        ]},
        {"id": "hot", "shot": "diagram", "bg": "thermo", "cast": ["SWEAT", "ARTERIOLE"], "diagram": "skin", "lines": [
            ("SWEAT", "Sweat glands, reporting! We release sweat onto the skin. It evaporates, and that takes heat energy away with it. I'm not gross. I'm evaporative cooling.", {"step": 1, "emote": "proud"}),
            ("ARTERIOLE", "Arterioles near the skin, widening! Vasodilation! More blood flows through the skin capillaries, so more heat is lost by radiation.", {"step": 2, "emote": "proud"}),
            ("NARR", "Meanwhile, the hair erector muscles relax, and the hairs on the skin lie flat.", {"step": 3}),
            ("NARR", "Important. The capillaries do not move. They have never moved. They are not on a treadmill. The arterioles widen.", {"step": 4}),
            ("NARR", "Write 'the capillaries move closer to the skin', and you lose the mark. And, frankly, our respect.", {"step": 4, "sfx": "ding", "post": 0.3}),
        ]},
        {"id": "aircon", "shot": "host", "bg": "aircon", "clock": "14:45", "lines": [
            ("NARR", "Two forty five. The classroom air con is set to sixteen degrees, because somebody in the back row believes they live in Antarctica.", {"act": "cold"}),
            ("HYPO", "Thirty six point six! We are freezing! Reverse everything!", {"act": "cold", "sfx": "alarm", "emote": "panic"}),
        ]},
        {"id": "cold2", "shot": "diagram", "bg": "thermo", "cast": ["ARTERIOLE", "HYPO"], "diagram": "skin", "lines": [
            ("ARTERIOLE", "Vasoconstriction! Arterioles narrowing. Less blood near the skin, so less heat lost.", {"step": 5, "emote": "intense"}),
            ("NARR", "The muscles start shivering. Rapid contractions that need respiration, and respiration releases heat. And the hair erector muscles contract, so the hairs stand up and trap a layer of insulating air.", {"step": 6}),
            ("HYPO", "For a human with this little body hair, that achieves basically nothing. But we do it anyway. Tradition.", {"step": 6, "emote": "smug"}),
        ]},
        {"id": "feedback", "shot": "diagram", "bg": "thermo", "cast": ["HYPO"], "diagram": "feedback", "lines": [
            ("NARR", "Any change away from thirty seven triggers a response that reverses the change. This is negative feedback. Not negative as in bad. Negative as in: undo.", {"step": 1}),
            ("HYPO", "I am the undo button. Respect the undo button.", {"step": 1, "emote": "intense", "post": 0.4}),
        ]},

        # ───────────────────────── BLOOD GLUCOSE ─────────────────────────
        {"id": "boba", "shot": "host", "bg": "boba", "clock": "15:30", "lines": [
            ("HOST", "One large brown sugar boba please. A hundred percent sugar. Extra pearls.", {"act": "order", "live": "meera"}),
            ("NARR", "Three thirty. Meera orders what is, chemically speaking, a pudding you can drink.", {"act": "drink", "sfx": "slurp"}),
        ]},
        {"id": "pancreas", "shot": "diagram", "bg": "pancreas", "cast": ["INSULIN", "GLUCAGON", "LIVER"], "diagram": "glucose", "lines": [
            ("NARR", "Inside the pancreas, the twins. Insulin, and Glucagon.", {"step": 0}),
            ("GLUCAGON", "We're twins. Don't ask about the accents.", {"step": 0, "emote": "chill"}),
            ("INSULIN", "Blood glucose is spiking! I'm being released into the blood. Liver! Muscles! Take glucose out of the blood and convert it into glycogen. Store it!", {"step": 1, "emote": "intense"}),
            ("LIVER", "Glycogen. Insoluble. Stacks beautifully. Love it.", {"step": 2, "emote": "proud"}),
            ("NARR", "Insulin makes cells take in glucose, and makes the liver and muscles store it as glycogen. Blood glucose falls back to normal.", {"step": 2}),
            ("NARR", "Six p.m. Dinner is late. Blood glucose drops.", {"step": 3}),
            ("GLUCAGON", "My turn. Liver, break the glycogen back down into glucose, and release it into the blood.", {"step": 4, "emote": "smug"}),
            ("INSULIN", "You undo all of my work.", {"step": 4, "emote": "annoyed"}),
            ("GLUCAGON", "That's literally the job description.", {"step": 4, "emote": "chill"}),
            ("NARR", "Negative feedback. Again. You may have noticed the body really likes this one.", {"step": 4, "post": 0.3}),
        ]},
        {"id": "trap3", "shot": "card", "bg": "card", "card": {"words": [
            ["GLUCOSE", "the sugar in your blood"],
            ["GLYCOGEN", "storage form, in liver & muscle"],
            ["GLUCAGON", "hormone that turns glycogen back to glucose"]]}, "lines": [
            ("NARR", "Glucose. Glycogen. Glucagon. Three words that look nearly identical, apparently chosen by scientists who did not want you to pass.", {"step": 1}),
            ("NARR", "Spell them carefully. Examiners do not guess.", {"step": 2, "sfx": "ding"}),
            ("NARR", "And seriously: in type one diabetes, the pancreas cannot make enough insulin, so blood glucose can rise dangerously high. It's managed with insulin injections, a careful diet, and regular blood glucose checks.", {"step": 3, "post": 0.4}),
        ]},

        # ───────────────────────── ADRENALINE ─────────────────────────
        {"id": "quiz", "shot": "host", "bg": "classroom", "clock": "16:10", "lines": [
            ("TEACHER", "Phones away. Surprise vocab quiz. Right now.", {"act": "shock"}),
        ]},
        {"id": "adren", "shot": "diagram", "bg": "hq", "cast": ["ADREN", "CORTEX"], "diagram": "adrenaline", "lines": [
            ("ADREN", "EMERGENCY! EVERYBODY PANIC!", {"step": 0, "emote": "panic", "sfx": "alarm"}),
            ("NARR", "Adrenaline. Released by the adrenal glands, which sit on top of the kidneys like tiny hats.", {"step": 0}),
            ("ADREN", "Heart rate, UP! Breathing rate, UP! Pupils, WIDE! Liver, turn glycogen into glucose! I want sugar in the blood for the muscles, NOW!", {"step": 1, "emote": "panic"}),
            ("NARR", "Adrenaline prepares the body for fight or flight. More oxygen and glucose, delivered to the muscles, fast.", {"step": 2}),
            ("CORTEX", "It's a ten mark vocab quiz. Nobody is fighting a tiger.", {"step": 2, "emote": "annoyed"}),
            ("ADREN", "THE QUIZ IS THE TIGER!", {"step": 3, "emote": "panic", "sfx": "boing", "post": 0.5}),
        ]},

        # ───────────────────────── WATER & THE KIDNEY ─────────────────────────
        {"id": "netball", "shot": "host", "bg": "court", "clock": "17:00", "lines": [
            ("NARR", "Five p.m. Netball training. Ninety minutes. Zero water.", {"act": "run"}),
            ("MUM", "Meera, did you drink water today? Two litres! I'm sending you one article.", {"act": "phone", "sfx": "ping", "live": "mum"}),
            ("HOST", "Ma, I'm fine.", {"act": "phone", "live": "meera"}),
            ("HYPO", "She is not fine. Blood water content is low. The blood is too concentrated.", {"act": "phone", "emote": "annoyed"}),
        ]},
        {"id": "pit", "shot": "wide", "bg": "hq", "cast": ["HYPO", "PIT", "ADH"], "lines": [
            ("NARR", "The hypothalamus detects this, and signals the pituitary gland, which dangles just underneath it.", {}),
            ("PIT", "Pituitary gland. Also known as the master gland. I'm not saying I'm in charge. I'm just saying everybody does what I say. Releasing more A.D.H.", {"emote": "smug"}),
            ("ADH", "A.D.H.! Anti diuretic hormone! Delivery for the kidney, travelling by blood!", {"emote": "proud", "sfx": "whoosh"}),
        ]},
        {"id": "kidney", "shot": "diagram", "bg": "plant", "cast": ["KIDNEY", "ADH"], "diagram": "nephron", "lines": [
            ("KIDNEY", "Welcome to the kidney. About a million nephrons. Mind the puddles.", {"step": 0, "emote": "sleepy"}),
            ("KIDNEY", "Blood arrives at the glomerulus under high pressure. Small stuff, like water, glucose, urea and salts, gets squeezed out into the Bowman's capsule. Blood cells and proteins are too big. They stay in the blood. That's ultrafiltration.", {"step": 1}),
            ("KIDNEY", "Then, in the first coiled tubule, we take back all of the glucose, by active transport. In a healthy person, none of it ends up in urine.", {"step": 2}),
            ("KIDNEY", "And down here is the collecting duct. That's where A.D.H. does its thing.", {"step": 3}),
            ("ADH", "Signed, sealed, delivered! Collecting duct walls, more permeable to water!", {"step": 4, "emote": "proud", "sfx": "ding"}),
            ("KIDNEY", "So more water is reabsorbed back into the blood, by osmosis. Result: a small volume of concentrated urine. Dark yellow. Like a strongly worded email.", {"step": 5}),
        ]},
        {"id": "drink", "shot": "host", "bg": "court", "clock": "18:30", "lines": [
            ("NARR", "Then Meera drinks an entire litre of water, in one go.", {"act": "drink", "sfx": "gulp"}),
            ("HOST", "Happy, Ma?", {"act": "drink", "live": "meera"}),
        ]},
        {"id": "kidney2", "shot": "diagram", "bg": "plant", "cast": ["KIDNEY", "HYPO"], "diagram": "nephron", "lines": [
            ("HYPO", "Now the blood is too dilute. Pituitary, less A.D.H. please.", {"step": 6, "emote": "annoyed"}),
            ("KIDNEY", "Collecting duct, less permeable. Less water reabsorbed. A large volume of pale, dilute urine. Very convenient during a two hour exam.", {"step": 7, "emote": "sleepy"}),
            ("NARR", "Remember the chain. Hypothalamus detects. Pituitary releases A.D.H. Collecting duct becomes more permeable. More water reabsorbed. And yes. Negative feedback. Again.", {"step": 8, "post": 0.4}),
        ]},

        # ───────────────────────── PLANTS ─────────────────────────
        {"id": "basil", "shot": "diagram", "bg": "windowsill", "cast": ["BASIL"], "diagram": "plant", "lines": [
            ("NARR", "Meanwhile, on the kitchen windowsill, Basil the basil plant has no nerves, no blood, no adrenaline, and no meetings. And is honestly thriving.", {"step": 0}),
            ("BASIL", "I run everything with one hormone. Auxin. It's made in my shoot tip.", {"step": 1, "emote": "proud"}),
            ("BASIL", "Light coming from the window? Auxin moves to my shady side. The cells on that side grow longer, so I bend towards the light. Positive phototropism.", {"step": 2}),
            ("BASIL", "And my roots grow down, with gravity. Positive gravitropism. Also called geotropism, if you're old school.", {"step": 3}),
            ("BASIL", "No brain. No drama. Just auxin, and vibes.", {"step": 3, "emote": "chill", "post": 0.4}),
        ]},

        # ───────────────────────── SPEED ROUND ─────────────────────────
        {"id": "speed", "shot": "speed", "bg": "card", "cast": ["HYPO"], "items": [
            ["Impulses don't jump.", "Neurotransmitter DIFFUSES across the synapse."],
            ["Capillaries don't move.", "ARTERIOLES vasodilate / vasoconstrict."],
            ["The pupil is a hole.", "The IRIS muscles contract."],
            ["Ligaments aren't muscles.", "Suspensory ligaments go SLACK or TAUT."],
            ["Glycogen ≠ glucagon.", "Glycogen is STORED. Glucagon is the HORMONE."],
        ], "lines": [
            ("HYPO", "Before you go. Five things that lose marks. Speed round.", {"step": 0, "emote": "intense"}),
            ("HYPO", "One. Impulses don't jump. The neurotransmitter diffuses across the synapse.", {"step": 1, "sfx": "ding"}),
            ("HYPO", "Two. Capillaries don't move. Arterioles dilate and constrict.", {"step": 2, "sfx": "ding"}),
            ("HYPO", "Three. The pupil is a hole. The iris muscles contract.", {"step": 3, "sfx": "ding"}),
            ("HYPO", "Four. Ligaments don't contract. They go slack, or tight.", {"step": 4, "sfx": "ding"}),
            ("HYPO", "Five. Glycogen is stored. Glucagon is the hormone. Spell it like your grade depends on it. Because it does.", {"step": 5, "sfx": "ding"}),
            ("HYPO", "Meeting adjourned.", {"step": 5, "emote": "smug", "post": 0.5}),
        ]},

        # ───────────────────────── TAG ─────────────────────────
        {"id": "tag", "shot": "wide", "bg": "hq_night", "cast": ["CORTEX", "RELAY", "HYPO", "ADREN"], "lines": [
            ("CORTEX", "So, honestly. What did I actually decide today?", {"emote": "sleepy"}),
            ("RELAY", "You decided to buy the boba, boss.", {"emote": "smug"}),
            ("CORTEX", "Right. Big decision.", {"emote": "proud"}),
            ("RELAY", "Caused half the episode.", {"emote": "chill"}),
            ("ADREN", "IS IT AN EMERGENCY?", {"emote": "panic", "sfx": "boing"}),
            ("ALL", "No.", {"emote": "annoyed", "post": 0.8}),
        ]},
        {"id": "end", "shot": "end", "bg": "title", "lines": [
            ("BEAT", 5.0, {"sfx": "theme"}),
        ]},
    ],
}
