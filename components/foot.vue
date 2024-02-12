<template>
  <div class="footer-fillform">
    <section>
      <Fillform />
    </section>
    <section>
      <div div class="footer-bg">
        <footer class="container mpi">
          <div class="text mpb">
            <div class="logo"> Land<span>Club</span></div>
            <div class="p2">Geleceğinizi inşa ederken, Eksland ile her adımınızda emin ellerde olduğunuzu unutmayın.
              Hayallerinizi
              gerçeğe dönüştürmenin güvencesiyiz.</div>
            <div class="socials">
              <NuxtLink v-for="social in socials" :to="`${social.url}`">
                <Icon :name="social.name" class="icon" />
              </NuxtLink>
            </div>
          </div>
          <div class="links">
            <div v-for="col in footer" class="link-col">
              <NuxtLink :to="`/${col.url}`">
                <div class="p1">{{ col.title }}</div>
              </NuxtLink>
              <div class="p4" v-for="link in col.links">
                <NuxtLink :to="`/${link.url}`">
                  {{ link.name }}
                </NuxtLink>
              </div>
            </div>
          </div>

        </footer>
        <div class="copyright container">
          <div class="subtext">
            Copyright © 2000-2023 Eksland.com
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import content from "../assets/content.json"
const footer = content.footer
const socials = content.socials
</script>

<style lang="scss" scoped></style>