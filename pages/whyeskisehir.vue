<template>
  <div class="whyeskisehir">

    <section>
      <hero :slides="eskisehirHero" />
    </section>
    <div class="gap">
      <section>
        <div class="bg-feature-future">
          <div class="feature-future m-container mpi">

            <div class="text">
              <div class="p1">LandClub ile</div>
              <h1>Eskişehir’i Keşfedin</h1>
              <div class="p3m">
                Lorem ipsum dolor sit amet consectetur. Sed commodo arcu pulvinar quisque tempor vel massa
                nulla. Eget justo quam sit proin in viverra tincidunt.Lorem ipsum dolor sit amet consectetur. Sed commodo
                arcu pulvinar quisque tempor vel massa nulla. Eget justo quam sit proin in viverra tincidunt.</div>
            </div>

            <div class="future">
              <div class="p1">LANDCLUB ile</div>
              <h1>Ne Döviz, Ne Altın,
                <br /> Ne Borsa <br />
                Gelecekte En Kârlı Yatırım Arsa!
              </h1>
              <Btn2 class="button">
                <div class="p1">
                  <span> Detaylı Bilgi Alın </span>
                  <Icon name="material-symbols:chevron-right-rounded" class="icon" />
                </div>
              </Btn2>
            </div>
          </div>
        </div>
      </section>


      <section class="minerals m-container">
        <div class="p1">Şehrin öne çıkanları</div>
        <h1>Neden Eskişehir’i öneriyoruz</h1>

        <Reasons />

      </section>

      <section>
        <SmoothImgSlide />
        <div class=" m-container" style="margin-top: 52px;">
          <div class="p1 gray">LANDCLUB ile Eskişehir Yatırım Fırsatı</div>
        </div>
      </section>

      <section>
        <div class="graph-increase m-container">
          <div class="p1 gray">Türkiye’de arsa yatırımı</div>
          <h1>Arsa Değerlerinde <span class="orange"> %1146 </span> Artış</h1>
          <div class="text-graph">
            <div class="p3m">
              Son 4 yılda Türkiye genelinde arsa ve tarla fiyatları <b> %1146 </b>seviyesinde önemli bir artış gösterdi.
              Her
              yıl en
              az <b> %286'lık</b> bir yükseliş yaşandı. Bu istatistikler, Türkiye'nin gayrimenkul sektöründe önemli bir
              büyüme
              yaşadığını gösteriyor. Artan talep, arsa fiyatlarını olumlu yönde etkilemesiyle yatırımcılara kârlı
              getiriler
              sunmaktadır. Ayrıca, arazi sahibi olmak uzun vadeli bir yatırım stratejisi sunarak gelecekteki planlarınızı
              gerçekleştirmeniz için size özgü bir mülkiyet avantajı sağlamaktadır.
              <br>
              <br>
              Türkiye'deki arsa yatırımları, değer artışı potansiyeli ve ekonomik getiriler açısından güçlü bir yatırım
              fırsatı sunmaktadır.
            </div>
            <div class="graph">
              <div class="chart" v-for="(x, n) in graph">
                <div class="line" :class="'bg' + n" :style="{ height: x.height + 'px' }">
                  <div class="p3m"> {{ x.value }} ₺ </div>
                </div>
                <div class="p4"> {{ n + 2018 }} </div>
              </div>

              <div class="change-per-year">
                <button>
                  <div class="p4"> Minimum 1 Senelik Değişim
                    <span>
                      <Icon name="ph:caret-down-light" class="icon" />
                    </span>
                  </div>
                  <q-menu fit transition-show="jump-down" transition-hide="jump-up">
                    <q-list>
                      <q-item clickable v-close-popup>
                        Minimum 1 Senelik Değişim
                      </q-item>
                      <q-item clickable v-close-popup>
                        Minimum 5 Senelik Değişim
                      </q-item>
                    </q-list>
                  </q-menu>
                </button>
                <h1>%286,5</h1>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section>
        <SmoothCitySlide />
      </section>

      <section>
        <div class="honorable-mentions container">
          <div class="white-bg container">
            <div class="content">
              <div class="faqwrapper">
                <faqComponent :faq="faq" class="Faqcontainer" @toggle="toggle" />
              </div>
              <div class="listed-images mobile-hide">
                <span id="scroll1" class="scrolled">
                  <nuxt-img sizes="200px" class="img" v-for="n in 7" :src='`listed-imgs/${n}.jfif`' />
                </span>
                <span id="scroll2">
                  <nuxt-img sizes="200px" class="img" v-for="n in 7" :src='`listed-imgs/${n}.jfif`' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="price-index m-container">
          <div class="p1 gray">Türkiye’de arsa yatırımı</div>
          <h1>Metrekare Başına Arsa Fiyat Endeksi</h1>
          <div class="p3m">Metrekare başına arsa fiyat endeksi, her sene artış gösteren bu özel araziyi yatırımcılar için
            vazgeçilmez kılıyor. Bu dinamik endeks, yatırımınızın gelecekteki getirisini garanti altına alıyor.</div>
          <div class="text-graph">
            <div class="graph">
              <div class="chart" v-for="(x, n) in graph2">
                <div class="p4"> {{ n + 2019 }} </div>
                <div class="line" :class="'bg' + n" :style="{ width: x.height + 'px' }">
                  <div class="p3m"> {{ x.value }} ₺ </div>
                </div>
              </div>
            </div>
            <div class="text">
              <div class="change-per-year">
                <button>
                  <div class="p4">
                    Minimum 1 Senelik Değişim
                    <span>
                      <Icon name="ph:caret-down-light" class="icon" />
                    </span>
                  </div>
                  <q-menu fit transition-show="jump-down" transition-hide="jump-up">
                    <q-list>
                      <q-item clickable v-close-popup>
                        Minimum 1 Senelik Değişim
                      </q-item>
                      <q-item clickable v-close-popup>
                        Minimum 1 Senelik Değişim
                      </q-item>
                      <q-item clickable v-close-popup>
                        Minimum 1 Senelik Değişim
                      </q-item>
                      <q-item clickable v-close-popup>
                        Minimum 1 Senelik Değişim
                      </q-item>
                    </q-list>
                  </q-menu>
                </button>
                <h1>%286,5</h1>
              </div>
              <div class="p3m">
                Son 4 yılda Türkiye genelinde arsa ve tarla fiyatları %1146 seviyesinde önemli bir artış gösterdi. Her yıl
                en az %286'lık bir yükseliş yaşandı. Bu istatistikler, Türkiye'nin gayrimenkul sektöründe önemli bir
                büyüme yaşadığını gösteriyor. Artan talep, arsa fiyatlarını olumlu yönde etkilemesiyle yatırımcılara kârlı
                getiriler sunmaktadır.
              </div>
            </div>
          </div>
        </div>

      </section>
      <section>
        <!-- <div class="youtube-videos container">
          <iframe width="364" height="224" src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
          <iframe width="364" height="224" src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
          <iframe width="364" height="224" src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
        </div> -->
      </section>
    </div>
  </div>
</template>

<script setup>
import content from "../assets/content.json"
const eskisehirHero = content.eskisehirHero
const graph = content.graph
const graph2 = content.graph2
const faq = content.honorableMentions

let switcher = false

const toggle = () => {
  const scroll1 = document.getElementById('scroll1')
  const scroll2 = document.getElementById('scroll2')
  switcher = !switcher
  if (switcher) {
    scroll1.classList.remove('scrolled')
    scroll2.classList.add('scrolled')
  } else {
    scroll1.classList.add('scrolled')
    scroll2.classList.remove('scrolled')
  }
}

</script>

<style lang="scss" scoped></style>