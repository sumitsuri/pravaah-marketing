import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
