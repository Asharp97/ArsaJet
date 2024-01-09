<template>
  <div class="big-container" id="fillform">
    <div class="contact-us-form big-container">
      <div class="half swiper-quote mobile-hide ">
        <nuxt-img sizes="xs:0px lg:635px" class="backgroundImg" src="fillform.png" />
        <swiper :navigation="true" :modules="modules" class="swiper" :loop="true" :space-between="70">
          <swiper-slide>
            <div class="text-bg">
              <div class="title">
                Önceliğimiz Memnuniyetiniz
              </div>
              <div class="p2">İnternet üzerinden yaptığım en doğru yatırımdı. Eksland yatırım araçlarına bakış açımı
                değiştirdi.
                Ayrıca yurdumdan bir toprağım oldu. Çok teşekkür ederim.</div>
              <div class="author">
                <nuxt-img class="img" src="profile.png" />
                <span> Kemal Eren Yılmaz </span>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="text-bg">
              Slide 2
            </div>
          </swiper-slide>
        </swiper>

      </div>
      <div class="half padded-form">
        <FormComponent title="Formu Doldurun"
          subtitle="Şimdi bizimle iletişime geçin! Danışmanlarımız en kısa sürede size geri dönüş yapacaktır." />
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

<style lang="scss" scoped></style>