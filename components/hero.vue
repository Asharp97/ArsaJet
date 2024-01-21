<template>
  <div class="hero" :class="{ 'marginbot': mb }">
    <nuxt-img v-if="img" sizes="xs:640px sm:768px md:1024px lg:1280px xl:1536px xxl:1536px 2xl:2560px"
      class="landing-image " :src="`${img}.png`" />
    <div class="video-hero">
      <video v-if="!img" autoplay muted loop class="video-src" src="https://ik.imagekit.io/sharp/arsajet/video.mp4">
      </video>

      <div class="hero-content container">
        <div>
          <div class="p1" v-if="text">ARSAJET ile</div>
          <div class="display">{{ text }}</div>
        </div>
      </div>

      <img src="../assets/WP.svg" class="whatsapp" alt="">


      <Wellcall />


    </div>
  </div>
</template>

<script setup>
defineProps(['text', 'img', 'mb']);
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.marginbot {
  margin-bottom: $sectionGap;
}
</style>




