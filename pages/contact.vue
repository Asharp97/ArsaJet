<template>
  <div class="contact ">
    <section>
      <hero img="hero-contactus" text="Bize Ulaşın." />
    </section>

    <div class="gap">
      <section class="mpb white-bg" style="padding-top: 120px;">
        <div class="container mpi" >

          <div class="display">
            İstanbul Ofisimiz
          </div>
          <div class=" contact-details ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.491645461869!2d29.12256047570446!3d40.99261112038986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8aaaa9d16cb%3A0x9a3b23045c14af26!2sAta%20Copy%20Center!5e0!3m2!1sen!2str!4v1683698205945!5m2!1sen!2str"
              height="354" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <div class="details">
              <div v-for="c in contact">
                <h3>{{ c.title }}</h3>
                <div class="t2">
                  {{ c.adres }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container mpi">

        <div class="display">
          Amerika Ofisimiz
        </div>
        <div class="contact-details">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.491645461869!2d29.12256047570446!3d40.99261112038986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8aaaa9d16cb%3A0x9a3b23045c14af26!2sAta%20Copy%20Center!5e0!3m2!1sen!2str!4v1683698205945!5m2!1sen!2str"
            height="354" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          <div class="details">
            <div v-for="c in contact">
              <h3>{{ c.title }}</h3>
              <div class="t2">
                {{ c.adres }}
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<script setup>
import content from "../assets/content.json"
const contact = content.contactDetails

</script>

<style lang="scss" scoped></style>