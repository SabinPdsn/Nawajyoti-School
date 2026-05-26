import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  // images: { unoptimized: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
