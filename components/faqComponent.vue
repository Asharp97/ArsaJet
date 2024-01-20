<template>
  <div>
    <div class="faq-wrapper mpi">
      <div class="faq" @click="accordionCheck(n)" v-for="(f, n) in faq">
        <div class="question">
          <div class="p1">
            <span> 0{{ n + 1 }}. </span>
            {{ f.label }}
          </div>
          <div class="icons" :class="{ 'open-icons': openfaq[n] }">
            <Icon name="octicon:dash-16" class="right-icon icon" />
            <Icon name="octicon:dash-16" class="left-icon icon" />
          </div>
        </div>
        <div class="answer" :class="{ 'open': openfaq[n] }">
          <div class="p3m"><br> {{ f.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const prop = defineProps(['faq'])
const openfaq = ref([true])
const emit = defineEmits(['toggle'])

const accordionCheck = (x) => {
  emit('toggle')
  for (let i = 0; i < toRaw(prop).faq.length; i++) {
    if (x == i)
      openfaq.value[i] = !openfaq.value[i]
    else
      openfaq.value[i] = false
  }
}

</script>

<style lang="scss" scoped></style>