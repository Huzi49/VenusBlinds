import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['media.istockphoto.com', 'venusblinds.com'],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
