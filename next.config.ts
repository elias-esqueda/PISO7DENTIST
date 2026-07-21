import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "62.72.5.193"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
