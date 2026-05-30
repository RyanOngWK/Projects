import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['172.16.2.251','192.168.88.12'],
  
  // Add the images configuration right here
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Add any other image domains your Aceternity components use here
    ],
  },
};

export default nextConfig;