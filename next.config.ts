import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  async rewrites() {
    return [
      { source: "/masterclass", destination: "/masterclass/index.html" },
      { source: "/season1", destination: "/season1/index.html" },
    ];
  },
};

export default nextConfig;
