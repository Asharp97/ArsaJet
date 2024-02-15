<template>
  <div>
    <!-- {{ land.imgURL }} -->
    <div class="listing-details gap ">
      <section>
        <div class="white-bg">
          <div class="container">
            <div class="p1 gray">İlan detaylarını öğrenin </div>
            <h1>LandClub Güvencesiyle Yatırım Gerçekleştirin</h1>
            <div class="details">

              <div class="imgDiv">
                <!-- <nuxt-img loading="lazy"  sizes="xs:640px sm:768px md:784px lg:877px" class="img" src="listing-img.png" /> -->
                <img :src="land.imgURL[0]" alt="" class="img">
              </div>
              <div class="textDiv mpi">
                <div class="params">
                  <div class="title" v-for="(x, n, q) in section1">
                    <div class="p1"> {#} {{ params[q] }}: </div>
                    <div class="param">
                      <div class="p1">
                        &nbsp;{{ x }}
                        <span class="measure" v-if="q == 2"> m&sup2; </span>
                        <span class="measure" v-if="q == 3"> € </span>
                      </div>
                    </div>
                  </div>
                </div>
                <btn2 class="button" :green="true" :destination="`listings/${id}/#fillform`">
                  <div class="p1">Arazi fiyatı: {{ land.landPrice }}.00 €</div>
                </btn2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="closer-look mpi sm-container">
          <div class="p1 gray">Metrekare detaylarını öğrenin</div>
          <h1>Arazinin Metrekare Detayları</h1>
          <swiper :navigation="true" :loop="true" class="swiper noNav" @slideNextTransitionStart="nextEnd"
            :spaceBetween="30" @slidePrevTransitionStart="prevEnd">
            <swiper-slide v-for="n in land.imgURL" class="slide">
              <!-- <nuxt-img loading="lazy"  sizes="xs:640px sm:768px md:1024px lg:1271px" class="img" src="closer-look.png" /> -->
              <img :src="n" class="img" alt="">
            </swiper-slide>
          </swiper>
          <div class="pagination">
            <div class="dots" v-for="(pag, n) in  land.imgURL.length" :class="{ 'active-pagination': n == activePag }">
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <features :data="section2" />
        </div>
      </section>

      <section class="land-gallery m-container">
        <div class="p1 gray">Fotoğraflar</div>
        <h1>Arazi Galerisi</h1>
        <div class="gallery">
          <div class="imgWrapper" v-for="(img, n) in land.imgURL" @click="showImage(n)">
            <img :src="img" alt="" class="img">
            <Icon name="ic:baseline-zoom-in" class="icon" />
          </div>
        </div>

        <div class="buttons">

          <btn2 class="button" :green="true" :destination="`listings/${id}/#fillform`">
            <div class="p1">Arazi fiyatı: {{ land.landPrice }}.00 €</div>
          </btn2>
          <Btn2>
            <div class="p1"> Detaylı Bilgi Alın
              <span>
                <Icon name="material-symbols:chevron-right-rounded" class="icon" />
              </span>
            </div>
          </Btn2>
        </div>
        <!-- 
        <div  v-if="imgShow">
          <img :src="land.imgURL[imageIndex]" alt="">
        </div> -->

        <q-dialog v-model="imgShow" :maximized="true" class="dialog">
          <img :src="land.imgURL[imageIndex]" class="m-container" alt="">
        </q-dialog>

      </section>

      <section class="white-bg">
        <metrekare />
      </section>

      <section class="m-container">
        <div class="p1 gray">LANDCLUB olarak</div>
        <h1>Yatırım Yaparken Neleri Öneriyoruz?</h1>
        <deck />
      </section>
    </div>
  </div>
</template>

<script setup>

const id = useRoute().params.id
const supabase = useSupabaseClient()
const land = ref({ landPrice: '', imgURL: [] })
const section1 = ref()
const section2 = ref()
let img2;
let details = async () => {
  const { data, error } = await supabase
    .from('lands')
    .select()
    .eq('id', id)
  if (data) {
    land.value = data[0]
    section1.value = Object.fromEntries(Object.entries(land.value).slice(3, 10))
    section2.value = Object.fromEntries(Object.entries(land.value).slice(11, 20))
    // if (land.value.imgURL.length > 4)
    img2 = [land.value.imgURL[land.value.imgURL.length - 3], land.value.imgURL[land.value.imgURL.length - 2]]
  }
}

import content from "../../assets/content.json"
const params = content.params

onMounted(() => {
  details()
})

const imgShow = ref(false)
const imageIndex = ref()

const showImage = (n) => {
  imageIndex.value = n
  imgShow.value = true
}


//swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

//patination
const activePag = ref(0)

const nextEnd = () => {
  activePag.value += 1
  if (activePag.value > land.value.imgURL.length - 1)
    activePag.value = 0
}
const prevEnd = () => {
  activePag.value -= 1
  if (activePag.value < 0)
    activePag.value = land.value.imgURL.length - 1
}

definePageMeta({ layout: 'invert-nav-color' })

//content import
const swipedata = content.eskisehirSlide
const lookcloser = content.lookcloser


</script>

<style lang="scss" scoped></style>