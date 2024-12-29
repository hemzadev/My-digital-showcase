import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    turbo: {
      rules: {
        // Configure SVG handling for Turbopack
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: 'component',
        },
      },
    },
  },
};

export default nextConfig;
