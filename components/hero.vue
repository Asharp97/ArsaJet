<template>
  <div class="hero" :class="{ 'marginbot': mb }">
    <nuxt-img sizes="xs:640px sm:768px md:1024px lg:1280px xl:1536px xxl:1536px 2xl:2560px" class="landing-image "
      :src="`${img}.png`" />
    <div class="landing-page mpi container">
      <div class="landing-text">
        <div class="display">
          {{ text }}
        </div>
      </div>
      <div class="form-bg">
        <FormComponent title="Hemen Bize Ulaşın" subtitle="Ücretsiz bilgi edinin." />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['text', 'img', 'mb']);
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.marginbot {
  margin-bottom: $sectionGap;
}
</style>




