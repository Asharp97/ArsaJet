<template>
  <div class="popular-ilanlar container" id="container">
    <div class="top mpi">
      <div class="header">
        <div class="title">
          <h1>Popüler İlanlar</h1>
          <NuxtLink to="listings">
            <div class="p1">
              İlanlara git
              <Icon name="material-symbols:play-circle" />
            </div>
          </NuxtLink>
        </div>
        <div class="sub-title">
          <div class="p1">En çok ilgi gören ilanları öğrenin. <br /> </div>
          <div class="p1">Popüler arazilere göz atın.</div>
        </div>
      </div>
    </div>
    <swiper :slidesPerView="3" :breakpoints="{
      '0': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '640': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
      " :freeMode="true" :navigation="true" :modules="moduleLand" :scrollbar="{ hide: true }" class="swiper mpi">
      <swiper-slide v-for="(   x, n   ) in    ilanlar   " class="landSlider">
        <NuxtLink class="landWrapper" :to="`listings/${x.id}`">
          <div class="land">
            <!-- <nuxt-img loading="lazy"  sizes="375px" class="land-img" src="land-1.png" /> -->
            <img :src="x.imgURL[0]" class="land-img" alt="">
            <div class="text">
              <div class="p1"> EKS Land ile Eskişehir’den Yatırımlık Arsa </div>
              <div class="measurement">
                <Icon class="icon" name="arcticons:tapemeasure" />
                <div class="p2">
                  {{ x.squareMeters }}m&sup2;
                  <!-- 345 m -->
                </div>
              </div>
              <div class="buttons">
                <button class="price">
                  <div class="p1"> {{ x.landPrice }} € </div>
                </button>
                <button class="seeDetail">
                  <div class="p2"> Detayları Gör </div>
                </button>
              </div>
            </div>
          </div>
        </NuxtLink>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
onMounted(() => {
  getPopularIlan()
})
import advert from '@/assets/dummy-lands.json'

const supabase = useSupabaseClient()
let ilanlar = ref()
const getPopularIlan = async () => {
  // const { data, error } = await supabase
  //   .from('lands')
  //   .select()
  //   .limit(10)
  // if (data)
    ilanlar.value = advert.splice(0, 5)
}

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Scrollbar, Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
const moduleLand = [Scrollbar, Navigation, FreeMode]
</script>

<style lang="scss" scoped></style>