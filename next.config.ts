import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Suppress TypeScript errors during production build for legacy .js pages
  typescript: {
    ignoreBuildErrors: true,
  },
  // Whitelist external image domains used in services and admin pages
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.zyrosite.com",
      },
      {
        protocol: "https",
        hostname: "assets.zyrosite.com",
      },
    ],
  },
};

export default nextConfig;
