<template>
  <div class="hero " :class="{ 'marginbot': mb }">
    <nuxt-img v-if="img" sizes="xs:640px sm:768px md:1024px lg:1280px xl:1536px xxl:1536px 2xl:2560px"
      class="landing-image scale-down " :src="`${img}.png`" />
    <div class="video-hero">
      <video v-if="video" autoplay muted loop class="video-src scale-down" :src=video>
      </video>


      <swiper v-if="slides" :pagination="{
        clickable: true,
      }" :loop="true" :autoplay="{
  delay: 5000,
  disableOnInteraction: false,
}" :modules="modules" class="city-slider scale-down">
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



      <div v-if="text" class="hero-content container escape-up exit" :class="{ 'invest': invest }">
        <div class="text">
          <div class="p1">ARSAJET ile</div>
          <div class="display" :class="'display' + n" v-for="(t, n) in text">{{ t }} <br></div>
        </div>
      </div>

      <!-- <img src="../assets/WP.svg" class="whatsapp" alt=""> -->


      <Wellcall />

    </div>


  </div>
</template>

<script setup lang="ts">
const props = defineProps(['text', 'img', 'mb', 'video', 'slides', 'invest']);

// import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
const modules = [Pagination, Autoplay]

</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
@import '../assets/style/animations.scss';

.marginbot {
  margin-bottom: $sectionGap;
}

.invest {
  color: $darkGray !important;
  // color: black !important;

  justify-content: flex-end;

  .text {
    max-width: 600px;
  }

}

.hero-content {
  .text {
    .p1 {
      animation: .5s cover-remove cubic-bezier(0, 0, 0, 1);
    }

    .display {
      animation: .3s cover-remove cubic-bezier(0, 0, 0, 1);
      animation-fill-mode: both;
    }

    .display0 {
      animation-delay: .5s;
    }

    .display1 {
      animation-delay: .6s;
    }

    .display2 {
      animation-delay: .7s;
    }
  }
}
</style>



