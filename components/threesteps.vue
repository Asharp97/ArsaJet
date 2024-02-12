<template>
  <div>
    <div class="threesteps">
      <nuxt-img class="img" src="3adim.png" ref="target" :style="{
        transform: cardTransform,
        transition: 'transform 0.25s ease-out'
      }" />
      <div class="text elastic-enter-mb">
        <h1>
          3 Adımda LANDCLUB ile Yatırımınızı Gerçekleştirin
        </h1>
        <ol>
          <li class="elastic-enter-mb">
            <div class="p3sb">
              İletişim formumuzu doldurmanız zoom toplantısı planlayıp sizleri daha yakından tanımamız için yeterli
              olacaktır.
            </div>
          </li>
          <li class="elastic-enter-mb">
            <div class="p3sb">Yatırım yapmak istediğiniz arsa için depozito göndermeniz ve yaşadığınız ülkenin büyük
              elçiliğinden satış için gerekli evrakları hazırlamanız gerekmektedir. </div>
          </li>
          <li class="elastic-enter-mb">
            <div class="p3sb">
              Tapu dairesinde işlemler sonrası tapunuzu sizlere teslim edeceğiz. Arazi yatırımı yapmak işte bu kadar
              kolay! Şimdi form doldurun!</div>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMouseInElement } from '@vueuse/core'

const target = ref(null)
const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target)


const cardTransform = computed(() => {
  const MAX_ROTATION = 6

  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2) // handles x-axis

  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2) // handles y-axis

  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>

<style lang="scss" scoped>
@import '../assets/style/animations.scss';

.img {
  transform: v-bind(cardTransform);
  transition: transform 0.25s ease-out;
}
</style>