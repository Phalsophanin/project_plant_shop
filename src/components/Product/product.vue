<template>
  <v-container class="py-10">
    <v-row dense>
      <v-col
        v-for="(product, index) in products"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="pa-4" elevation="1" rounded="lg">
          
          <v-img
            :src="product.image"
            height="200"
            cover
            class="rounded"
          ></v-img>

          <!-- PRICE -->
          <div class="mt-4 text-orange-darken-1 font-weight-bold">
            from ${{ product.price }}
          </div>

          <!-- NAME -->
          <div class="text-grey-darken-2 mt-1 text-body-1">
            {{ product.name }}
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
const products = [
  {
    name: "Monstera 'Split-Leaf'",
    price: "15.99",
    image: "/mnt/data/953d2b3f-b823-4d34-a304-bb64cb5ec4be.png" // replace with real image
  },
  {
    name: "Winter Plant Shipping Protection",
    price: "4.99",
    image: "/your/image2.jpg"
  },
  {
    name: "Parlor Palm",
    price: "14.99",
    image: "/your/image3.jpg"
  },
  {
    name: "Monstera Adansonii 'Swiss Cheese'",
    price: "12.99",
    image: "/your/image4.jpg"
  },
  {
    name: "Pothos 'Golden'",
    price: "21.99",
    image: "/your/image5.jpg"
  },
  {
    name: "Spider Plant 'Reverse'",
    price: "14.99",
    image: "/your/image6.jpg"
  },
  {
    name: "Pilea Peperomioides 'Chinese Money'",
    price: "19.99",
    image: "/your/image7.jpg"
  },
    {
    name: "Pilea Peperomioides 'Chinese Money'",
    price: "19.99",
    image: "/your/image7.jpg"
  },
 
];
</script>


<style scoped>
.text-orange-darken-1 {
  color: #e58a39;
}
</style>
