let development = process.env.NODE_ENV !== "production";
export default {
  target: "server",
  // Global page headers: https://go.nuxtjs.dev/config-head
  generate: {
    fallback: true,
  },
  head: {
    title: "quizyoth",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "og:title", property: "og:title", content: "quizyoth" },
      { hid: "og:image", name: "og:image", content: "/quizyoth.png" },
      { hid: "og:image:alt", name: "og:image:alt", content: "quizyoth logo" },
      { hid: "og:type", name: "og:type", content: "website" },
      {
        hid: "og:url",
        name: "og:url",
        content: "https://quizyoth.netlify.app/",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "I give you quiz's website to practice your knowledge",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "quizyoth website",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "quizyoth is website where you can answer typical questions",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "quizyoth",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/quizyoth.png",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/postcss8",
    "@nuxtjs/fontawesome",
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/sitemap"],
  axios: {
    baseURL: development
      ? "http://localhost:3000/"
      : "https://quizyoth.netlify.app/",
  },
  sitemap: {
    hostname: "https://quizyoth.netlify.app/",
    gzip: true,

    // The implementation, how the routes are obtained is up to you
    routes: [
      "game/general_knowledge",
      "game/sport_and_leisure",
      "game/music",
      "game/geography",
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
