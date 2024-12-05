<template>
  <v-card v-if="!loading" elevation="0">
    <v-img
      :height="'200px'"
      :src="currentImage || product.thumbnail"
      cover
    ></v-img>
    <v-card-title class="line-clamp-1 text-start">{{
      product.title
    }}</v-card-title>
    <v-rating
      class="px-3"
      v-model="product.rating"
      color="yellow-darken-2"
      dense
      half-increments
      readonly
      size="26"
      density="compact"
    ></v-rating>
    <v-card-text>
      <div class="flex items-center gap-1 justify-start">
        <del class="text-red-darken-2"> AED {{ product.price }} </del>
        <span v-if="product.discountPercentage"> From </span>
        <span
          class="text-green-lighten-1 font-bold text-lg"
          v-if="product.discountPercentage"
        >
          AED
          {{
            (
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)
          }}
        </span>
      </div>
    </v-card-text>
    <v-btn-toggle v-model="currentImage" class="flex justify-start gap-1">
      <v-btn
        v-for="(image, index) in product.images"
        :key="index"
        :value="image"
        @click="currentImage = image"
        size="sm"
        class="border border-gray-300"
      >
        <v-img :src="image" width="50px" height="50px" contain></v-img>
      </v-btn>
    </v-btn-toggle>
    <div class="mt-2">
      <v-btn
        variant="outlined"
        class="text-capitalize"
        rounded="xl"
        size="large"
        color="blue-darken-2"
        density="compact"
      >
        View options
      </v-btn>
    </div>
  </v-card>

  <!-- Skeleton Loader -->
  <v-skeleton-loader v-else :loading="loading" type="card" class="mb-4">
    <v-card elevation="0">
      <v-img height="200px" src="" cover></v-img>
      <v-card-title></v-card-title>
      <v-card-subtitle></v-card-subtitle>
    </v-card>
  </v-skeleton-loader>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  product: Object,
  loading: Boolean,
});

const currentImage = ref(null);

// Reset image toggle if product changes
watch(
  () => props.product,
  () => {
    currentImage.value = null;
  }
);
</script>

<style scoped>
/* Add custom styles if needed */
</style>
