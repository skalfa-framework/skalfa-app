import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name              :  "Skalfa App",
    short_name        :  "Skalfa",
    description       :  "A premium hybrid web, desktop, and mobile application.",
    start_url         :  "/",
    display           :  "standalone",
    background_color  :  "#FAFDFF",
    theme_color       :  "#FAFDFF",
    icons             :  [
      {
        src    :  "/icon-192.png",
        sizes  :  "192x192",
        type   :  "image/png",
      },
      {
        src    :  "/icon-512.png",
        sizes  :  "512x512",
        type   :  "image/png",
      },
    ],
  };
}
