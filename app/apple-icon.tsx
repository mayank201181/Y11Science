import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #0284c7 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 900, lineHeight: 1 }}>Y11</div>
        <div style={{ fontSize: 22, fontWeight: 700 }}>SCIENCE</div>
      </div>
    ),
    { ...size },
  );
}
