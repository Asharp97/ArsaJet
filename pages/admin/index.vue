<template>
  <div class="admin container">
    <form v-if="!store.user" action="" class="form ">
      <input type="email" v-model="mail" placeholder="email" name="email" />
      <input type="password" v-model="pass" placeholder="password" name="password" />
      <btn2 text="sign in" @click="signin" />
    </form>
    <div v-if="store.user" class="content">

      <div class="admin-nav">
        <div class="tabs">
          <btn2 text="Ilanlar" :inv="!tabs[0]" @click="toggleTabs(0)" />
          <btn2 text="Ilan Ekle" :inv="!tabs[1]" @click="toggleTabs(1)" />
          <btn2 text="clients" :inv="!tabs[2]" @click="toggleTabs(2)" />
        </div>
        <btn2 text="sign out" @click="signout" />
      </div>

      <div class="clients" v-if="tabs[2]">
        <table>
          <thead>
            <tr>
              <th>
                <Icon name="material-symbols:sync-rounded" @click="getClients" class="icon" />
              </th>
              <th v-for="header in clientHeader">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in clients ">
              <td>
                <Icon name="ic:baseline-delete" class="icon" @click="deleteClients(row.id)" />
              </td>
              <td v-for="(data, n) in row" :class="{ 'hide': n == 'created_at' }">
                {{ data }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="ads" v-if="tabs[0]">
        <table>
          <thead>
            <tr>
              <th>
                <Icon name="material-symbols:sync-rounded" @click="getIlanlar" class="icon" />
              </th>
              <th></th>
              <th v-for="header in ilanHeader">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in ilanlar ">
              <td>
                <NuxtLink :to="`/admin/${row.id}`">
                  <Icon name="material-symbols:edit" class="icon" />
                </NuxtLink>
              </td>
              <td>
                <Icon name="ic:baseline-delete" class="icon" @click="deleteIlan(row.id)" />
              </td>
              <td v-for="(data, h, n) in row" :class="{ 'hide': h == 'created_at' || n > 9 }">
                {{ data }}
              </td>
              <td style="text-align: center;">
                <Icon class="icon" name="ic:outline-remove-red-eye" @click="getIlan(row.id)" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="postAd" v-if="tabs[1]">
        <div class="inputs">

          <ul>
            <div class="input-wrapper">
              <input type="number" v-model="newAd.landPrice" placeholder="Arazi Fiyatı">
            </div>

            <div class="input-wrapper">
              <input type="text" v-model="newAd.cityLocation" placeholder="Bulunduğu Şehir">
            </div>

            <div class="input-wrapper">
              <input type="text" v-model="newAd.districtLocation" placeholder="Bulunduğu İlçe">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.squareMeters" placeholder="Metrekare">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.pricePerSquareMeter" placeholder="Metrekare fiyatı">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.islandNo" placeholder="Ada no">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.sheetNo" placeholder="Pafta no">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.plotNumber" placeholder="Parsel no">
            </div>


            <div class="input-wrapper">
              <input type="file" class="hide" @change="imageSelected" ref="imageUploadReference" multiple="multiple">
              <btn text="Resimler Ekle" @click="$refs.imageUploadReference.click()" />
              <Icon name="material-symbols:close" class="icon" @click="clearImages" />
            </div>

            <div class="input-wrapper">
              <div>
                <div class="p2" v-for="x in imgName">{{ x }}</div>
              </div>
            </div>
          </ul>

          <ul>
            <div class="input-wrapper">
              <input type="number" v-model="newAd.istanbulDistance" placeholder="İstanbul'a olan uzaklık">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.ankaraDistance" placeholder="Ankaraya olan uzaklık">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.cityCenterDistance" placeholder="Şehir Merkezine olan uzaklık">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.nearestSettlementDistance"
                placeholder="En yakın yerleşim yerine olan uzaklık">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.airportDistance" placeholder="Havaalanına olan uzaklık">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.landSalesRate" placeholder="Bölgenin arsa satış oranı">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.realEstateValueLast5Years"
                placeholder="Son 5 Yıldaki bölge emlak değeri">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.regionalLandsValuationRate"
                placeholder="Bölge arazilerinin değerlenme oranı (Yıllık)">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.landToIndustrialZoneDistance"
                placeholder="Arsanın sanayı bölgesine uzaklığı">
            </div>
          </ul>

        </div>
        <div class="guide">
          <span>
            Maximum Add photos of
          </span>
          Resolution: 72 ppi  <br>
          height: 500px <br>
          width: 800px <br>
          formate: JPG <br>
        </div>

        <btn2 text="Ilan Ekle" @click="postAd()" />
      </div>

      <q-dialog v-model="overlay">
        <q-card>
          <q-card-section class="q-pt-none">
            <div v-for="(x, n, q) in ilan" :class="{ 'hide': q < 2 || q > 19 || n == 'imgURL' }">
              <div class="edit">
                <div class="p1 param">
                  {{ fullParams[q] }}:
                </div>
                <div class="p2 data">
                  {{ x }}
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-actions align="right">

            <btn2 :inv="true" text="Okay" @click="overlay = false" />

          </q-card-actions>
        </q-card>
      </q-dialog>


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

      <q-inner-loading :showing="loading" />

    </div>
  </div>
</template>

<script setup>
let loading = ref(false)
definePageMeta({
  layout: 'admin',
})

//JSON
import content from '../assets/content.json'
const clientHeader = content.clientHeader
const ilanHeader = content.ilanHeader
const fullParams = content.fullParams

// editAd
let overlay = ref(false)
let ilan = ref({})
const getIlan = async (id) => {

}

//User
import { useStore } from '../stores/useUserStore.ts'
const store = useStore()

const mail = ref('')
const pass = ref('')

const signin = async () => {

}
const signout = async () => {

}

//Tabs
const tabs = ref([false, true, false])
const toggleTabs = (x) => {
  for (let i = 0; i < tabs.value.length; i++) {
    if (i == x)
      tabs.value[i] = true
    else
      tabs.value[i] = false
  }
  if (x == 2)
    getClients()
  if (x == 0)
    getIlanlar()
}


//Contacts
const clients = ref({})
const getClients = async () => {


}
const deleteClients = async (id) => {

}

//Ads
const ilanlar = ref('')
const getIlanlar = async () => {

}
const deleteIlan = async (id) => {

}

const getImageNameForDelete = async (id) => {

}

const deleteImage = async (x) => {

}
//New Ad
const newAd = { imgURL: [], imgName: [] }
const success = ref(false)
const postAd = () => {

}

const postAdData = async () => {

}

// New Image Locally
const imgFile = []
const imgExt = []
const imgName = ref([])

const imageSelected = (event) => {
  for (let i = 0; i < event.target.files.length; i++) {
    imgFile[i] = event.target.files[i]
    imgName.value[i] = event.target.files[i].name
  }
}

const clearImages = () => {
  for (let i = 0; i < imgFile.length; i++) {
    imgFile[i] = null
    imgName.value[i] = null
  }
}

// New Image to Database
const imgDBName = []
const imgUpload = async () => {

}
const getImgURL = async (name, i) => {

}
</script>

<style lang="scss">
@import '../../assets/style/variables.scss';

.hide {
  display: none;
}

.clients,
.ads {
  th {
    background-color: $offwhite;
  }

  tr {
    &:nth-child(odd) {
      background-color: white;
    }
  }
}

.edit {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.116);
  padding-block: 10px;

  .param {
    text-align: start;
  }

  .input {
    width: fit-content;
  }
}
</style>
