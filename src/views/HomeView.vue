<template>
    <BannerSection />
    <FeaturedSection />
    <TopOfferSection />
    <ProductSwiperSection :flashProducts="flashProducts" :loading="loading"/>
    <TopCategorySection />
    <NewProductSection />
    <QualityFeatureSection />
</template>

<script setup>
import BannerSection from '../components/home/BannerSection.vue';
import FeaturedSection from '../components/home/FeaturedSection.vue';
import ProductSwiperSection from '../components/home/ProductSwiperSection.vue';
import NewProductSection from '../components/home/NewProductSection.vue';
import QualityFeatureSection from '../components/home/QualityFeatureSection.vue';
import TopCategorySection from '../components/home/TopCategorySection.vue';
import TopOfferSection from '../components/home/TopOfferSection.vue';

import useFlashProductStore from '../stores/flashProductStore';

import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const flashProductStore = useFlashProductStore();
const { flashProducts, loading } = storeToRefs(flashProductStore);

onMounted(() => {
  flashProductStore.fetchFlashProducts()
});


</script>

<style lang="scss" scoped>

</style>