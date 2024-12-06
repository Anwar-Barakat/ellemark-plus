<template>
  <BannerSection />
  <FeaturedSection />
  <TopOfferSection />

  <!-- ProductSwiperSection for Flash Deals -->
  <ProductSwiperSection
    :products="flashProducts"
    :loading="loading"
    title="Flash Deals"
  />

  <!-- ProductSwiperSection for Mobile Products -->
  <ProductSwiperSection
    :products="mobileProducts"
    :loading="loading"
    title="Mobile Products"
  />

  <TopCategorySection />
  <NewProductSection />
  <QualityFeatureSection />
</template>

<script setup>
import BannerSection from "../components/home/BannerSection.vue";
import FeaturedSection from "../components/home/FeaturedSection.vue";
import ProductSwiperSection from "../components/home/ProductSwiperSection.vue";
import NewProductSection from "../components/home/NewProductSection.vue";
import QualityFeatureSection from "../components/home/QualityFeatureSection.vue";
import TopCategorySection from "../components/home/TopCategorySection.vue";
import TopOfferSection from "../components/home/TopOfferSection.vue";

import useProductStore from "../stores/productStore";

import { onMounted } from "vue";
import { storeToRefs } from "pinia";

// Initialize the store
const productStore = useProductStore();
const { flashProducts, mobileProducts, loading } = storeToRefs(productStore);

// Fetch both flash products and mobile products when the component mounts
onMounted(() => {
  productStore.fetchFlashProducts();
  productStore.fetchMobileProducts();
});
</script>
