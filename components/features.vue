<template>
  <div class="container" id="container" ref="el">
    <div class="mpi">
      <div class="features white-bg">
        <div class="p1 gray">Tüm özelliklerini öğrenin</div>
        <h1>Arazi ile İlgili Ayrıntılı Bilgiler</h1>
        <div class="p3sb">
          <span class="darkGray"> Yatırım yapmak istediğiniz arsa için depozito göndermeniz ve yaşadığınız ülkenin </span>
          büyük elçiliğinden satış için gerekli evrakları hazırlamanız gerekmektedir.
          <span class="darkGray"> Yatırım yapmak istediğiniz arsa için depozito göndermeniz ve yaşadığınız ülkenin büyük
          </span>
          elçiliğinden satış için gerekli evrakları hazırlamanız gerekmektedir.
        </div>
        <nuxt-img sizes="xs:640px sm:768px md:1024px lg:1271px" class="smallScreenHide features-img" src="features.png" />
        <Swiper @swiper="onSwiper" :loopedSlides="4" :centeredSlides="true" :slideToClickedSlide="true" :slidesPerView="9"
          class="swiper" :loop="true" :breakpoints="{
            '0': {
              slidesPerView: 1,
              loop: false
            },
            '350': {
              slidesPerView: 3,
              loop: false
            },
            '640': {
              slidesPerView: 5,
              loop: false
            },
            '700': {
              slidesPerView: 7,
              loop: false
            },
            '1300': {
              slidesPerView: 9,
              loop: false
            },
          }">
          <SwiperSlide @click="activePagination = q" v-for="(x, n, q) in data" class="slide" :key="q">
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
          <SwiperSlide @click="activePagination = q" v-for="(x, n, q) in data" class="slide" :key="q">
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

        <!-- <div class="pagination ">
          <div class="dots" v-for="(pag, n) in 9" @click="paginationHanlde(n)"
            :class="{ 'active-pagination': n == activePagination }">
          </div>
        </div> -->

      </div>
    </div>
  </div>
</template>

<script setup>
let swiperInstance = ref()
function onSwiper(swiper) {
  swiperInstance.value = swiper
}

let activePagination = ref(0)

const paginationHanlde = (x) => {
  swiperInstance.value.slideTo(x)
  activePagination.value = x
}

defineProps(['data'])
import content from "../assets/content.json"
const sliders = content.sliders
</script>

<style lang="scss" scoped></style>
