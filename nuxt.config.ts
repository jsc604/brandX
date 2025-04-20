// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint"],

  css: ["~/assets/css/main.css"],

  ui: {
    colorMode: false,
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-27",

  app: {
    head: {
      title: "Brand X Marketing Solutions",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Consumer Brands distributor and manufacturer of POS merchandise",
        },
        {
          "http-equiv": "Content-Security-Policy",
          content: "block-all-mixed-content",
        },
        { name: "og:title", content: "Brand X Marketing Solutions" },
        {
          name: "og:description",
          content:
            "Consumer Brands distributor and manufacturer of POS merchandise",
        },
        {
          name: "og:image",
          content: "/images/logo-vertical.png",
        },
        {
          name: "twitter:image",
          content: "/images/logo-vertical.png",
        },
      ],
      link: [{ rel: "canonical", href: "https://valueaddsource.com/" }],
    },
  },
});
