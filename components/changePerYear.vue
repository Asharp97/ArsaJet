<template>
  <div class="change-per-year">
    <button>
      <div class="p4"> Minimum 1 Senelik Değişim
        <span>
          <Icon name="ph:caret-down-light" class="icon" />
        </span>
      </div>
      <q-menu fit transition-show="jump-down" transition-hide="jump-up">
        <q-list>
          <q-item clickable v-close-popup>
            Minimum 1 Senelik Değişim
          </q-item>
          <q-item clickable v-close-popup>
            Minimum 5 Senelik Değişim
          </q-item>
        </q-list>
      </q-menu>
    </button>
    <h1>%286,5</h1>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";

.change-per-year {
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    color: $gray;
    border-radius: 5px;
    border: 1px solid $gray;
    padding: 5px 10px;
  }

  h1 {
    text-align: center;
    margin-top: 18px;
  }
}
</style>