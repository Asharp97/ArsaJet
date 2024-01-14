<template>
  <div class="home">
    <section>
      <div class="video-hero">
        <video autoplay muted loop class="video-src" src="https://ik.imagekit.io/sharp/arsajet/video.mp4">
        </video>

        <div class="hero-content container">
          <div>
            <div class="p1">ARSAJET ile</div>
            <div class="display">Değerini Kaybetmeyen Yatırım: Toprak!</div>
          </div>
        </div>

        <button @click="openWellCall()">
          <div class="wellcall"> Sizi Arayalım </div>
        </button>

        <div class="callyou-form" @click.self="openWellCall()" v-if="wellcall">
          <div class="form-bg">
            <FormComponent title="Hemen Bize Ulaşın" subtitle="Ücretsiz bilgi edinin." />
          </div>
        </div>
      </div>
    </section>

    <div class="gap">
      <section>
        <div class="bg-feature-future">
          <div class="feature-future container mpi">

            <div class="feature">
              <div class="card" v-for="item in feature">
                <div class="title">
                  <Icon :name="item.icon" class="icons" />
                  <h5>{{ item.title }}</h5>
                </div>
                <div class="p4">{{ item.text }}</div>
              </div>
            </div>

            <div class="future">
              <div class="p1">ARSAJET ile</div>
              <h1>Ne Döviz, Ne Altın, Ne Borsa
                Gelecekte En Kârlı Yatırım Arsa!</h1>
              <Btn2> Detaylı Bilgi Alın
                <Icon name="material-symbols:chevron-right-rounded" class="icon" />
              </Btn2>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div class="why-recomended">
          <div class="p1">
            ARSAJET olarak
          </div>
          <h1>Neden Arazi Yatırımı Tavsiye Ediyoruz?</h1>
          <div class="p1 invert-green">SON 5 YIL İÇİNDE</div>
          <nuxt-img class="img" src="695.png" />

        </div>
      </section>

      <section>
        <div class="`why-recomended`">
          <div class="p1">
            ARSAJET olarak
          </div>
          <h1>Neden Arazi Yatırımı Tavsiye Ediyoruz?</h1>
          <div class="p1 invert-green">SON 5 YIL İÇİNDE</div>
          <nuxt-img class="img" src="695.png" />

        </div>
      </section>

      <section>
        <div class="popular-ads container" id="container">
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
          }" :freeMode="true" :navigation="true" :modules="moduleLand" :scrollbar="{ hide: true }" class="swiper mpi">
            <swiper-slide v-for="(x, n) in ilanlar" class="landSlider">
              <NuxtLink class="landWrapper" :to="`listings/${x.id}`">
                <div class="land">
                  <!-- <nuxt-img sizes="375px" class="land-img" src="land-1.png" /> -->
                  <img :src="x.imgURL[0]" class="land-img" alt="">
                  <div class="text">
                    <div class="t2"> EKS Land ile Eskişehir’den Yatırımlık Arsa </div>
                    <div class="measurement">
                      <Icon class="icon" name="arcticons:tapemeasure" />
                      <div class="p2">
                        {{ x.squareMeters }}m&sup2;
                        <!-- 345 m -->
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="price">
                        <div class="t1"> 10.000 € </div>
                      </button>
                      <button class="seeDetail">
                        <div class="t2"> Detayları Gör </div>
                      </button>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </swiper-slide>
          </swiper>
        </div>
      </section>

      <section class="container">
        <TapuSteps />
      </section>

      <section class="white-bg ">
        <div class="table container mpi">
          <h1>Son <span>5</span> Senede</h1>
          <h4> Türkiye </h4>
          <h1>Yatırım araçlarındaki değişiklikler</h1>
          <table>
            <thead>
              <tr>
                <th v-for="(header, n) in table.header" :class="[{ 'green': n == 6 }, { 'mobile-hide': n == 1 }]">{{
                  header }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, r) in  table.body ">
                <td v-for="(data, n) in  row " :class="[{ 'green': n == 6 }, { 'mobile-hide': n == 1 }]">
                  <span class="icon-wrapper" :class="[{ 'gold': r == 2 }, { 'blue': r == 4 }, { 'darkGreen': r == 3 }]">
                    <Icon :name="data.icon" class="icon" v-if="data.icon" :class="{ 'gold': n == 2 }" />
                  </span>
                  <span :class="{ 'mobile-hide': n == 0 }">
                    {{ data.name }}
                  </span>
                  <span class="currency" :class="{ 'hide': n == 0 }">
                    ₺
                  </span>
                  <div v-if="n == 6 && r == 1" class="orange t2">(%695.62 ARTIŞ)</div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="p2">Arazi verileri
            <NuxtLink to="https://www.endeksa.com/tr/analiz/turkiye/eskisehir/endeks/satilik/arsa" class="link">
              <span>
                Endeksa’dan
              </span>
            </NuxtLink>
            alınmıştır.
          </div>
        </div>
      </section>

      <section>
        <div class="why-Eskisehir big-container">
          <div class="text">
            <h2>Dolar Euro Altın Borsa</h2>
            <h4> EKSLAND ile </h4>
            <div class="display"> Geleceğin Yatırımı Arsa </div>
          </div>
          <nuxt-img sizes="xs:640px sm:768px md:1024px lg:1271px" class="why-image mpi" src="whyeskisehir.png" />
        </div>
      </section>

      <section class="ask container">
        <h1 class="mpb">Sıkça sorulan sorular</h1>
        <FaqComponent :faq="faq" class="FaqComponent" />
      </section>

    </div>
  </div>
</template>

<script setup>
let wellcall = ref(false);
const openWellCall = () => {
  wellcall.value = !wellcall.value
}

const supabase = useSupabaseClient()
let ilanlar = ref()
const getPopularIlan = async () => {
  const { data, error } = await supabase
    .from('lands')
    .select()
  if (data)
    ilanlar.value = data
}

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Scrollbar, Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
const moduleLand = [Scrollbar, Navigation, FreeMode]

import content from "../assets/content.json"
const feature = content.features
const invests = content.invests
const faq = content.faq
const table = content.table

let count = ref(3)

import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()

onMounted(() => {
  getCount(width.value)
  getPopularIlan()
})


watch(
  () => width.value,
  () => {
    getCount(width.value)
  }
)

const getCount = (x) => {
  if (x > 450)
    count.value = x / 450
  else
    count.value = x / 400
}


</script>



<style lang="scss" scoped>
.gold {
  color: gold !important;
}

.darkGreen {
  color: #599E2F;
}

.blue {
  color: #0A2CE1;
}
</style> 