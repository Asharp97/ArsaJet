<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/admin">Admin Homepage</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">User Homepage</NuxtLink>
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>

<script setup>
onMounted(() => {
  useSmoothScroll();
});
</script>

<style scoped lang="scss">
@import "../assets/style/variables.scss";
nav {
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 10px 20px;
    margin: 0;

    li {
      a {
        text-decoration: none;
        color: black;
        font-weight: 500;

        &:hover {
          color: $darkGreen;
        }
      }
    }
  }
  display: flex;
  padding: 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #eee;
  box-shadow: #f5f5f5 0px 2px 4px -1px, #f5f5f5 0px 4px 5px 0px,
    #f5f5f5 0px 1px 10px 0px;
}
</style>
