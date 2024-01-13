<template>
  <div class="swiper-container container">
    <div class="swiper-wrapper">
      <!-- Your slides go here -->
      <div class="swiper-slide" v-for="(item, index) in 18" :key="index">
        {{ item }}
      </div>
    </div>

    <!-- Add pagination -->
    <div class="swiper-pagination"></div>

    <!-- Navigation buttons -->
    <div class="swiper-button-next" @click="next()">
      next
    </div>
    <div class="swiper-button-prev" @click="prev()">
      prev
    </div>
  </div>
</template>

<script setup>
import Swiper from 'swiper';
let swiper;
onMounted(() => {
  initSwiper();
});

const next = () => {
  swiper.slideNext()
}
const prev = () => {
  swiper.slidePrev()
}

const initSwiper = () => {
  swiper = new Swiper('.swiper-container', {
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      '0': {
        slidesPerView: 1,
      },
      '350': {
        slidesPerView: 3,
      },
      '640': {
        slidesPerView: 5,
      },
      '700': {
        slidesPerView: 7,
      },
      '1300': {
        slidesPerView: 9,
      },
    },
  });
};
</script>

<style lang="scss" scoped>
.swiper-container {
  margin-top: 250px;
}

.swiper-slide-active {
  color: orange;
}
</style>
