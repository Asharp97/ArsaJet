<template>
  <div class="smooth-img-slide-wrapper">
    <div class="smooth-img-slide" v-for="x in 2">
      <nuxt-img loading="lazy" class="img" :src="folder + '/' + n + '.png'" v-for="n in 6" width="316"/>
    </div>
  </div>
</template>

<script setup>
defineProps(['folder']);
</script>

<style lang="scss"></style>