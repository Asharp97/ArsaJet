<template>
  <div class="decks m-container of-hide">
    <div class="deck from-below ">
      <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="cards cards1">
        <swiper-slide class="card" v-for=" card  in  cards1 " @click="clickHandle()">
          <Icon :name="`${card.icon}`" class="icon" />
          <div class="p1">{{ card.title }}</div>
          <div class="p2">{{ card.details }}</div>
        </swiper-slide>
      </swiper>
      <div class="p1 subtitle">
        <span>
          <Icon name="ic:baseline-star" class="icon star" />
        </span>
        Arazi yatırımı, uzun vadeli bir yatırım stratejisi olarak dikkat çekiyor. Doğru seçilen bir arazi, <b>
          gelecekte değer kazanabilir ve farklı kullanım amaçlarına hizmet edebilir.</b>
      </div>
    </div>
    <div class="deck from-below">
      <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="cards cards2">
        <swiper-slide class="card card2" v-for=" card  in  cards2 " @click="clickHandle2()">
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


const clickHandle = () => {
  const swiper = document.querySelector('.cards1').swiper;;
  swiper.slideNext()
}
const clickHandle2 = () => {
  const swiper = document.querySelector('.cards2').swiper;;
  swiper.slideNext()
}


</script>

<style lang="scss" scoped>
.decks {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  .deck {
    width: 45%;
    min-width: 400px;
    margin-inline: auto;

    &:last-child {
      animation-range: cover 10% cover 40%;
    }

    .subtitle {
      max-width: 418px;
      margin-top: 30px;
    }

    .cards {
      .swiper-wrapper {
        // max-width: 500px;
        // width: 100%;
      }

      .card {
        &:nth-child(1) {
          background-color: #3a3a3a;
        }

        &:nth-child(2) {
          background-color: #272727;
        }

        &:nth-child(3) {
          background-color: #070707;
        }

        height: 275px;
        max-width: 439px;
        color: white;
        border-radius: 10px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 30px;

        
        .icon {
          font-size: 40px;
        }
      }
      @media screen and (max-width: 450px) {
        .card {
          height: fit-content
        }
      }

      .card2 {
        &:nth-child(1) {
          background-color: #a96306;
        }

        &:nth-child(2) {
          background-color: #794704;
        }

        &:nth-child(3) {
          background-color: #492b03;
        }
      }
    }
  }
}
</style>