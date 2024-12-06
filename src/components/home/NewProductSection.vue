<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="7">
        <Swiper
          :modules="modules"
          :pagination="{ clickable: true }"
          :navigation="false"
          :space-between="30"
          :slides-per-view="3"
          class="py-16"
        >
          <SwiperSlide v-for="newProduct in newProducts" :key="newProduct.id">
            <ProductCard :product="newProduct" :loading="loading" />
          </SwiperSlide>
        </Swiper>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="5">
        <v-img
          :src="'/public/images/vr-banner.webp'"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import ProductCard from "../ProductCard.vue";
import useNewProductStore from "@/stores/newProductStore";

const newProductStore = useNewProductStore();
const { newProducts, loading } = storeToRefs(newProductStore);
const modules = [Pagination, Navigation];
onMounted(() => {
  newProductStore.fetchNewProducts();
});
</script>

<style lang="scss" scoped></style>
