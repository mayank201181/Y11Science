import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const size = Math.min(1024, Math.max(48, Number(searchParams.get("size") || 512)));
  const maskable = searchParams.get("maskable") === "1";
  const pad = maskable ? Math.round(size * 0.1) : 0;

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
          padding: pad,
        }}
      >
        <div style={{ fontSize: size * 0.34, fontWeight: 900, lineHeight: 1 }}>Y11</div>
        <div style={{ fontSize: size * 0.13, fontWeight: 700, letterSpacing: size * 0.01 }}>
          SCIENCE
        </div>
      </div>
    ),
    { width: size, height: size },
  );
}
