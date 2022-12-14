import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import vercel from "@astrojs/vercel/static";
import preact from "@astrojs/preact";

import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrsimPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel(),
  site: "https://reinhardt-astro.vercel.app",
  integrations: [
    mdx(),
    prefetch(),
    image(),
    preact(),
    sitemap(),
    tailwind({
      // Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      config: { applyBaseStyles: false },
    }),
  ],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      rehypeCodeTitles,
      rehypePrsimPlus,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            class: "anchor-link",
          },
        },
      ],
    ],
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
  },
});
