<template>
  <v-app>
    <v-app-bar flat class="px-10" color="#6f8e8c">
    </v-app-bar>
    <v-app-bar flat color="white" elevation="1" height="80">
      <v-container class="d-flex justify-space-between align-center">
        <h3 class="font-weight-bold">ifplants</h3>
        <div class="d-flex">
          <v-btn variant="text">Home</v-btn>
          <v-btn variant="text">Products</v-btn>
          <v-btn variant="text">News</v-btn>
          <v-btn variant="text">Services</v-btn>
          <v-btn variant="text">Research</v-btn>
          <v-btn variant="text">About</v-btn>
        </div>
      </v-container>
    </v-app-bar>
    <section class="hero">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">
          Your partner to manage<br />
          the purchase of plants in Spain.
        </h1>
      </div>
      <v-btn class="arrow left" icon size="40">
        <v-icon size="40">mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn class="arrow right" icon size="40">
        <v-icon size="40">mdi-chevron-right</v-icon>
      </v-btn>
    </section>
  </v-app>
</template>

<script setup>
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  background-image: url("/mnt/data/578f2ecf-22d2-4803-980e-0a0dccb7101f.png"); 
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.hero-title {
  font-size: 42px;
  font-weight: 600;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  background: rgba(0, 0, 0, 0.3);
}

.arrow.left {
  left: 20px;
}

.arrow.right {
  right: 20px;
}
</style>
