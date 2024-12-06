<template>
  <v-container>
    <!-- Banner Section -->
    <v-img
      :src="'/public/images/cyber-banner.webp'"
      cover
      class="mb-4"
      height="200px"
    ></v-img>
    <!-- Categories Section -->
    <v-row justify="center" class="categories">
      <v-col
        v-for="(category, index) in categories"
        :key="index"
        cols="2"
        sm="2"
        md="2"
        lg="2"
        class="text-center"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-img
            :src="category.image"
            :class="[
              'mx-auto mb-2',
              isHovering
                ? 'transform scale-110 shadow-lg'
                : 'transform scale-100',
            ]"
            max-width="80px"
            height="80px"
            rounded
            v-bind="props"
          ></v-img>
        </v-hover>
        <div class="text-center text-black">{{ category.name }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from "vue";
import { useCategoryStore } from "@/stores/categoryStore";
import { storeToRefs } from "pinia";

const categoryStore = useCategoryStore();
const { categories, loading, error } = storeToRefs(categoryStore);

onMounted(() => {
  categoryStore.fetchStaticCategories();
});
</script>

<style scoped>
.categories {
  margin-top: 16px;
}
</style>
