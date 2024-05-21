import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  server: { port: 5173 },
  integrations: [tailwind()],
});