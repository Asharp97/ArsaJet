<template>
  <div class="hero " :class="{ 'invest': invest }">

    <nuxt-img loading="lazy" v-if="img" :width="width" class="landing-image scale-down " :src="`${img}`" />

    <div class="video-hero">
      <video v-if="video" autoplay muted loop class="video-src scale-down" :src=video>
      </video>


      <swiper v-if="slides" :pagination="{ clickable: true }" :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }" :modules="modules" class="city-slider scale-down">
        <swiper-slide v-for="slide in slides" class="slide">
          <nuxt-img loading="lazy" class="img" :src=slide.img />
          <div class="container">
            <div class="text-bg">
              <div class="p2">LANDCLUB ile</div>
              <h3>{{ slide.title }}</h3>
              <div class="p3m"> {{ slide.text }} </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <div v-if="text" class="hero-content container escape-up exit">
        <div class="text ">
          <!-- elastic-exit -->
          <div class="p1">LANDCLUB ile</div>
          <div class="display" :class="'display' + n" v-for="(t, n) in text">{{ t }}</div> <br>
        </div>
      </div>

      <Wellcall />

    </div>


  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()

const props = defineProps(['text', 'img', 'video', 'slides', 'invest']);

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
const modules = [Pagination, Autoplay]

</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
@import '../assets/style/animations.scss';

.invest {
  .landing-image {
    object-position: -90px;
    filter: brightness(1);
  }

  .hero-content {
    color: $darkGray !important;
    justify-content: flex-end;

    .text {
      max-width: 600px;
    }

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



