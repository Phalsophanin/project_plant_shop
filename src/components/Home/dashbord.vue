<template>
  <v-app>
    <navbar />
    <v-main>
      <v-container>
      </v-container>
    </v-main>

  </v-app>
</template>

<script setup>

import { ref } from "vue";
import navbar from "../navbar/navbar.vue";

const navColor1 = "#05204A";
const drawer = ref(false);

import Navbar from '../navbar/Navbar.vue';

</script>

<style scoped>
.line-height-1 {
  line-height: 1;
}

.text-subtitle-2 {
  font-size: 1.1rem;
}
</style>
