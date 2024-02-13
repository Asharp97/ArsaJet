<template>
  <div class="home">
    <section>
      <hero :text="['Değerini', 'Kaybetmeyen', 'Yatırım: Toprak!']"
        video="https://ik.imagekit.io/sharp/arsajet/video.mp4?tr=f-webm" />
    </section>

    <div class="gap">
      <section class="scale-up enter">
        <div class="bg-feature-future round-up">
          <div class="feature-future container mpi">
            <div class="feature">
              <div class="card" v-for=" item  in  feature ">
                <div class="title">
                  <Icon :name="item.icon" class="icons" />
                  <h5>{{ item.title }}</h5>
                </div>
                <div class="p4">{{ item.text }}</div>
              </div>
            </div>

            <div class="future ">
              <div class="p1">LANDCLUB ile</div>
              <h1 class="elastic-enter">Ne Döviz, Ne Altın,
                <br /> Ne Borsa <br />
                Gelecekte En Kârlı Yatırım Arsa!
              </h1>
              <Btn2 class="button">
                <div class="p1">
                  Detaylı Bilgi Alın
                  <Icon name="material-symbols:chevron-right-rounded" class="icon" />
                </div>
              </Btn2>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div class="why-recomended m-container">
          <div class="p1">
            LANDCLUB olarak
          </div>
          <h1 class="typing">
            <div class="blink">
              Neden Arazi Yatırımı Tavsiye Ediyoruz?
            </div>
          </h1>
          <div class="p1 invert-green">SON 5 YIL İÇİNDE</div>
          <nuxt-img class="img float" src="695.png" />

        </div>
      </section>

      <section>
        <div class="increase-slide-bg from-below-blur enter-middle">
          <div class="increase-slide m-container">
            <div v-for="( inc, n ) in   increase" :class="{ 'final': n == increase.length - 1 }">
              <h3 v-if="n != increase.length - 1">
                {{ 2019 + n }}
              </h3>
              <h3 v-else>
                Şu an
              </h3>
              <div class="p2">
                {{ inc }} ₺
              </div>

            </div>
          </div>
        </div>
      </section>

      <section class="container">
        <Threesteps />
      </section>

      <section class="of-hide">
        <div class="container">

          <smooth-img-slide />
          <div class="p1 gray" style="margin-top: 20px;">LANDCLUB ile Yaşam Kalitenizi Arttırın.</div>
        </div>
      </section>

      <section>
        <div class="value-from-land m-container">
          <div class="p1">LANDCLUB yatırımlarınıza yön veriyoruz.</div>
          <h1 class="typing">
            <div class="blink">
              Topraktan Gelen Değerler, Döviz ve Arazi
            </div>
          </h1>
          <AlternativeInvestment />
        </div>
      </section>

      <section>
        <div class="time-value m-container">
          <div class="p1">LANDCLUB olarak kaygılarınızı anlıyoruz. </div>
          <h1>Ne Zaman Değerlenir? Ne kadar Değerlenir? </h1>
          <div class="ro">
            <div class="text">
              <div class="num"> 01 </div>
              <h2>Kaygılarınızı Anlıyoruz.</h2>

              <div class="p3m">Hisseli arazi yatırımlarını önermiyoruz çünkü orta ve uzun vadede diğer hissedarların
                vefatı
                durumunda izale-i şuyu süreciyle karşılaşabilirsiniz, bu da tüm paydaşların maddi ve manevi zarar
                görmesine
                neden olabilir.
              </div>
            </div>
            <div class="text">
              <div class="num"> 02 </div>
              <h2>Ne Zaman Değerlenir?</h2>
              <div class="p3m">
                Türkiye ve dünya genelinde nüfus planlaması her 5/10 yılda bir değişiyor. Arazi her zaman
                sınırlı bir kaynak ve Türkiye'de metrekare arazi miktarı sabit. Nüfus arttıkça, arz-talep dengesi
                değişiyor. Öngörülerimize göre, Türkiye'de arazi fiyatları her 5/10 yılda bir yükselişe geçiyor.</div>
            </div>

          </div>

          <div class="ro">
            <div class="text">
              <div class="num">
                03
              </div>

              <h2>Ne Kadar Değerlenir?</h2>
              <div class="p3m">Aldığımız arazi, doğru yerden ve doğru fiyattan alındığında, orta ve uzun vadede yıllık
                enflasyon, döviz ve altın bazında 1x1 ile 1x3 arasında değişkenlik gösteriyor.
              </div>
            </div>
            <div class="text">
              <div class="num">
                04
              </div>
              <h2>Gelecek Burada!</h2>
              <div class="p3m">Arazi yatırımı, gelecekte değer artışı ve talep artışı potansiyeliyle birlikte gelerek uzun
                vadeli karlılık sağlar. Aynı zamanda, kentsel gelişim, tarım veya endüstriyel projeler gibi çeşitli
                kullanım seçenekleriyle yatırımcılara çeşitlendirme fırsatı sunar.</div>
            </div>

          </div>
        </div>
        <!-- <div class="youtube-videos container">
          <iframe width="364" height="224" src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
          <iframe width="364" height="224" src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
          <iframe width="364" height="224" src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
        </div> -->
      </section>

      <section class="of-hide">
        <SmoothCitySlide />
      </section>

      <section>
        <InvestmentChoice />
      </section>

      <section>
        <div class="city-grid m-container">
          <div class="p1 ">
            Soru işaretlerinizi gidermek için buradayız.
          </div>
          <h1 class="">
            Şehirlerimizdeki Arsa Fiyat Dinamiklerini Sunuyoruz.
          </h1>

          <div class="cells">
            <div v-for="( city, n ) in   cityGrid " class="cell">
              <div class="imgWrapper from-below">
                <h4>{{ city.city }}</h4>
                <nuxt-img class="img " :src="`city/${city.city}.png`" />

              </div>
              <div class="text elastic-enter-gap">
                <div class="p1">Son 5 Yıl</div>
                <div class="p4">2019 - 2023</div>
                <h2>%{{ city.increase }} ARTIŞ</h2>
                <div class="p4">{{ city.city }}</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section class="m-container ">
        <div class="deck">
          <div class="p1 gray">LANDCLUB olarak</div>
          <h1>Yatırım Yaparken Neleri Öneriyoruz?</h1>
          <deck />

          <Btn2 class="button">
            <div class="p1">
              Detaylı Bilgi Alın
              <Icon name="material-symbols:chevron-right-rounded" class="icon" />
            </div>
          </Btn2>
        </div>
      </section>

      <section class="of-hide">
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
                  <!-- <nuxt-img  sizes="375px" class="land-img" src="land-1.png" /> -->
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
      </section>



      <section>
        <div class="ask ">
          <h1 class="mpb">Sıkça sorulan sorular</h1>
          <FaqComponent :faq="faq" class="FaqComponent" />
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()
let ilanlar = ref()
const getPopularIlan = async () => {
  const { data, error } = await supabase
    .from('lands')
    .select()
    .limit(10)
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
const increase = content.increase
const faq = content.faq
const cityGrid = content.cityGrid



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