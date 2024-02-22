<template>
  <div class="invest ">
    <section>
      <hero img="hero-invest.png" class=" " :text="['Arazi Yatırımıyla', 'Aile Mutluluğunuzu', 'Güvence Altına Alın']"
        id="form" :invest="true" />
    </section>
    <div class="gap ">

      <section class="bg-gray scale-up enter">
        <div class="steps m-container">

          <div class="p1 gray">Arazi yatırımınızı LandClub ile yapın</div>
          <div class="h1-wrapper">
            <h1 class="cover-remove">

              3 Adımda Yatırımınızı Kolayca Gerçekleştirin

            </h1>
          </div>

          <div class="step from-below">
            <nuxt-img loading="lazy" class="img imgParallax" src="step1.jpg" />

            <div class="text textParallax ">
              <h4>Bizimle İletişim Kurun</h4>
              <div class="p3m">Sitemizde iletişim bölümünde bulunan formu doldurmanız sizinle iletişim kurmamız için
                yeterli
                olacaktır. Ardından zoom toplantısı planlayıp sizleri daha yakından tanıma fırsatı bulmuş olacağız.</div>
                <NuxtLink to="https://zoom.us/">
                  <img src="../assets/zoom.svg" alt="">
                </NuxtLink>
            </div>

          </div>
          <div class="step step2 from-below">
            <div class="text textParallax ">
              <h4>Bizimle İletişim Kurun</h4>
              <div class="p3m">Sitemizde iletişim bölümünde bulunan formu doldurmanız sizinle iletişim kurmamız için
                yeterli
                olacaktır. Ardından zoom toplantısı planlayıp sizleri daha yakından tanıma fırsatı bulmuş olacağız.</div>
              <btn2 text="Gerekli Evrakları İndir" :green="true" />
            </div>

            <nuxt-img loading="lazy" class="img imgParallax" src="step2.jpg" />
          </div>

          <div class="step from-below">
            <nuxt-img loading="lazy" class="img imgParallax" src="step3-cropped.jpg" />

            <div class="text textParallax  ">
              <h4>Bizimle İletişim Kurun</h4>
              <div class="p3m">Sitemizde iletişim bölümünde bulunan formu doldurmanız sizinle iletişim kurmamız için
                yeterli
                olacaktır. Ardından zoom toplantısı planlayıp sizleri daha yakından tanıma fırsatı bulmuş olacağız.</div>
              <Btn2 text="Form Doldur" />
            </div>

          </div>
        </div>
      </section>

      <section class="decks-wrapper m-container scale-up enter">
        <div class="p1 ">LANDCLUB olarak</div>
        <div class="h1-wrapper">
          <h1 class="cover-remove"> Yatırım Yaparken Neleri Öneriyoruz? </h1>
        </div>
        <deck />

        <btn2 class="btn" destination="">
          <div class="p1">
            Detaylı Bilgi Alın
            <span>
              <Icon name="material-symbols:chevron-right-rounded" class="icon" />
            </span>
          </div>
        </btn2>
      </section>
    </div>
  </div>
</template>

<script setup>


</script>

<style lang="scss" scoped></style>