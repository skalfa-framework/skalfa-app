import { ReactNode } from "react";
import { Metadata } from "next";

import { Inter } from "next/font/google";
import "@styles/globals.css";

import moment from "moment";
import "moment/locale/id";

import { ContextAppProvider } from "@contexts/AppProvider";
import { ShortcutProvider } from "@components";

moment.locale("id");


const font = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title               :  "SKALFA",
  description         :  "Build Fast, Start With Confidence",
  applicationName     :  "SKALFA",
  appleWebApp         :  {
    capable            :  true,
    statusBarStyle     :  "default",
    title              :  "SKALFA",
  },
  icons               :  {
    icon               :  "/images/logo.png",
    apple              :  "/images/logo.png",
  },
};



export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={font.className}>
      <body className="antialiased">
        <ContextAppProvider>
          <ShortcutProvider />
          {children}
        </ContextAppProvider>
      </body>
    </html>
  );
}