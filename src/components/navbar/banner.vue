<template>
  <v-app-bar>
   <section class="hero">
      <div class="overlay"></div>

      <div class="hero-content">
        <h1 class="hero-title">
          Your partner to manage<br />
          the purchase of plants in Spain.
        </h1>
      </div>

      <!-- Slider Arrows -->
      <v-btn class="arrow left" icon size="40">
        <v-icon size="40">mdi-chevron-left</v-icon>
      </v-btn>

      <v-btn class="arrow right" icon size="40">
        <v-icon size="40">mdi-chevron-right</v-icon>
      </v-btn>
    </section>
 </v-app-bar>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  background-image: url("https://static.vecteezy.com/system/resources/thumbnails/003/405/442/small_2x/small-trees-are-growing-in-fertile-soil-free-video.jpg"); 
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