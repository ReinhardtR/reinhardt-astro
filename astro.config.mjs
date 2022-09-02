import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel(),
  site: "https://reinhardt-astro.vercel.app",
  integrations: [mdx(), prefetch(), sitemap(), tailwind(), image(), solidJs()],
});
