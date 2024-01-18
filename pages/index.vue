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
        <div class="increase-slide">
          <div v-for="(inc, n) in  increase " :class="{ 'final': n == increase.length - 1 }">
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
      </section>

      <section class="container">
        <div class="threesteps">
          <nuxt-img class="img" src="3adim.png" />
          <div class="text">
            <h1>
              3 Adımda ARSAJET ile Yatırımınızı Gerçekleştirin
            </h1>
            <ol>
              <li>
                <div class="p3sb">
                  İletişim formumuzu doldurmanız zoom toplantısı planlayıp sizleri daha yakından tanımamız için yeterli
                  olacaktır.
                </div>
              </li>
              <li>
                <div class="p3sb">Yatırım yapmak istediğiniz arsa için depozito göndermeniz ve yaşadığınız ülkenin büyük
                  elçiliğinden satış için gerekli evrakları hazırlamanız gerekmektedir. </div>
              </li>
              <li>
                <div class="p3sb">
                  Tapu dairesinde işlemler sonrası tapunuzu sizlere teslim edeceğiz. Arazi yatırımı yapmak işte bu kadar
                  kolay! Şimdi form doldurun!</div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        <div class="smooth-img-slide">
          <nuxt-img class="img" src="dog.png" v-for="n in 12" />
        </div>
      </section>

      <section>
        <div class="value-from-land small-container">
          <div class="p1">ARSAJET yatırımlarınıza yön veriyoruz.</div>
          <h1>Topraktan Gelen Değerler, Döviz ve Arazi </h1>
          <swiper class="mySwiper">
            <swiper-slide class="slide">
              <nuxt-img class="img" src="gold.png" />
              <div class="text">
                <h2>Altın mı Arazi mi?</h2>
                <div class="p3m">Altın doğrudan topraktan çıkan bir madendir. Topraktan çıkan bu değerli maden yatırım
                  araçlarından biridir. Ama uzun vadede, tarım arazilerine yapılan yatırımların, uzun vadede daha fazla
                  kazanç potansiyeli sunabilir.</div>
                <div class="p3sb">Son 5 yıldaki değişiklikler</div>
                <table>
                  <thead>
                    <tr>
                      <th v-for="n in 6">
                        <h4 v-if="n < 6">{{ 2018 + n }}</h4>
                        <h4 v-else>Şu an</h4>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td v-for="n in gold">
                        <div class="p1">
                          {{ n }} ₺
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </swiper-slide>
          </swiper>
          <div class="pagination">
            <div class="dots" v-for="(pag, n) in  5" :class="{ 'active-pagination': n == 1 }">
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="time-value small-container">
          <div class="p1">ARSAJET olarak kaygılarınızı anlıyoruz. </div>
          <h1>Ne Zaman Değerlenir? Ne kadar Değerlenir? </h1>
          <div class="ro">
            <div class="text">
              <div class="num">
                01
              </div>

              <h2>Kaygılarınızı Anlıyoruz.</h2>
              <div class="p3m">Hisseli arazi yatırımlarını önermiyoruz çünkü orta ve uzun vadede diğer hissedarların
                vefatı
                durumunda izale-i şuyu süreciyle karşılaşabilirsiniz, bu da tüm paydaşların maddi ve manevi zarar
                görmesine
                neden olabilir.
              </div>
            </div>
            <div class="text">
              <div class="num">
                02
              </div>
              <h2>Ne Zaman Değerlenir?</h2>
              <div class="p3m">Türkiye ve dünya genelinde nüfus planlaması her 5/10 yılda bir değişiyor. Arazi her zaman
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
      </section>

      <section>
        <div class="youtube-videos container">
          <iframe width="364" height="224" src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
          <iframe width="364" height="224" src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
          <iframe width="364" height="224" src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
        </div>
      </section>

      <section>
        <div class="smooth-city-slide">
          <div v-for="x in 2">
            <div class="city" v-for="n in city">
              <h3> •</h3>
              <h3>{{ n }}</h3>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="investment-choice small-container">
          <div class="p1">
            Tüm arazilerimiz 5.000 € ile 20.000 € arasında değişmektedir.
          </div>

          <swiper class="mySwiper">
            <swiper-slide class="slide">
              <h1>Min. 160.000 Maks. 640.000 ₺’ye <br> Geleceğe Yatırım Yapabilirsiniz. Ya da İsterseniz...</h1>
              <nuxt-img class="img" src="clio.png" />
              <div class="text">
                <h2>
                  <span> 212.000 ₺ </span>
                  ekstra ekleyip ortalama bir hatchback araca sahip olabilirsiniz...
                </h2>
                <div class="p3m">
                  Ayrıca aldığınız araç ile yatırım yaparken aracınızın sigorta, kasko, vergi, yakıt, bakımları, değer
                  kayıplarını da unutmayınız.
                </div>
              </div>
            </swiper-slide>
          </swiper>

          <div class="pagination">
            <div class="dots" v-for="(pag, n) in  5" :class="{ 'active-pagination': n == 1 }"> </div>
          </div>

        </div>
      </section>

      <section>
        <div class="city-grid">
          
        </div>
      </section>

      <section>
        <div class="decks big-container">
          <div class="deck">
            <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="cards">
              <swiper-slide class="card" v-for="card in cards1">
                <Icon :name="`${card.icon}`" class="icon" />
                <div class="p1">{{ card.title }}</div>
                <div class="p2">{{ card.details }}</div>
              </swiper-slide>
            </swiper>
            <div class="p2 subtitle">
              Arazi yatırımı, uzun vadeli bir yatırım stratejisi olarak dikkat çekiyor. Doğru seçilen bir arazi, <b>
                gelecekte değer kazanabilir ve farklı kullanım amaçlarına hizmet edebilir.</b>
            </div>
          </div>
          <div class="deck">
            <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="cards">
              <swiper-slide class="card card2" v-for="card in cards2">
                <Icon :name="`${card.icon}`" class="icon" />
                <div class="p1">{{ card.title }}</div>
                <div class="p2">{{ card.details }}</div>
              </swiper-slide>
            </swiper>
            <div class="p1 subtitle">
              Ancak, başarılı bir arazi yatırımı <b> için dikkatli bir araştırma, bütçe planlaması ve yerel yasal
                düzenlemelere uyum önemlidir.
              </b>
            </div>
          </div>


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
          }
            " :freeMode="true" :navigation="true" :modules="moduleLand" :scrollbar="{ hide: true }" class="swiper mpi">
            <swiper-slide v-for="( x, n ) in  ilanlar " class="landSlider">
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

import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
const modules = [EffectCards]

import content from "../assets/content.json"
const cards1 = content.cards1
const cards2 = content.cards2

const feature = content.features
const increase = content.increase
const gold = content.gold
const city = content.cityslider
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