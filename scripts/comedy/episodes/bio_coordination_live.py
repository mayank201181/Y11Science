# BODY CORPORATE S1E1, live-action edition.
# Same episode as bio_coordination.py, but every real-world ("host") scene is replaced by
# live-action shots generated with Veo 3.1 (8 s each, native dialogue + lip-sync).
# The inside-the-body cartoon scenes are unchanged.
#
# Clip spec: id, refs (["meera"] / ["mum"]), prompt, gain (volume of the clip's own audio),
#            vo (optional narrator voice-over, spoken over the clip), file (reuse an existing clip).
import copy
from bio_coordination import EPISODE as BASE

STYLE = ("Live-action family sitcom, photorealistic, natural lighting, handheld TV-comedy camera, set in Singapore. "
         "No subtitles, no on-screen text, no music. ")
MEERA = "the 15-year-old Indian Singaporean schoolgirl from the reference photo (long black braid)"
MUM = "the Indian mother from the reference photo (about 40, shoulder-length black hair)"
NO_DIALOGUE = " No dialogue, only natural ambient sound."

LIVE = {
    "cold": [
        {"id": "c1", "refs": ["meera"], "audio": False, "gain": 0.0,
         "vo": "Seven oh two a.m. Meera, fifteen, is about to meet a Milo microwaved to roughly the temperature of the sun.",
         "prompt": STYLE + "Early morning in a bright Singapore HDB flat kitchen with warm wooden cabinets, white tiled walls and a window behind the counter. Close-up of a red mug of chocolate malt drink steaming on the counter, then "
                   + MEERA + ", in a white school uniform blouse, walks in still sleepy, rubbing her eyes, spots the mug with delight and steps up to the counter in front of it, grinning." + NO_DIALOGUE},
        {"id": "c2", "file": "c2_reuse.mp4", "gain": 1.0},  # the approved test shot: "Okay. Milo. Let's go." / "Ow!" / Mum: "Blow on it first!"
    ],
    "cinema": [
        {"id": "m1", "refs": ["meera"], "gain": 0.35,
         "vo": "Twelve noon. Meera walks out of a dark cinema into the Singapore sun, which appears to be personally offended by her existence.",
         "prompt": STYLE + MEERA + ", in casual weekend clothes, walks out of the dark entrance of a shopping-mall cinema straight into blazing midday sunlight. "
                   "She stops, squints hard and throws an arm over her eyes." + NO_DIALOGUE},
        {"id": "m2", "refs": ["meera"], "start_from": ["m1", "last"], "gain": 1.0,
         "prompt": STYLE + "The camera moves in to a close-up of the girl in harsh midday sunlight outside the mall, eyes screwed shut, shielding her face. "
                   "She groans dramatically in a Singaporean English accent: \"Argh! My eyes!\" Then she slowly blinks as her eyes adjust."},
    ],
    "maths": [
        {"id": "x1", "refs": ["meera"], "gain": 0.0,
         "vo": "Twelve forty. Maths. Meera looks from the whiteboard to the phone under her desk. Her eyes must refocus.",
         "prompt": STYLE + "A Singapore secondary school maths classroom with a quadratic equation on the whiteboard. " + MEERA
                   + ", in school uniform at her desk, glances up at the whiteboard, then sneakily looks down at a phone hidden under her desk, then back up innocently."
                   + NO_DIALOGUE},
    ],
    "pe": [
        {"id": "p1", "refs": ["meera"], "gain": 0.2,
         "vo": "Two p.m. P.E. Outdoors. In Singapore. Thirty four degrees, with a humidity of: why.",
         "prompt": STYLE + "An outdoor school running track under scorching midday sun, heat haze shimmering. Students in PE T-shirts jog laps; "
                   + MEERA + ", red-faced and drenched in sweat in a PE T-shirt, jogs past the camera panting." + NO_DIALOGUE},
        {"id": "p2", "refs": ["meera"], "gain": 1.0,
         "prompt": STYLE + MEERA + ", in a sweaty PE T-shirt, stops beside the PE coach on a sunny running track, hands on her knees, gasping, and says in a Singaporean English accent: "
                   "\"Coach, it's literally a sauna out here.\" The coach just blows his whistle."},
    ],
    "aircon": [
        {"id": "a1", "refs": ["meera"], "audio": False, "gain": 0.0,
         "vo": "Two forty five. The classroom air con is set to sixteen degrees, because somebody in the back row believes they live in Antarctica.",
         "prompt": STYLE + "A Singapore classroom; the air-conditioner panel on the wall reads 16 degrees. Classmates wear jackets. " + MEERA
                   + ", still in her damp PE T-shirt, shivers violently, hugging herself, teeth chattering, goosebumps on her arms." + NO_DIALOGUE},
    ],
    "boba": [
        {"id": "b1", "refs": ["meera"], "gain": 1.0,
         "prompt": STYLE + "A busy bubble tea shop counter in Singapore. " + MEERA + ", in school uniform, leans on the counter and orders eagerly from the cashier in a Singaporean English accent: "
                   "\"One large brown sugar boba please. A hundred percent sugar. Extra pearls.\""},
        {"id": "b2", "refs": ["meera"], "gain": 0.35,
         "vo": "Three thirty. Meera orders what is, chemically speaking, a pudding you can drink.",
         "prompt": STYLE + "Close-up of " + MEERA + " taking a huge blissful slurp of a large brown sugar boba milk tea through a fat straw, eyes closed in pure happiness, "
                   "dark tapioca pearls visible in the cup." + NO_DIALOGUE},
    ],
    "quiz": [
        {"id": "q1", "refs": ["meera"], "gain": 1.0,
         "prompt": STYLE + "A Singapore secondary school classroom. A stern Chinese Singaporean female teacher in her forties walks to the front and announces in a Singaporean English accent: "
                   "\"Phones away. Surprise vocab quiz. Right now.\" The class groans; " + MEERA + " freezes in panic, eyes wide."},
    ],
    "netball": [
        {"id": "n1", "refs": ["meera"], "gain": 0.25,
         "vo": "Five p.m. Netball training. Ninety minutes. Zero water.",
         "prompt": STYLE + "An outdoor netball court in late-afternoon light. " + MEERA + ", in a sports bib, plays an intense netball training game, catching and passing, sweaty and exhausted."
                   + NO_DIALOGUE},
        {"id": "n2", "refs": ["mum"], "gain": 1.0,
         "prompt": STYLE + "In a bright Singapore condo kitchen, " + MUM + " holds her phone up for a video call and says in an exasperated Indian English accent: "
                   "\"Meera, did you drink water today? Two litres! I'm sending you one article.\""},
        {"id": "n3", "refs": ["meera"], "gain": 1.0, "crop": 0.78,  # Veo burned gibberish subtitles into the bottom; zoomed out of frame
        
         "prompt": STYLE + MEERA + ", in her white school uniform blouse, sits on a bench beside an outdoor court lined with green fencing and palm trees after training, sweaty, holding her phone up on a video call, and replies with a tired teenage eye-roll "
                   "in a Singaporean English accent: \"Ma, I'm fine.\" Then she puts the phone down and picks up a big water bottle."},
    ],
    "drink": [
        {"id": "d1", "refs": ["meera"], "gain": 1.0, "trim_start": 1.2,  # she also says the line before drinking; cut it
         "vo": "Then Meera drinks an entire litre of water, in one go.",
         "prompt": STYLE + MEERA + ", sitting on a bench beside a netball court, grabs a big one-litre water bottle and chugs the whole thing without stopping for five seconds, "
                   "then lowers it, gasps for breath and says sarcastically to her phone camera in a Singaporean English accent: \"Happy, Ma?\""},
    ],
}

# Hand-checked captions per shot: (start, end, speaker, text), seconds from the start of the (trimmed) clip.
# Timings come from a Whisper word-level transcript of each generated shot.
CAPTIONS = {
    "c2": [(0.0, 2.7, "MEERA", "Okay. Milo. Let's go."), (2.8, 4.1, "MEERA", "Ow! Ow!"),
           (4.2, 7.0, "MUM", "Blow on it first! How many times I have to tell you?")],
    "m2": [(2.5, 5.9, "MEERA", "Argh! My eyes!")],
    "p2": [(0.0, 5.7, "MEERA", "Coach, it's literally a sauna out here.")],
    "b1": [(0.0, 5.4, "MEERA", "One large brown sugar boba please. A hundred percent sugar. Extra pearls."),
           (5.6, 7.8, "CASHIER", "Coming right up.")],
    "q1": [(0.0, 6.8, "TEACHER", "Phones away. Surprise vocab quiz. Right now.")],
    "n2": [(0.0, 3.0, "MUM", "Meera, did you drink water today?"), (4.1, 7.3, "MUM", "Two litres! I'm sending you one article.")],
    "n3": [(1.6, 3.6, "MEERA", "Ma, I'm fine.")],
    "d1": [(4.8, 6.6, "MEERA", "Happy, Ma?")],
    "e1": [(0.0, 2.8, "MUM", "Meera, lights off. Now."), (3.0, 5.8, "MEERA", "Negative feedback, Ma. I'm restoring my set point."),
           (6.2, 6.9, "MEERA", "Good night, Ma."), (7.2, 7.9, "MUM", "Good night.")],
}

# Live-action closer, after the cartoon tag scene.
NIGHT = {"id": "night", "shot": "live", "clock": "23:15", "lines": [], "clips": [
    {"id": "e1", "refs": ["meera", "mum"], "gain": 1.0,
     "prompt": STYLE + "Night, a teenager's bedroom lit by a desk lamp. " + MEERA + ", in pyjamas, is revising biology notes at her desk. "
               + MUM + ", wearing the same light blue blouse, appears at the doorway and says in an Indian English accent: \"Meera, lights off. Now.\" "
               "Meera replies without looking up, in a Singaporean English accent: \"Negative feedback, Ma. I'm restoring my set point.\" Mum shakes her head and smiles."},
]}

# Inner-body lines that used to play over the real-world scenes move to the start of the next cartoon scene.
MOVE = {
    "pe": ("hot", ("HYPO", "Blood temperature thirty seven point six! Initiate cooling procedures!", {"sfx": "alarm", "emote": "panic", "step": 0})),
    "aircon": ("cold2", ("HYPO", "Thirty six point six! We are freezing! Reverse everything!", {"sfx": "alarm", "emote": "panic", "step": 5})),
    "netball": ("pit", ("HYPO", "She is not fine. Blood water content is low. The blood is too concentrated.", {"emote": "annoyed"})),
}
ADD_FIRST = {"lens": ("NARR", "This is called accommodation.", {"step": 1})}


def build():
    ep = copy.deepcopy(BASE)
    ep["slug"] = "bio-coordination"
    scenes = []
    for sc in ep["scenes"]:
        sid = sc["id"]
        if sid in LIVE:
            scenes.append({"id": sid, "shot": "live", "clock": sc.get("clock"), "lines": [], "clips": LIVE[sid]})
            continue
        sc = dict(sc)
        for src, (dst, ln) in MOVE.items():
            if dst == sid:
                sc["lines"] = [ln] + list(sc["lines"])
        if sid in ADD_FIRST:
            sc["lines"] = [ADD_FIRST[sid]] + list(sc["lines"])
        if sid == "end":
            scenes.append(NIGHT)
        scenes.append(sc)
    ep["scenes"] = scenes
    for sc in scenes:
        for c in sc.get("clips", []):
            if c["id"] in CAPTIONS:
                c["captions"] = [{"start": a, "end": b, "who": w, "text": t} for a, b, w, t in CAPTIONS[c["id"]]]
    return ep


EPISODE = build()
