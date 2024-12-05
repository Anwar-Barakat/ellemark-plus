<template>
  <v-container>
    <Swiper
      :modules="modules"
      :pagination="{ clickable: true }"
      :navigation="false"
      :space-between="30"
      :slides-per-view="4"
      class="py-16"
    >
      <SwiperSlide v-for="flashProduct in flashProducts" :key="flashProduct.id">
        <!-- Skeleton Loader (when loading is true) -->
        <v-skeleton-loader
          v-if="loading"
          :loading="loading"
          type="card"
          class="mb-4"
        >
          <!-- Skeleton content -->
          <v-card elevation="0">
            <v-img height="200px" src="" cover></v-img>
            <v-card-title></v-card-title>
            <v-card-subtitle></v-card-subtitle>
          </v-card>
        </v-skeleton-loader>

        <!-- Actual content (when loading is false) -->
        <v-card v-else elevation="0">
          <v-img
            :height="'200px'"
            :src="toggleImage[flashProduct.id] || flashProduct.thumbnail"
            cover
          ></v-img>
          <v-card-title class="line-clamp-1 text-start">{{
            flashProduct.title
          }}</v-card-title>
          <v-rating
            class="px-3"
            v-model="flashProduct.rating"
            color="yellow-darken-2"
            dense
            half-increments
            readonly
            size="26"
            density="compact"
          >
          </v-rating>
          <v-card-text>
            <div class="flex items-center gap-1 justify-start">
              <del class="text-red-darken-2">
                AED {{ flashProduct.price }}
              </del>
              <span v-if="flashProduct.discountPercentage"> From </span>

              <span
                class="text-green-lighten-1 font-bold text-lg"
                v-if="flashProduct.discountPercentage"
                color=""
              >
                AED
                {{
                  (
                    flashProduct.price -
                    (flashProduct.price * flashProduct.discountPercentage) / 100
                  ).toFixed(2)
                }}
              </span>
            </div>
          </v-card-text>
          <v-btn-toggle
            v-model="toggleImage[flashProduct.id]"
            class="flex justify-start gap-1"
          >
            <v-btn
              v-for="(image, index) in flashProduct.images"
              :key="index"
              :value="image"
              @click="toggleImage[flashProduct.id] = image"
              size="sm"
              class="border border-gray-300"
            >
              <!-- {{ flashProduct.images.length }} -->
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
      </SwiperSlide>
    </Swiper>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
import useFlashProductStore from "../../stores/flashProduct";
import { storeToRefs } from "pinia";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";

const flashProductStore = useFlashProductStore();
const { flashProducts, loading, error } = storeToRefs(flashProductStore);
console.log(flashProducts);
onMounted(() => {
  flashProductStore.fetchFlashProducts().then(() => {
    Swiper.update();
  });
});

const toggleImage = ref({});

const modules = [Pagination, Navigation];
</script>
