<template>
  <div class="smooth-img-slide-comp">
    <div class="smooth-img-slide-wrapper">
      <div class="smooth-img-slide" v-for="x in 2">
        <nuxt-img loading="lazy" class="img" :src="folder + '/' + n + '.png'" v-for="n in 6" width="316" />
      </div>
    </div>
    <div class="p1 gray container" style="margin-top: 20px;">{{ text }}</div>
  </div>
</template>

<script setup>
defineProps(['folder', 'text']);
</script>

<style lang="scss"></style>