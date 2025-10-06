export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-swiper",
    "nuxt-icon",
    "@nuxt/image",
    "nuxt-quasar-ui",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  build: {
    transpile: ["pinia-plugin-persistedstate"],
  },

  css: [
    "@/assets/style/design-system.scss",
    "@/assets/style/style.scss",
    "@/assets/style/variables.scss",
    "@/assets/style/animations.scss",
  ],
  image: {
    provider: "imagekit",
    imagekit: {
      baseURL: "https://ik.imagekit.io/sharp/arsajet/",
      modifiers: {
        format: "webp",
        fit: "cover",
      },
    },
  },
  imports: {
    dirs: ["utils"],
  },
});
