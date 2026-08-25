import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Submarined_Blog",
  description: "为化学学习而生的记录小网站",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/submarine-nautic-svgrepo-com.svg",
      },
    ],
  ],

  theme,

  bundler: viteBundler({
    viteOptions: {
      server: {
        port: 8080,
        strictPort: true,
      },
    },
  }),

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
