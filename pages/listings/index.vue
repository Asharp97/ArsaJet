<template>
  <div class="listings container">
    <div class="top">
      <div class="p1 land-count">{{ totalIlanlar }} Adet İlan Bulundu</div>
      <div class="headers mobile-hide white-bg">
        <div class="p3m">İlan Başlığı & Detayları</div>
        <span>
          <div class="p4">Metrekare</div>
          <div class="p4">Fiyat</div>
          <div class="p4">İlçe</div>
        </span>
      </div>

      <div
        @click="showFilter = !showFilter"
        class="filter-button white-bg mobile-show">
        <button>
          <div class="p4">Filtrele</div>
        </button>
      </div>

      <div class="sort white-bg">
        <button>
          <div class="p4">
            {{ sortBy() }}
          </div>
          <Icon name="ep:arrow-down" class="icon" />
        </button>
        <q-menu fit transition-show="jump-down" transition-hide="jump-up">
          <q-list>
            <q-item
              clickable
              v-close-popup
              v-for="x in sortName"
              @click="order = x">
              <q-item-section> {{ x.text }} </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </div>
    </div>

    <div class="filter-listing-row" :class="{ 'hide-filter': !showFilter }">
      <div class="filter">
        <div class="filter-inner white-bg">
          <div class="p1">Fiyat</div>
          <div class="inputs">
            <input
              type="number"
              @keyup.enter="getIlanlar"
              v-model="price.min"
              min="1"
              max="290000" />
            -
            <input
              type="number"
              @keyup.enter="getIlanlar"
              v-model="price.max"
              min="1"
              max="30000" />
          </div>
          <q-range
            :step="1000"
            v-model="price"
            :min="0"
            :max="30000"
            color="black"
            thumb-color="black"
            label />
          <div class="p1">Metrekare</div>
          <div class="inputs">
            <input
              type="number"
              @keyup.enter="getIlanlar"
              v-model="km.min"
              min="1"
              max="1300" />
            -
            <input
              type="number"
              @keyup.enter="getIlanlar"
              v-model="km.max"
              min="1"
              max="1300" />
          </div>
          <q-range
            :step="1000"
            v-model="km"
            :min="0"
            :max="1300"
            color="black"
            thumb-color="black"
            label />

          <div class="p1">Şehirler</div>
          <div class="checklist">
            <div class="input-wrapper" v-for="x in cities">
              <q-checkbox v-model="city" :val="x" color="black">
                <div class="p2">{{ x }}</div>
              </q-checkbox>
            </div>
          </div>

          <btn2 @click="clearFilter">
            <div class="p2">Aramayı Temizle</div>
            <Icon name="pajamas:clear" />
          </btn2>
        </div>
      </div>
      <div class="listing">
        <q-inner-loading :showing="loading" />
        <div class="lands">
          <div class="white-bg" v-for="ilan in advert">
            <NuxtLink :to="`listings/${ilan.id}`" class="land">
              <div class="img-wrapper">
                <!-- <nuxt-img loading="lazy"  sizes="375px" class="land-img" src="land-1.png" /> -->
                <img :src="ilan.imgURL[0]" alt="" class="land-img" />
              </div>
              <div class="text">
                <div class="title">
                  <div class="p4 gray">
                    <!-- #Eskisehir -->
                    #{{ ilan.cityLocation }}
                  </div>
                  <div class="p3m">Eksland güvencesiyle satılık arsa</div>
                  <div class="details">
                    <div class="param p4">
                      {{ ilan.squareMeters }}m&sup2;
                      <!-- 500m2 -->
                    </div>
                    <div class="param p4">
                      <!-- 11.000 € -->
                      {{ ilan.landPrice }}€
                    </div>
                    <div class="param p4 last">
                      <!-- Alpu -->
                      {{ ilan.districtLocation }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="buttons">
                <button class="inv">Ilanı İncele</button>
                <button>Hemen Ara</button>
              </div>
            </NuxtLink>
          </div>
          <div class="white-bg pagination" v-show="totalIlanlar > adPerPage">
            <div v-for="n in totalPages">
              <div class="p1" @click="page = n" :class="{ active: n == page }">
                {{ n }}
              </div>
            </div>
          </div>
        </div>
        <h2 v-if="totalIlanlar == 0">
          We're sorry we couldn't find any lands that fit your search,
          <Icon name="material-symbols:heart-broken-rounded" class="green" />
          Consider widening your search parameters
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "invert-nav-color" });
import advert from "../../assets/dummy-lands.json";

//Filter Behaviour
import { useWindowSize } from "@vueuse/core";
const { width, height } = useWindowSize();
const defaultFilterBehaviour = () => {
  if (width.value < 1100) showFilter.value = false;
  else showFilter.value = true;
};
watch(
  () => width.value,
  () => {
    defaultFilterBehaviour();
  }
);
//content import
import content from "../assets/content.json";
const cities = content.eskisehirDistricts;
const sortName = content.sort;

let loading = ref(false);

let price = ref({ min: 0, max: 30000 });
let km = ref({ min: 0, max: 1300 });
let city = ref([]);

let showFilter = ref(true);

let ilanlar = ref([]);

let totalIlanlar = ref(null);
let page = ref(1);
const adPerPage = 10;
let totalPages = ref();

let order = ref(null);

const supabase = useSupabaseClient();

const sortBy = () => {
  if (order.value) return order.value.text;
  else return "Liste Sıralama";
};

let getCount = async () => {
  let query = supabase
    .from("lands")
    .select("*", { count: "exact", head: true })
    .gte("landPrice", price.value.min)
    .gte("squareMeters", km.value.min)
    .lte("landPrice", price.value.max)
    .lte("squareMeters", km.value.max);

  if (city.value.length > 0) query = query.in("cityLocation", city.value);

  let { count, error } = await query;
  totalIlanlar.value = count;
  totalPages = Math.ceil(totalIlanlar.value / adPerPage);
};

let clearFilter = () => {
  price.value = { min: 0, max: 30000 };
  km.value = { min: 0, max: 1300 };
  city.value = [];
};

let getIlanlar = async () => {
  // let query = supabase
  //   .from("lands")
  //   .select()
  //   .gte("landPrice", price.value.min)
  //   .gte("squareMeters", km.value.min)
  //   .lte("landPrice", price.value.max)
  //   .lte("squareMeters", km.value.max)
  //   .range(adPerPage * (page.value - 1), page.value * adPerPage);

  // if (city.value.length > 0) query = query.in("cityLocation", city.value);

  // if (order.value)
  //   query = query.order(order.value.obj.col, {
  //     ascending: order.value.obj.asc,
  //   });

  // loading.value = true;
  // let { data, error } = await query;
  // if (data) ilanlar.value = data;
  // loading.value = false;
  return advert
};

onMounted(() => {
  getCount();
  getIlanlar();
  defaultFilterBehaviour();
});

watch(
  () => [price.value, km.value, city.value, order.value],
  () => {
    page.value = 1;
    getIlanlar();
    getCount();
  }
);
watch(
  () => page.value,
  () => {
    getIlanlar();
  }
);
</script>

<style lang="scss" scoped>
@import "../../assets/style/variables.scss";

.pagination {
  .p1 {
    cursor: pointer;
  }

  .active {
    color: $darkGreen;
  }
}

.input-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.black {
  color: black !important;
}

.gray {
  color: $gray;
}

.hide-filter {
  gap: 0;

  .filter {
    overflow: hidden;
    width: 0;
    min-width: 0;
    border: none;
    height: 0;

    grid-template-rows: 0 !important;
  }
}
</style>
