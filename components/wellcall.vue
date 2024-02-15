<template>
  <div>
    <button @click=" wellcall = !wellcall">
      <div class="wellcall"> Sizi Arayalım </div>
    </button>
    <Transition name="slide-in">
      <div class="callyou-form" @click.self=" wellcall = !wellcall" v-if="wellcall">
        <div class="form-bg">
          <FormComponent title="Sizi Arayalım" subtitle="Form göndermeniz durumunda 24 saat içerisinde sizi arayalım."
            class="form" @submit="wellcall = !wellcall" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
let wellcall = ref(false);

</script>

<style lang="scss" scoped>
.slide-in-enter-active {
  animation: slide-in 2s cubic-bezier(0.2, 0.01, 0, 0.99);
}

.slide-in-leave-active {
  animation: slide-out 2s cubic-bezier(0.9, 0.01, 0.64, 0.99);
}

</style>