<template>
  <div>
    <navbar />
    <slot />
    <foot />
  </div>
</template>

<script setup>
onMounted(() => {
  useSmoothScroll()
})
</script>

<style lang="scss"></style>