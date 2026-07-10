import type { NextConfig } from "next";
import path from "path";

let nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol  :  "http",
        hostname  :  "127.0.0.1",
        port      :  "4000",
        pathname  :  "/**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@utils"                    :  path.resolve(process.cwd(), "utils"),
      "@components"               :  path.resolve(process.cwd(), "components"),
      "@contexts"                 :  path.resolve(process.cwd(), "contexts"),
      "@app"                      :  path.resolve(process.cwd(), "app"),
      "@schema"                   :  path.resolve(process.cwd(), "schema"),
    };
    return config;
  },
};

const isTauri = process.env.TAURI_ENV_PLATFORM !== undefined;

if (isTauri) {
  nextConfig = {
    ...nextConfig,
    output  :  "export",
    images  :  {
      ...nextConfig.images,
      unoptimized  :  true,
    },
  };
}

export default nextConfig;
