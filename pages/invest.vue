<template>
  <div class="invest ">
    <section>
      <hero img="hero-invest" class=" " :text="['Arazi Yatırımıyla', 'Aile Mutluluğunuzu', 'Güvence Altına Alın']"
        id="form" :invest="true" />
    </section>
    <div class="gap ">

      <section class="bg-gray scale-up enter">
        <div class="steps m-container scale-up enter">

          <div class="p1 gray">Arazi yatırımınızı Arsajet ile yapın</div>
          <div class="h1-wrapper">
            <h1 class="typing">
              <span class="blink">
                3 Adımda Yatırımınızı Kolayca Gerçekleştirin
              </span>
            </h1>
          </div>

          <div class="step scale-into-frame enter">
            <nuxt-img provider="imagekit" class="img" src="step1.png" />

            <div class="text ">
              <h4>Bizimle İletişim Kurun</h4>
              <div class="p3m">Sitemizde iletişim bölümünde bulunan formu doldurmanız sizinle iletişim kurmamız için
                yeterli
                olacaktır. Ardından zoom toplantısı planlayıp sizleri daha yakından tanıma fırsatı bulmuş olacağız.</div>
              <img src="../assets/zoom.svg" alt="">
            </div>

          </div>
          <div class="step scale-into-frame enter">
            <div class="text ">
              <h4>Bizimle İletişim Kurun</h4>
              <div class="p3m">Sitemizde iletişim bölümünde bulunan formu doldurmanız sizinle iletişim kurmamız için
                yeterli
                olacaktır. Ardından zoom toplantısı planlayıp sizleri daha yakından tanıma fırsatı bulmuş olacağız.</div>
              <btn2 text="Gerekli Evrakları İndir" :green="true" />
            </div>

            <nuxt-img provider="imagekit" class="img" src="step2.png" />
          </div>

          <div class="step scale-into-frame enter">
            <nuxt-img provider="imagekit" class="img" src="step3.png" />

            <div class="text  enter">
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
        <div class="p1 ">ARSAJET olarak</div>
        <div class="h1-wrapper">
          <h1 class="typing">
            <div class="blink">

              Yatırım Yaparken Neleri Öneriyoruz?
            </div>
          </h1>
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