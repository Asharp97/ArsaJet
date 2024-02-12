<template>
  <div>
    <button @click="openWellCall()">
      <div class="wellcall"> Sizi Arayalım </div>
    </button>

    <div class="callyou-form" @click.self="openWellCall()" v-if="wellcall">
      <div class="form-bg">
        <FormComponent title="Sizi Arayalım" subtitle="Form göndermeniz durumunda 24 saat içerisinde sizi arayalım." />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'

const { x, y } = useWindowScroll()

let wellcall = ref(false);
const openWellCall = () => {
  wellcall.value = !wellcall.value
  y.value = 0

}
</script>

<style lang="scss" scoped></style>