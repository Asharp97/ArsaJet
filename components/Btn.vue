<template>
  <div>
    <NuxtLink :to="`${destination ? '/' + destination : ''}`">
      <button>
        <span> {{ text }} </span>
        <Icon name="octicon:feed-plus-16" />
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps(['text', 'destination']);
</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";

button {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 40px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.11);

  span {
    font-weight: 600;
    font-size: 17px;
  }

  .icon {
    color: $orange;
    font-size: 30px;
  }
}
</style>