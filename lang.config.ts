import { defineConfig } from "@skalfa/skalfa-lang";

export default defineConfig({
  defaultLocale: "id",
  locales: ["id", "en"],
  frontend: {
    global: "langs",
    modules: "app/**/_langs"
  },
  output: "langs/.generated"
});
