<template>
  <div>
    <swiper @slideNextTransitionStart="next()" @slidePrevTransitionStart="prev()" class="slides">
      <swiper-slide class="slide">
        <div class="text">
          <h2>
            <span> Maden kaynakları </span> ile zengin şehir!
          </h2>
          <div class="p3m">Eskişehir, çeşitli maden kaynaklarıyla zenginleşmiş bir bölge olarak bilinir. Özellikle
            linyit kömürü, bor, manyezit, talk, zeolit ve trona gibi madenlerle ön plana çıkan şehirde, 75 firma
            faaliyet göstermekte ve yaklaşık 3.800 kişi istihdam edilmektedir.
            <br>
            <br>
            Türkiye’de önemli tinkal yatakları Seyitgazi’ye bağlı Kırka’da bulunuyor.
          </div>
        </div>
        <nuxt-img loading="lazy" class="img" src="kristal.png" />

      </swiper-slide>
      <swiper-slide class="slide">
        <div class="text">
          <h2> Eskişehir’in <span> Sanayisi </span> </h2>
          <div class="p3m">

            Eskişehir, son yıllarda hızla gelişen bir sanayi merkezi haline gelmiştir. Ülkemizin tek Uçak Motor
            Fabrikası (TUSAŞ) ile Dizel Lokomotif motoru üreten tek fabrikası (TÜLOMSAŞ) Eskişehir’de bulunmaktadır.
            Ayrıca şehrin ekonomisinin %39’unu şehrin sanayisi sağlamaktadır.
            <br>
            <br>
            Ayrıca, Eskişehir'deki organize sanayi bölgeleri ve endüstriyel alanlar, yatırımcılar için uygun altyapı
            ve destek sunmaktadır.
          </div>
        </div>
        <nuxt-img loading="lazy" class="img" src="fabrika.jpg" />

      </swiper-slide>
      <swiper-slide class="slide">
        <div class="text">
          <h2> Eskişehir’in <span> Popülasyonu</span> </h2>
          <div class="p3m">
            Eskişehir, genç ve dinamik bir nüfusa ev sahipliği yapmaktadır. Şehir, birçok üniversite ve yüksek öğrenim
            kurumu barındırması nedeniyle gençlerin yoğun olarak bulunduğu bir yerdir. Eskişehir, öğrenci nüfusu, genç
            girişimciler ve profesyoneller için cazip bir yaşam ve kariyer merkezi olma özelliğine sahiptir.
            <br>
            <br>
            Bu dinamik nüfus, kültürel etkinlikleri, sanat sahnelerini, kafe ve restoranları canlandırırken, şehre
            enerji ve yenilik getiriyor. Ayrıca, genç nüfus, Eskişehir'in geleceğini şekillendirme potansiyeli taşır
            ve şehirdeki sosyal ve ekonomik gelişmelere önemli katkılar sunar.
          </div>
        </div>
        <div class="img">
          <nuxt-img loading="lazy" class="piechart" src="age.png" />
          <nuxt-img loading="lazy" class="piechart" src="gender.png" />

        </div>
      </swiper-slide>
    </swiper>
    <div class="pagination">
      <div class="dots" v-for="(pag, n) in  3" :class="{ 'active-pagination': n == slideIndex }">
      </div>
    </div>
  </div>
</template>

<script setup>
const slideIndex = ref(0)

const next = () => {
  if (slideIndex.value < 3)
    slideIndex.value++
  else
    slideIndex.value = 0
}
const prev = () => {
  if (slideIndex.value > 0)
    slideIndex.value--
  else
    slideIndex.value = 3
}

</script>

<style lang="scss" scoped></style>