<template>
  <Transition name="slide-in">
    <div class="callyou-form" @click.self="$emit('close')" v-if="show">
      <div class="form-bg">
        <FormComponent title="Sizi Arayalım" subtitle="Form göndermeniz durumunda 24 saat içerisinde sizi arayalım."
          class="form" @submit="$emit('close')" />
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps(['show']);

</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.slide-in-enter-active {
  animation: slide-in 2s cubic-bezier(0.2, 0.01, 0, 0.99);
}

.slide-in-leave-active {
  animation: slide-in 2s cubic-bezier(0.9, 0.01, 0.64, 0.99) reverse;
}

.callyou-form {
  transition: 500ms ease-in-out;
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  height: 100%;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);

  .form-bg {
    border-radius: 14px;
    padding: 24px 42px;
    width: fit-content;
    z-index: 9;
    max-width: 451px;
    background-color: $offwhite;
  }
}
</style>