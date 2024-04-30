<template>
  <v-app-bar height="108" elevation="0">
    <v-container>
      <v-row justify="space-between" align="center">
        <NuxtLink class="website-logo" :to="localePath('/')">
          <h1>Nuxt3 Starter</h1>
        </NuxtLink>
      </v-row>
    </v-container>
  </v-app-bar>
</template>


<script setup>
const localePath = useLocalePath();
</script>


<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.v-toolbar {
  border-bottom: 1px solid #EBF1FB;

  .website-logo {
    max-width: 198.59px;
    width: 198.59px;
  }

  .nav-links {
    a {
      font-size: 16px;
      font-weight: 500;
      transition: color 0.3s ease-in-out;

      &.router-link-active {
        color: $primary-300;
      }

      &:hover {
        color: $primary-300;
      }
    }
  }
}
</style>