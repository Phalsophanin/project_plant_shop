<template>
  <v-app>
    <v-main>
      <Navbar />

      <Product />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

import Navbar from "../navbar/navbar.vue";
import Product from "../Product/product.vue";

const navColor1 = "#05204A";
const drawer = ref(false);
</script>

<style scoped>
.line-height-1 {
  line-height: 1;
}

.text-subtitle-2 {
  font-size: 1.1rem;
}
</style>
