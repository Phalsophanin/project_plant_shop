<template>
  <v-app-bar color="green lighten-2" elevate-on-scroll flat>
    <!-- Logo -->
    <v-img
      src="@/assets/logo.png"
      alt="Logo"
      contain
      width="50"
      height="50"
      class="mr-3 rounded"
    ></v-img>

    <!-- Brand Name -->
    <div class="d-flex flex-column mr-5">
      <span class="text-subtitle-1 font-weight-bold line-height-1">
        PLANT
      </span>
      <span class="text-subtitle-2 font-weight-light line-height-1">
        SHOP
      </span>
    </div>

    <!-- Navigation Links -->
    <v-spacer></v-spacer>
    <v-btn
      v-for="link in links"
      :key="link.text"
      :to="link.to"
      text
    >
      {{ link.text }}
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'

const links = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/' },
  { text: 'Contact', to: '/' },
]
</script>

<style scoped>
.line-height-1 {
  line-height: 1;
}
.text-subtitle-1 {
  font-size: 1.2rem;
}
.text-subtitle-2 {
  font-size: 1rem;
}
</style>
