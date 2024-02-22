<template>
  <div>
    <swiper @slideNextTransitionStart="next()" @slidePrevTransitionStart="prev()" class="mySwiper" :spaceBetween="0">
      <swiper-slide class="slide" v-for="x in choice">
        <nuxt-img loading="lazy" class="img" :src="x.img" />
        <div class="text">
          <h2>{{ x.choose }}</h2>
          <div class="p3m">{{ x.text }}</div>
          <div class="p3sb">Son 5 yıldaki değişiklikler</div>
          <table>
            <thead>
              <tr>
                <th v-for="n in 6" :class="{ 'mobile-hide': n == 1 }">
                  <h4 v-if="n < 6">{{ 2018 + n }}</h4>
                  <h4 v-else>Şu an</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td v-for="(n, x) in x.change" :class="{ 'mobile-hide': x == 0 }">
                  <div class="p1"> {{ n }} ₺ </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </swiper-slide>
    </swiper>
    <div class="pagination">
      <div class="dots" v-for="(pag, n) in  choice.length" :class="{ 'active-pagination': n == slideIndex }">
      </div>
    </div>
  </div>
</template>

<script setup>
import content from "../assets/content.json"
const choice = content.choice

const slideIndex = ref(0)

const next = () => {
  if (slideIndex.value < choice.length)
    slideIndex.value++
  else
    slideIndex.value = 0
}
const prev = () => {
  if (slideIndex.value > 0)
    slideIndex.value--
  else
    slideIndex.value = choice.length
}

</script>

<style lang="scss" scoped></style>