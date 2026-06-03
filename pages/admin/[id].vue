<template>
  <div class="postAd">
    <q-dialog v-model="success">
      <q-card>
        <q-card-section class="q-pt-none">
          <Icon name="clarity:success-standard-line" class="icon" />
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <h1>Yuklendi</h1>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <div class="inputs">
      <ul v-for="(column, columnIndex) in adminFormField" :key="columnIndex">
        <div class="input-wrapper" v-for="field in column" :key="field.key">
          <label>{{ field.label }}</label>
          <input
            :type="field.type"
            v-model="ilan[field.key]"
            :placeholder="field.placeholder" />
        </div>

        <!-- Image upload section only in first column -->
        <template v-if="columnIndex === 0">
          <div class="input-wrapper">
            <input
              type="file"
              class="hide"
              @change="imageSelected"
              ref="imageUploadReference"
              multiple="multiple" />
            <btn
              text="Resimler Ekle"
              @click="$refs.imageUploadReference.click()" />
            <Icon
              name="material-symbols:close"
              class="icon"
              @click="clearImages" />
          </div>

          <div class="input-wrapper">
            <div>
              <div class="p2" v-for="x in imgName">{{ x }}</div>
            </div>
          </div>
        </template>
      </ul>
    </div>

    <btn2 text="APPLY CHANGES" @click="editIlan()" />
  </div>
</template>

<script setup>
import { adminFormField } from "../../assets/content.json";
const id = useRoute().params.id;
const imgName = ref([]);
const ilan = ref({});

const getIlan = async () => {};
const success = ref(false);
const editIlan = async () => {};
const clearImages = () => {};
const deleteImageFromDB = async () => {};

onMounted(() => {
  getIlan();
});
</script>

<style lang="scss" scoped>
@import "../../assets/style/variables.scss";

.postAd {
  margin-top: $navHeight;
}
</style>
