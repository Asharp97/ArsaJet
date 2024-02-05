<template>
  <div class="faq">
    <section>
      <hero img="hero-faq" />
    </section>
    <NuxtLink to="#nav">
      <Icon name="material-symbols:arrow-upward-alt-rounded" class="up" :class="{ 'hideup': !showArrow }" />
    </NuxtLink>

    <div class="gap">
      <section class="titles m-container">
        <div class="title" id="nav">
          <div class="p1">Merak Ettikleriniz</div>
          <h1>Aklınıza Gelebilecek Tüm Sorular</h1>
        </div>

        <div class="nav">
          <NuxtLink to="#buy">
            <div class="p3m"> Satın alım işlemleri ile ilgili </div>
          </NuxtLink>
          <NuxtLink to="#pay">
            <div class="p3m"> Ödeme işlemleri ile ilgili </div>
          </NuxtLink>
          <NuxtLink to="#papers">

            <div class="p3m"> Evrak işlemleri ile ilgili </div>
          </NuxtLink>
          <NuxtLink to="#eksland">
            <div class="p3m"> EKSLAND ile ilgili </div>
          </NuxtLink>
          <NuxtLink to="#other">
            <div class="p3m"> Diğer </div>
          </NuxtLink>
        </div>
      </section>

      <section class="faq-bg gray-bg m-container" id="buy">
        <h2>Satın alım işlemleri ilgili</h2>
        <FaqComponent :faq="faq" class="FaqComponent " />
      </section>

      <section class="faq-bg gray-bg m-container" id="pay">
        <h2>Ödeme işlemleri ile ilgili</h2>
        <FaqComponent :faq="faq" class="FaqComponent " />
      </section>

      <section class="faq-bg gray-bg m-container" id="papers">
        <h2>Evrak işlemleri ile ilgili</h2>
        <FaqComponent :faq="faq" class="FaqComponent " />
      </section>

      <section class="faq-bg gray-bg m-container" id="eksland">
        <h2>EKSLAND ile ilgili</h2>
        <FaqComponent :faq="faq" class="FaqComponent " />
      </section>

      <section class="faq-bg gray-bg m-container" id="other">
        <h2>Diğer</h2>
        <FaqComponent :faq="faq" class="FaqComponent " />
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import content from "../assets/content.json"
const faq = content.faq

const { x, y } = useWindowScroll()

// watch(
//   () => y.value,
//   () => {
//     console.log(y.value)
//   }
// )

let showArrow = ref(false)
watch(() => y.value,
  () => {
    if (y.value > 2000)
      showArrow.value = true
    else
      showArrow.value = false

  })

</script>


<style lang="scss" scoped></style>
