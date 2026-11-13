import sys, os, shutil, time, torch
import numpy as np
for _a, _t in (("float", float), ("int", int), ("bool", bool), ("complex", complex), ("object", object)):
    if not hasattr(np, _a): setattr(np, _a, _t)
HERE = os.path.dirname(os.path.abspath(__file__))
os.chdir(os.path.join(HERE, "sadtalker")); sys.path.insert(0, ".")
torch.set_num_threads(int(os.environ.get("THREADS", "4")))
from src.gradio_demo import SadTalker
img, wav, out = sys.argv[1], sys.argv[2], sys.argv[3]
size = int(os.environ.get("SIZE", "256")); enh = os.environ.get("ENH", "0") == "1"
tag = f"st_{os.getpid()}"
import cv2
PAD = int(os.environ.get("PAD", "160"))
tmp_img = os.path.join(HERE, "tmp", tag + "_" + os.path.basename(img)); os.makedirs(os.path.dirname(tmp_img), exist_ok=True)
_im = cv2.imread(img); H0, W0 = _im.shape[:2]
cv2.imwrite(tmp_img, cv2.copyMakeBorder(_im, PAD, PAD, PAD, PAD, cv2.BORDER_REFLECT))
tmp_wav = os.path.join(HERE, "tmp", tag + "_" + os.path.basename(wav)); shutil.copy(wav, tmp_wav)
t = time.time()
p = SadTalker("checkpoints", "src/config").test(tmp_img, tmp_wav, preprocess="full", still_mode=True, use_enhancer=enh,
                                               batch_size=2, size=size, pose_style=0, exp_scale=1.0,
                                               result_dir=os.path.join(HERE, "tmp", "res_" + tag))
import subprocess
subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", p, "-vf", f"crop={W0}:{H0}:{PAD}:{PAD}", "-c:v", "libx264", "-crf", "18", "-pix_fmt", "yuv420p", "-c:a", "aac", out], check=True)
print("DONE", out, round(time.time() - t, 1), "s")
