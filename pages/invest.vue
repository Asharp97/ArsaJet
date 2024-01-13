<template>
  <div class="invest ">
    <section>
      <hero img="hero-invest" text="Nasıl yatırım yapabilirim?" id="form" />
    </section>
    <div class="gap">
      <section class="titles white-bg">
        <div class="title" id="nav">
          <div class="p1">Arazi yatırımınız EKSLAND ayrıcalığı ile yapın.</div>
          <!-- <h3>3 adımda yatırımınızı kolayca gerçekleştirebilirsiniz.</h3> -->
        </div>
      </section>
      <section class="firststep container mpi">
        <div class="display">
          Bizimle iletişim <br> Kurun
        </div>
        <div class="number">1</div>
        <nuxt-img sizes="xs:640px sm:768px md:1024px lg:1271px" class="img" src="arrow.png" />
        <div class="zoom">
          <div class="p1">
            Sitemizde iletişim bölümünde bulunan formu doldurmanız sizinle iletişim kurmamız için yeterli olacaktır.
            <b>
              Ardından zoom toplantısı
            </b>
            planlayıp sizleri daha yakından tanıma fırsatı bulmuş olacağız.
          </div>
          <div class="btns">
            <!-- <a href="mailto:destek@eksland.com.tr"> -->
            <btn2 text="destek@eksland.com.tr" />
            <!-- </a> -->
            <button class="social zoomlink">
              <Icon name="bx:bxl-zoom" class="icon" />
              Zoom
            </button>
            <btn2 :inv="true" text="Form Doldur" destination="invest#form" />
            <button class="social whatsapp">
              <Icon name="logos:whatsapp-icon" class="icon" />
              WhatsApp
            </button>
          </div>
        </div>
      </section>

      <section class="secondstep white-bg">
        <div class="container">
          <div class="part1">

            <div class="display">Gerekli Evrakları <br> Hazırlayın</div>
            <div class="p1">Beğendiğiniz arsa için depozito göndermeniz ve bulunduğunuz ülkenin büyük elçiliğinden satış
              için
              <b> vekaletname vermeniz</b> işlemleri başlatmanız ve satış için gerekli olan evrakları hazırlamanız adına
              yeterli olacaktır.
            </div>
          </div>
          <div class="part2">

            <div class="display">Arsa Sahibi Olun</div>
            <div class="p1">Evrak işlemleri ardından sizin için tapu dairesinde randevu oluşturacağız. </div>
          </div>
          <div class="number">2</div>
        </div>

      </section>

      <section class="big-container white-bg">
        <div class="thirdstep">
          <div class="sector">
            <nuxt-img sizes="588px" class="img " src="own1.png" />
            <div class="p1 mobile-hide">Satış işleminizi randevu tarihinde gerçekleştirip tapunuzu sizlere teslim
              edeceğiz.
              Artık arsa
              sahibi oldunuz! İstediğiniz gibi değerlendirmeye hazırsınız. Şimdi form doldurun!</div>
            <btn2 :inv="true" text="Form Doldur" destination="invest#form" class="mobile-hide" />
          </div>
          <div class="sector2">
            <nuxt-img sizes="433px" class="img" src="own2.png" />
            <nuxt-img sizes="433px" class="img mobile-hide" src="own3.png" />
          </div>
          <div class="sector3">
            <div class="three">
              3
            </div>
          </div>
        </div>
        <div class="text-btn mobile-show">
          <div class="p1">
            <b> Satış işleminizi randevu tarihinde gerçekleştirip tapunuzu sizlere teslim edeceğiz.</b>
            Artık arsa
            sahibi oldunuz! İstediğiniz gibi değerlendirmeye hazırsınız.
            <b> Şimdi form doldurun!</b>
          </div>
        </div>
      </section>

      <section class="decks big-container">
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
      </section>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
const modules = [EffectCards]

import content from "../assets/content.json"
const cards1 = content.cards1
const cards2 = content.cards2
</script>

<style lang="scss" scoped></style>