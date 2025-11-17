<template>
  <v-navigation-draer v-model="drawer" temporary>
    <v-list dense>
      <v-list-item link to="/">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/about">
        <v-list-item-title>About</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-draer>

   <v-app-bar :color="navColor1" flat class="evevation-2 rounded pt-1">
    <div>
      <v-img
        src="@/assets/logo.png"
        alt="Logo"
        class="mr-2 rounded"
        contain
        width="50"
        height="50"
      >
      </v-img>
      <div class="d-flex flex-column">
        <span class="text-subtitile-2 font-weight-bold line-height-1">
          PLANT
        </span>
        <span class="text-subtitile-2 font-weight-light line-height-1">
          SHOP
        </span>
      </div>
    </div>
 </v-app-bar>
</template>

<script setup>  
import { ref } from 'vue';
const navColor1 = ref('#A3D9A5');
const drawer = ref(false);

const links = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
];
</script>

<style scoped>
.line-height-1 {
  line-height: 1;
}
.text-subtitile-2 {
  font-size: 1.1rem;
}
</style>