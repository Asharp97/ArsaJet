<template>
  <div class="m-container" id="container" ref="el">
    <div>
      <div class="features white-bg">
        <div class="p1 gray">Tüm özelliklerini öğrenin</div>
        <h1 class="cover-remove">Arazi ile İlgili Ayrıntılı Bilgiler</h1>
        <div class="p3sb">
          <span class="darkGray"> Yatırım yapmak istediğiniz arsa için depozito göndermeniz ve yaşadığınız ülkenin </span>
          büyük elçiliğinden satış için gerekli evrakları hazırlamanız gerekmektedir.
          <span class="darkGray"> Yatırım yapmak istediğiniz arsa için depozito göndermeniz ve yaşadığınız ülkenin büyük
          </span>
          elçiliğinden satış için gerekli evrakları hazırlamanız gerekmektedir.
        </div>
        <nuxt-img loading="lazy" sizes="xs:640px sm:768px md:1024px lg:1271px" class="smallScreenHide features-img"
          src="features.png" />
        <Swiper @swiper="onSwiper" :loopedSlides="4" :centeredSlides="true" :slideToClickedSlide="true" :slidesPerView="9"
          class="swiper" :loop="true" :breakpoints="{
            '0': { slidesPerView: 1, },
            '350': { slidesPerView: 3, },
            '640': { slidesPerView: 5, },
            '700': { slidesPerView: 7, },
            '1300': { slidesPerView: 9, }
          }">
          <SwiperSlide v-for="(x, n, q) in data" class="slide" :key="q">
            <div class="frame">
              <div class="background">
                <Icon :name="sliders[q].icon" class="icon" />
              </div>
            </div>
            <div class="feature-details">
              <div class="p1"> {{ sliders[q].param }} </div>
              <hr>
              <h2> {{ x }} KM</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide v-for="(x, n, q) in data" class="slide" :key="q">
            <div class="frame">
              <div class="background">
                <Icon :name="sliders[q].icon" class="icon" />
              </div>
            </div>
            <div class="feature-details">
              <div class="p1"> {{ sliders[q].param }} </div>
              <hr>
              <h2> {{ x }} KM</h2>
            </div>
          </SwiperSlide>
          <!-- <SwiperControls /> -->
        </Swiper>

      </div>
    </div>
  </div>
</template>

<script setup>
let swiperInstance = ref()
function onSwiper(swiper) {
  swiperInstance.value = swiper
}

defineProps(['data'])
import content from "../assets/content.json"
const sliders = content.sliders
</script>

<style lang="scss" scoped></style>
