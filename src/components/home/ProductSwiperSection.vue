<template>
  <v-container>
    <div>
      <h3 color="red-darken-2">Flash Deals</h3>
      <span>Shop All</span>
    </div>
    <Swiper
      :modules="modules"
      :pagination="{ clickable: true }"
      :navigation="false"
      :space-between="30"
      :slides-per-view="4"
      class="py-16"
    >
      <SwiperSlide v-for="flashProduct in flashProducts" :key="flashProduct.id">
        <ProductCard :product="flashProduct" :loading="loading" />
      </SwiperSlide>
    </Swiper>
  </v-container>
</template>

<script setup>

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import ProductCard from "../ProductCard.vue";
const modules = [Pagination, Navigation];

defineProps({
  flashProducts: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
})
</script>
