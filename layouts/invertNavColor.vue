<template>
  <div>
    <navbar />
    <slot />
    <foot />
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.navbar {
  background-color: $darkGreen;
  color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  position: unset !important;

}
</style>