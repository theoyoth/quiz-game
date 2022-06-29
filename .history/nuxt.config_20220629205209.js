let development = process.env.NODE_ENV !== "production";
export default {
  target: "server",
  // Global page headers: https://go.nuxtjs.dev/config-head
  generate: {
    fallback: true,
  },
  head: {
    title: "quizyoth",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "og:image", name: "og:image", content: "/quizyoth.png" },
      { hid: "og:image:alt", name: "og:image:alt", content: "quizyoth logo" },
      {
        hid: "description",
        name: "description",
        content: "I give you quiz's website to practice your knowledge",
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
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: development
      ? "http://localhost:3000/"
      : "https://quizyoth.netlify.app/",
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
