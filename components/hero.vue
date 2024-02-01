<template>
  <div class="hero" :class="{ 'marginbot': mb }">
    <nuxt-img v-if="img" sizes="xs:640px sm:768px md:1024px lg:1280px xl:1536px xxl:1536px 2xl:2560px"
      class="landing-image " :src="`${img}.png`" />
    <div class="video-hero">
      <video v-if="video" autoplay muted loop class="video-src" :src=video>
      </video>


      <swiper v-if="slides" :pagination="{
        clickable: true,
      }" :autoplay="{
  delay: 2000,
  disableOnInteraction: false,
}" :loop="true" :modules="modules" class="city-slider">
        <swiper-slide v-for="slide in slides" class="slide">
          <nuxt-img class="img" :src=slide.img />
          <div class="container">
            <div class="text-bg">
              <div class="p2">ARSAJET ile</div>
              <h3>{{ slide.title }}</h3>
              <div class="p3m"> {{ slide.text }} </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>



      <div v-if="text" class="hero-content container" :class="{ 'invest': invest }">
        <div class="text">
          <div class="p1">ARSAJET ile</div>
          <div class="display">{{ text }}</div>
        </div>
      </div>

      <!-- <img src="../assets/WP.svg" class="whatsapp" alt=""> -->


      <Wellcall />


    </div>


  </div>
</template>

<script setup>
defineProps(['text', 'img', 'mb', 'video', 'slides', 'invest']);

// import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
const modules = [Pagination, Autoplay]

</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.marginbot {
  margin-bottom: $sectionGap;
}

.invest {
  color: black !important;
  justify-content: flex-end;

  .text {
    max-width: 600px;
  }

}
</style>




