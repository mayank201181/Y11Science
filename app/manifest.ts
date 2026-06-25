import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Science Lab — IGCSE Year 11",
    short_name: "Science Lab",
    description:
      "Cambridge IGCSE Biology, Chemistry & Physics study guide and question bank for Year 11.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f1226",
    theme_color: "#0f1226",
    orientation: "portrait",
    icons: [
      { src: "/api/appicon?size=192", sizes: "192x192", type: "image/png" },
      { src: "/api/appicon?size=512", sizes: "512x512", type: "image/png" },
      { src: "/api/appicon?size=512&maskable=1", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
