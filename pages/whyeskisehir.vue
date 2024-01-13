<template>
  <div class="whyeskisehir">

    <section>
      <hero img="hero-whyeskisehir" text="Neden Eskişehir’i Tercih Etmeliyim?" />
    </section>
    <div class="gap">
      <section class="white-bg">
        <div class="population container">
          <div class="p1">
            Eskişehir’de öne çıkan başlıklar
          </div>
          <div class="title">
            <div class="display">Eskişehir’de kaliteli nüfus </div>
            <div class="p1">
              İstikrarlı nüfus artış oranı, şehrin büyüme ve gelişme potansiyelinin yüksek olduğunu gösteriyor, aynı
              zamanda
              yatırım fırsatları sunarak şehri daha da zenginleştiriyor.
            </div>


          </div>
          <nuxt-img sizes="xs:640px sm:768px md:1024px lg:1271px" class="img" src="graph2.png" />
          <div class="text">
            <div class="p1">
              Hem eğitim hem de sanayi alanındaki büyüme, şehre olan göçü artırmış ve nüfusu hızla yükseltmiştir. <span>
                Eskişehir,
                üniversiteleri, sanayi tesisleri, kültürel etkinlikleri </span> ve yaşanabilirliğiyle çekici bir şehir
              olarak
              öne
              çıkmaktadır
            </div>
            <div class="p1">
              Bu artan nüfus, şehrin sosyal ve ekonomik dokusunu zenginleştirirken, altyapı projeleri ve
              <span>
                arazi seçenekleri
                gibi alanlarda da yeni yatırım fırsatları yaratmaktadır.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="gray-bg">
        <div class="container minerals">
          <onetwolayout :img1="layout[0].img1" :img2="layout[0].img2" :text="layout[0].text" :title="layout[0].title"
            :titlesub="layout[0].subtitle" :static="true" />
        </div>
        <!-- {{ layout[0][0].title }} -->
      </section>

      <section class="white-bg">
        <div class="young container">

          <div class="p1">Eskişehir’de öne çıkan başlıklar</div>
          <div class="display">Genç Nüfuslu Şehir </div>
          <div class="columns">
            <div class="column">
              <div class="piechart malefemale">
                <div class="man label">
                  49.78% <br>
                  Erkek Nüfus
                </div>
                <div class="woman label">
                  50.22% <br>
                  Kadın Nüfus
                </div>
              </div>
              <div class="p2">Bölgedeki Cinsiyet Dağılımı</div>
              <div class="p1">Eskişehir, genç ve dinamik bir nüfusa ev sahipliği yapmaktadır. Şehir, birçok üniversite ve
                yüksek öğrenim kurumu barındırması nedeniyle gençlerin yoğun olarak bulunduğu bir yerdir. Eskişehir,
                öğrenci
                nüfusu, genç girişimciler ve profesyoneller için cazip bir yaşam ve kariyer merkezi olma özelliğine
                sahiptir.
              </div>
            </div>
            <div class="column">
              <div class="piechart age">
                <div class="label mid">
                  64,07% <br>
                  15-59 yaş aralığı
                </div>
                <div class="label max">
                  18,57% <br>
                  60-90 yaş aralığı
                </div>
                <div class="label min">
                  17,36% <br>
                  0-14 yaş aralığı
                </div>
              </div>
              <div class="p2">Bölgedeki Cinsiyet Dağılımı</div>
              <div class="p1"> Bu dinamik nüfus, kültürel etkinlikleri, sanat sahnelerini, kafe ve restoranları
                canlandırırken, şehre enerji ve yenilik getirir. Ayrıca, genç nüfus, Eskişehir'in geleceğini şekillendirme
                potansiyeli taşır ve şehirdeki sosyal ve ekonomik gelişmelere önemli katkılar sunar.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="border"></div>

      <section>
        <div class="transport container">
          <h1>
            02. Eskişehir
          </h1>
          <div class="display">Her yerden
            kolayca ulaşın</div>
          <slider :swiper="trans" space="0" width="844px" height="499px" />
        </div>
      </section>

      <section class="increase container">
        <div class="p2">Türkiye'de Arsa Yatırımı: </div>
        <div class="display">Arsa değerlerinde
          %1071 artış</div>
        <nuxt-img sizes="xs:640px sm:768px md:1024px lg:1271px" class="img" src="graph3.png" />

        <div class="columns">
          <div class="column text">
            <div class="p1 bolder">Türkiye Geneli</div>
            <div class="p1">Arsa satın almak, birçok kişi için yatırım yapmanın yollarından biridir. Son yapılan
              araştırmalara göre Türkiye’de arsa satın almanın avantajları istatistiklerle ortaya konulmuştur. EKSLAND
              olarak size arsa almanın ip uçlarını en iyi şekilde aktarıyoruz.</div>
          </div>
          <div class="column">
            <NuxtLink to="https://www.endeksa.com/tr/analiz/turkiye/eskisehir/endeks/satilik/arsa" class="link">`Endeksa
            </NuxtLink>
            <div class="roi">
              <div class="text">
                <div class="p1">
                  %1071.43
                </div>
                <div class="p2">
                  4 Yıllık Değişim
                </div>
              </div>
              <div class="separator">
              </div>
              <div class="text">
                <div class="p1">
                  %114.54
                </div>
                <div class="p2">
                  1 Yıllık Değişim
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="gray-bg">
        <div class="manufacture container ">
          <div class="text">
            <h1>03. Eskişehir</h1>
            <div class="display">Sanayi</div>
            <nuxt-img sizes="xs:320px sm:384px md:512px lg:635.5px" class="img mobile-show" src="nuclear.png" />
            <div class="p1">Eskişehir, son yıllarda hızla gelişen bir sanayi merkezi haline gelmiştir. Ülkemizin tek Uçak
              Motor Fabrikası <strong> (TUSAŞ)</strong> ile Dizel Lokomotif motoru üreten <strong> tek</strong> fabrikası
              <strong> (TÜLOMSAŞ)</strong>
              Eskişehir’de
              bulunmaktadır. Ayrıca şehrin ekonomisinin <strong> %39’ </strong>unu şehrin sanayisi sağlamaktadır.
            </div>

            <div class="p1">
              Ayrıca, Eskişehir'deki organize sanayi bölgeleri ve
              <strong>
                endüstriyel alanlar,
                yatırımcılar için uygun altyapı
              </strong>
              ve destek sunmaktadır.
            </div>
          </div>
          <nuxt-img sizes="xs:320px sm:384px md:512px lg:635.5px" class="img mobile-hide" src="nuclear.png" />
        </div>


      </section>

      <section>
        <metrekare />
      </section>

      <section class="gray-bg">
        <div class="honorable-mentions container">
          <h1>04. Eskişehir</h1>
          <div class="display">
            Şehrin öne çıkanları
          </div>
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
    </div>
  </div>
</template>

<script setup>
import content from "../assets/content.json"
const layout = content.minerals
const trans = content.transport
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