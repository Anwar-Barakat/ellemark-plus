<template>
  <div v-for="product in flashProducts" :key="product.id">
    <h1>{{ product.title }}</h1>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import useFlashProductStore from "../../stores/flashProduct";
import { storeToRefs } from "pinia";

const flashProductStore = useFlashProductStore();
onMounted(() => {
  flashProductStore.fetchFlashProducts();
});

const { flashProducts } = storeToRefs(flashProductStore);
console.log(flashProducts);
</script>
