<template>
  <v-container>
    <v-row class="gap-4 justify-center">
      <v-col
        v-for="(item, index) in data"
        :key="index"
        cols="12"
        md="4"
        class="p-4 flex justify-center"
      >
        <v-card
          class="w-full max-w-sm bg-gray-50 shadow-md hover:shadow-lg transition-shadow"
        >
          <v-card-title
            class="flex items-center space-x-4 text-lg font-semibold text-gray-800"
          >
            <v-icon :icon="item.icon" class="text-blue-500 text-3xl"></v-icon>
            <span>{{ item.title }}</span>
          </v-card-title>
          <v-card-text class="text-gray-600">
            {{ item.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const data = ref([
  {
    title: "quality & saving",
    description: "comprehensive quality control",
    icon: "mdi-check-circle",
  },
  {
    title: "fast delivery",
    description: "quick and efficient shipping services",
    icon: "mdi-truck-fast",
  },
  {
    title: "customer support",
    description: "24/7 assistance for your needs",
    icon: "mdi-headset",
  },
  {
    title: "secure payments",
    description: "guaranteed safe transactions",
    icon: "mdi-lock",
  },
  {
    title: "eco-friendly",
    description: "sustainable and green practices",
    icon: "mdi-leaf",
  },
]);
</script>

<style lang="scss" scoped></style>
