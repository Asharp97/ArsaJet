<template>
  <div>
    <div class="smooth-city-slide">
      <div v-for="x in 3" class="city-slide">
        <div class="city" v-for="n in city">
          <h3> •</h3>
          <h3>{{ n }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import content from "../assets/content.json"
const city = content.cityslider
</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";

.smooth-city-slide {
  display: flex;
  gap: 39px;
  background-color: $green;
  color: $darkGreen;
  padding-block: 37px;

  .city-slide {
    display: flex;
    gap: 39px;
    animation: 25s smooth-slider infinite linear;

    .city {
      gap: 39px;
      display: flex;
      width: fit-content;
    }
  }
}
</style>