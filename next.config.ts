import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000, // 1 ano
    dangerouslyAllowSVG: false,
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
