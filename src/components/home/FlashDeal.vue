<template>
  <v-container>
    <v-row>
      <!-- Skeleton Loader -->
      <template v-if="isFetching">
        <v-col v-for="n in 6" :key="n" cols="12" md="4">
          <v-skeleton-loader type="card" />
        </v-col>
      </template>

      <!-- Error Message -->
      <v-alert v-if="error" type="error" outlined>
        {{ error.message || "Failed to load products." }}
      </v-alert>

      <!-- Product List -->
      <template v-else>
        <v-col v-for="product in data" :key="product.id" cols="12" md="4">
          <v-card>
            <v-card-title>{{ product.title }}</v-card-title>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script setup>
import { useFetch } from '@vueuse/core';


const { data, isFetching, error } = useFetch("https://dummyjson.com/products");

console.log(data);
</script>
