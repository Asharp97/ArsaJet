<template>
  <div>
    <navbar />
    <slot />
    <foot />
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: white;
  color: black;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  position: unset !important;

}
</style>