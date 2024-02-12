<template>
  <div class="form-inner">
    <q-inner-loading :showing="loading" />

    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section>
          <Icon name="ep:success-filled" class="success-icon" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="p1">
            Form başarı ile gönderilmiştir. En kısa sürede uzman ekibimiz tarafından sizler ile iletişime geçilecektir.
          </div>
        </q-card-section>

        <q-card-actions align="center">
          <!-- <q-btn flat label="OK" color="primary" v-close-popup /> -->
          <div class="logo">Land<span>Club</span></div>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <div class="text">
      <h1>{{ title }}</h1>
      <div class="p4">{{ subtitle }}</div>
    </div>

    <form class="form">
      <div class="inputWrapper">
        <div class="error" v-if="errorMsg && !name">
          <Icon name="material-symbols:exclamation-rounded" class="exclamation" />
        </div>
        <input type="text" placeholder="Adınız, Soyadınız" v-model="name" name="name"
          :class="{ 'err': errorMsg && !name }">
      </div>

      <div class="inputWrapper">
        <div class="error" v-if="errorMsg && !email || errorMsg && !emailCheck()">
          <Icon name="material-symbols:exclamation-rounded" class="exclamation" />
        </div>
        <input type="email" placeholder="E-mail Adresiniz" v-model="email" name="email"
          :class="{ 'err': errorMsg && !email || errorMsg && !emailCheck() }">
      </div>

      <div class="inputWrapper">
        <div class="error" v-if="errorMsg && !telephone">
          <Icon name="material-symbols:exclamation-rounded" class="exclamation" />
        </div>
        <div class="phoneNumber">
          <div class="caret-container">
            <Icon name='material-symbols:arrow-drop-down' class='caret-select' />
            <select name="countrycode" v-model="code" :class="[{ 'blacktext': code }, { 'err': errorMsg && !code }]">
              <option :value="null" disabled selected>+</option>
              <option :value="country.dial_code" v-for="country in countries">
                {{ country.code }} {{ country.dial_code }}
              </option>
            </select>
          </div>
          <input type="number" placeholder="Telefon numaranız" v-model="telephone" name="telephone"
            :class="{ 'err': errorMsg && !telephone }">
        </div>
      </div>

      <div class="inputWrapper">
        <div class="error" v-if="errorMsg && !country">
          <Icon name="material-symbols:exclamation-rounded" class="exclamation" />
        </div>
        <div class="caret-container">
          <Icon name='material-symbols:arrow-drop-down' class='caret-select' />
          <select name="country" v-model="country" id=""
            :class="[{ 'blacktext': country }, { 'err': errorMsg && !country }]">
            <option :value="null" disabled selected>Hangi ülkede yaşıyorsunuz?</option>
            <option v-for=" country in countries ">{{ country.name }}</option>
          </select>
        </div>
      </div>
      <btn2 :green="true" @click="submit()" text="Sizi Arayalım" />
    </form>
  </div>
</template>

<script setup>
defineProps(['title', 'subtitle']);

const errorMsg = ref(false)

const loading = ref(false)
const name = ref()
const email = ref()
const code = ref(null)
const telephone = ref()
const country = ref(null)
const dialog = ref(false)


const emailCheck = () => {
  if (email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    || email.value == '')
    return true
  else
    return false
}

const supabase = useSupabaseClient()
const postInfo = async () => {
  try {
    if (name && email && telephone && country)
      loading.value = true

    const { status, error } = await supabase
      .from('contact')
      .insert({
        name: name.value,
        email: email.value,
        telephone: code.value.concat(telephone.value),
        country: country.value
      })
    if (status == 201) {
      dialog.value = true
      name.value = ''
      email.value = ''
      code.value = null
      telephone.value = ''
      country.value = null
      errorMsg.value = false
    }
    if (error) throw error
  }
  catch (e) {
    errorMsg.value = true
    setTimeout(() => { errorMsg.value = false }, 3000);
    console.log(e)
  }
  finally {
    loading.value = false
  }
}

const sendEmail = () => {
  console.log('email')
}

const submit = () => {
  postInfo()
  // sendEmail()
}

import countryList from "../assets/countries.json"
const countries = countryList
</script>

<style lang="scss" scoped>
.blacktext {
  color: black;
}

.err {
  border: 1px solid #DB0000;
}

.exclamation {
  color: #DB0000;
  font-size: 30px;
  font-weight: 800;
}
</style>