import type { NextConfig } from "next";

const isTauri = process.env.IS_TAURI === "true";

let nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "4000",
        pathname: "/**",
      },
    ],
  },
};

if (isTauri) {
  nextConfig = {
    ...nextConfig,
    output: "export",
    images: {
      ...nextConfig.images,
      unoptimized: true,
    },
  };
}

export default nextConfig;

