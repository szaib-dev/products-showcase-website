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
      },{
        hostname: "www.affirmadistributors.us",
        protocol: "https"
      },{
        hostname: "cdn-icons-png.flaticon.com",
        protocol: "https"
      },{
        hostname: "cdn.shopify.com",
        protocol: "https"
      }
    ]
  }
};

export default nextConfig;
