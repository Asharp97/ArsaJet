<template>
  <div class="container scale-up enter" id="fillform">
    <div class="contact-us-form  m-container">
      <div class="half left-side mobile-hide ">
        <div class="reach-us">
          <h1>Bize Ulaşın</h1>
          <div class="link">
            <img src="../assets/link.svg" alt="">
            <div class="content">
              <h4>Arsajet</h4>
              <div class="p4">Anonim Şirketleri</div>
              <div class="p4 paragraph">Şimdi bizimle iletişime geçin! Danışmanlarımız en kısa sürede size geri dönüş
                yapacaktır.
              </div>
            </div>
          </div>
          <div class="icons">
            <Icon class="icon" name="ic:round-facebook" />
            <Icon class="icon" name="entypo-social:linkedin-with-circle" />
            <Icon class="icon" name="ph:instagram-logo-fill" />

          </div>
        </div>
      </div>
      <div class="half padded-form">
        <FormComponent title="Sizi Arayalım" subtitle="Form göndermeniz durumunda 24 saat içerisinde sizi arayalım." />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import FormComponent from './formComponent.vue';
const modules = [Navigation, Pagination];
</script>

<style lang="scss" scoped>
.scale-up {
  .half {
    animation: round-up ease-in-out both;
    animation-timeline: view(block);
    animation-range: cover 10% cover 30%;

    &:last-child {
      animation-range: cover 15% cover 35%;
    }
  }
}
</style>