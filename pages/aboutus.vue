<template>
  <div class="about">
    <section>
      <hero img="hero-home" :text="['Arazi Yatırımı bir Fırsattır', 'LandClub ile İmkanlarınıza', ' Değer Katın.']" />
    </section>
    <div class="gap">

      <section id="bizKimiz" class="bizkimiz m-container">
        <div class="p1">Merak Ettikleriniz</div>
        <h1>Biz Kimiz?</h1>
        <div class="p3m">Lorem ipsum dolor sit amet consectetur. Dui morbi elit sed vel placerat. Mollis sapien vulputate
          at suscipit eget lectus dictum senectus eu. Sit commodo facilisi consequat eget. Quis mauris semper turpis etiam
          morbi ac nunc lorem. Mauris elementum varius proin erat neque nunc aliquam blandit. Magna a pharetra nunc odiom.
          Lorem ipsum dolor sit amet consectetur. Dui morbi elit sed vel placerat. Mollis sapien vulputate at suscipit
          eget lectus dictum senectus eu. Sit commodo facilisi consequat eget. Quis mauris semper turpis etiam morbi ac
          nunc lorem. Mauris elementum varius proin erat neque nunc aliquam blandit. Magna a pharetra nunc odiom.

          Lorem ipsum dolor sit amet consectetur. Dui morbi elit sed vel placerat. Mollis sapien vulputate at suscipit
          eget lectus dictum senectus eu. Sit commodo facilisi consequat eget. Quis mauris semper turpis etiam morbi ac
          nunc lorem. Mauris elementum varius proin erat neque nunc aliquam blandit. Magna a pharetra nunc odiom.

          Lorem ipsum dolor sit amet consectetur. Dui morbi elit sed vel placerat. Mollis sdictum senectus eu. Mauris
          elementum varius proin erat neque nunc aliquam blandit. Magna a pharetra nunc odiom. </div>
      </section>

      <section class="of-hide old-images">
        <div class="smooth-img-slide">
          <nuxt-img loading="lazy" class="img" src="old.png" v-for="n in 12" />

        </div>
        <div class="p1 container">LandClub ile daha yatırımlarımıza bakın</div>
      </section>

      <section class="white-bg">
        <div class="Millionaires big-container ">
          <nuxt-img loading="lazy" src="tower.png" class="img" />
          <div class="text">
            <div class="p1">LANDCLUB ile</div>
            <div class="display">
              %90 Of All Millionaires
              Become so Through of
              Owning Real Estate
            </div>
          </div>
        </div>

      </section>

      <section class="we-are-here">
        <div class="content white-bg m-container ">
          <div class="icons">
            <Icon name="subway:world-1" class="world icon" />
            <Icon name="la:hands-helping" class="help icon" />
            <Icon name="gis:poi-map" class="map icon" />
          </div>
          <h1>
            Yatırımınıza değer katmak için buradayız.
          </h1>
          <hr>
          <div class="text">
            <div class="half">
              <div class="p2">LandClub güvencesiyle</div>
              <h2>50 senelik tecrübemiz ve bilgimiz ile yatırımınızı bizimle gerçekleştirin</h2>
            </div>
            <div class="half">
              <div class="p3m">Arazi yatırımı, her zaman güvenilir bir yatırım fırsatı olarak öne çıkmıştır. Şirketimiz,
                yıllardır bu alanda edinilen deneyim ve uzmanlık ile yatırımcıların arazi yatırımlarını daha da değerli
                hale getirme konusunda kendini kanıtlamıştır. Biz, yatırımlarınızı büyütmek ve güvence altına almak için
                buradayız.
              </div>
            </div>
          </div>
        </div>
      </section>



      <section class="office m-container mpi">


        <div class="white-bg">
          <nuxt-img loading="lazy" sizes="xs:640px sm:768px md:1024px lg:1271px" src="office.png" class="img" />
          <h1>
            Sizleri Fikirtepe’deki Satış Ofisimize Bekliyoruz!
          </h1>
          <div class="p1">
            Fikirtepe'deki ofisimiz, sizi iş dünyasının dinamiklerini yakından deneyimlemeye davet ediyor. Modern,
            konforlu
            ve
            tam donanımlı bir çalışma ortamında buluşmak için hazırız. Sektör liderlerinin arasında yer almak, inovasyonu
            desteklemek ve yaratıcı projelere imza atmak için bizimle birlikte adım atın. Sizi ofisimizde ağırlamaktan
            mutluluk
            duyarız!"
          </div>
        </div>

      </section>
    </div>

  </div>
</template>

<script setup>
import content from "../assets/content.json"
const swiperdata = content.oldpics
</script>

<style lang="scss" scoped></style>