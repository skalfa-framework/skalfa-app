import type { NextConfig } from "next";
import path from "path";



let nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@skalfa/skalfa-component",
    "@skalfa/skalfa-icon",
    "@skalfa/skalfa-app-core",
    "@skalfa/skalfa-lang"
  ],
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
      "@skalfa/skalfa-component"  :  path.resolve(process.cwd(), "../skalfa-component/src"),
      "@skalfa/skalfa-app-core"   :  path.resolve(process.cwd(), "../skalfa-app-core/src"),
      "@skalfa/skalfa-icon"       :  path.resolve(process.cwd(), "../skalfa-icon/src"),
      "@skalfa/skalfa-lang"       :  path.resolve(process.cwd(), "../skalfa-lang/src"),
      "@utils"                    :  path.resolve(process.cwd(), "../skalfa-app-core/src"),
      "@components"               :  path.resolve(process.cwd(), "../skalfa-component/src"),
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