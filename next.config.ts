import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https"
      },{
        hostname: "plus.unsplash.com",
        protocol: "https"
      },{
        hostname: "media.istockphoto.com",
        protocol: "https"
      }
    ]
  }
};

export default nextConfig;
