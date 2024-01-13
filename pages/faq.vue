<template>
  <div class="faq">
    <section>
      <hero img="hero-faq" text="Aklınızda soru kalmasın." />
    </section>
    <NuxtLink to="#nav">
      <Icon name="material-symbols:arrow-upward-alt-rounded" class="up" :class="{ 'hideup': !showArrow }" />
    </NuxtLink>
    <div class="gap">
      <section class="titles">
        <div class="p1">Sıkça sorulan sorular.</div>

        <div class="title" id="nav">
          <div class="logo"> EKS<span>LAND</span> </div>
          <h4>Fikirtepe</h4>
          <div class="display">Aklınıza <br> gelebilecek tüm <br> sorular.</div>
        </div>

        <div class="nav">
          <NuxtLink to="#buy">
            <div class="t1"> Satın alım işlemleri ilgili </div>
          </NuxtLink>
          <NuxtLink to="#pay">
            <div class="t1"> Ödeme işlemleri ile ilgili </div>
          </NuxtLink>
          <NuxtLink to="#papers">

            <div class="t1"> Evrak işlemleri ile ilgili </div>
          </NuxtLink>
          <NuxtLink to="#eksland">
            <div class="t1"> EKSLAND ile ilgili </div>
          </NuxtLink>
        </div>
      </section>

      <section class="container" id="buy">
        <h1>Satın alım işlemleri ilgili</h1>
        <FaqComponent :faq="faq" class="FaqComponent white-bg" />
      </section>

      <section class="container" id="pay">
        <h1>Ödeme işlemleri ile ilgili</h1>
        <FaqComponent :faq="faq" class="FaqComponent white-bg" />
      </section>

      <section class="container" id="papers">
        <h1>Evrak işlemleri ile ilgili</h1>
        <FaqComponent :faq="faq" class="FaqComponent white-bg" />
      </section>

      <section class="container" id="eksland">
        <h1>EKSLAND ile ilgili</h1>
        <FaqComponent :faq="faq" class="FaqComponent white-bg" />
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
