<template>
  <v-container>
    <!-- Show loading state -->
    <div v-if="loading">Loading products...</div>

    <!-- Show error message -->
    <div v-if="error">{{ error }}</div>

    <!-- Show products if loaded -->
    <div v-if="!loading && !error">
      <h2>Products in Category: {{ categorySlug }}</h2>
      <v-row>
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="12"
          sm="12"
          md="6"
          lg="3"
        >
          <ProductCard :product="product" :loading="loading" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import { useCategoryStore } from "@/stores/categoryStore"; // Adjust the path if needed
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import ProductCard from "../components/ProductCard.vue"

// Access the route to get the category slug
const route = useRoute();
const categorySlug = route.params.slug; // Extract the category slug from the URL

// Use the category store
const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.fetchProductsByCategory(categorySlug);
});

const { products, loading, error } = storeToRefs(categoryStore);
console.log(products);
</script>

<style lang="scss" scoped>
/* Add your styles here */
</style>
