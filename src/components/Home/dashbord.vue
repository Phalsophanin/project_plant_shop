<template>
  <v-app>
    <!-- Navbar -->
    <Navbar />

    <!-- Main content -->
    <v-main>
      <v-container>
        <h1>hello</h1>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
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
