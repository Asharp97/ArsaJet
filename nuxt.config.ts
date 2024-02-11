export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "nuxt-swiper",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/supabase",
    "nuxt-quasar-ui",
    "@vueuse/nuxt",
    // "@ant-design-vue/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  build: {
    transpile: ["pinia-plugin-persistedstate"],
  },
  supabase: {
    redirect: false,
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
      },
    },
  },
  imports: {
    dirs: ["utils"],
  },
});
