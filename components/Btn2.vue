<template>
  <div>
    <NuxtLink :to="`${destination ? '/' + destination : ''}`">
      <button type="button" :class="[{ 'inv': inv }, { 'green': green }]">
        {{ text }}
        <slot />
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps(['text', 'destination', 'inv', 'green']);
</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";

.green {
  color: white !important;
  background-color: $darkGreen;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: $darkGreen;
  border: 2px solid $darkGreen;
  color: white;
  width: 100%;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: clamp(0.9375rem, 0.841rem + 0.5149vw, 1.25rem);
  font-weight: 500;
  white-space: nowrap;
}

button {
  &:active {
    background-color: $gray;
    border: 2px solid $gray;
    color: white;
  }

}

.inv {
  color: $darkGreen;
  background-color: white;
}
</style>