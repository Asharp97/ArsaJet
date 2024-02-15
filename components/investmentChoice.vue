<template>
  <div class="investment-choice m-container">
    <div class="p1">
      Tüm arazilerimiz 5.000 € ile 20.000 € arasında değişmektedir.
    </div>
    <h1>Min. 160.000 Maks. 640.000 ₺’ye <br> Geleceğe Yatırım Yapabilirsiniz. Ya da İsterseniz...</h1>

    <swiper @slideNextTransitionStart="next()" @slidePrevTransitionStart="prev()" class="mySwiper">
      <swiper-slide class=" slide" v-for="x in choice2">
        <div class="imgWrapper">
          <nuxt-img loading="lazy" class="img" :src="x.img" />
        </div>
        <div class="text">
          <h2> <span> {{ x.accent }} </span> {{ x.text }} </h2>
          <div class="p3m"> {{ x.also }} </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="pagination">
      <div class="dots" v-for="(pag, n) in  choice2.length" :class="{ 'active-pagination': n == slideIndex }"> </div>
    </div>

  </div>
</template>

<script setup>
import content from "../assets/content.json"
const choice2 = content.choice2

const slideIndex = ref(0)

const next = () => {
  if (slideIndex.value < choice2.length)
    slideIndex.value++
  else
    slideIndex.value = 0
}
const prev = () => {
  if (slideIndex.value > 0)
    slideIndex.value--
  else
    slideIndex.value = choice2.length
}

</script>

<style lang="scss" scoped></style>