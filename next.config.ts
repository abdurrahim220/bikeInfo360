import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, 
  swcMinify: true,       
  eslint: {
    ignoreDuringBuilds: true, 
  },
  images: {
    domains: ["example.com", "images.unsplash.com"], 
  },
};

export default nextConfig;
