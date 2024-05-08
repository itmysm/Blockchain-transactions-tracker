export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n", "@pinia/nuxt"],
  srcDir: "src",
  i18n: {
    locales: [
      { code: "en", iso: "en_US", file: "en.json" },
      { code: "fa", iso: "fa_IR", file: "fa.json" },
    ],
    defaultLocale: "en",
    langDir: "locales/",
    strategy: "prefix",
    lazy: true,
    customRoutes: "config",
  },
});
