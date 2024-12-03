<template>
  <div class="layout">
    <v-layout class="position-relative">
      <DrawerCard />
      <AppBar />
      <v-main>
        <slot></slot>
      </v-main>
      <Footer />
    </v-layout>
  </div>
</template>

<script setup>
import Footer from "./_components/Footer.vue";
import DrawerCard from "./_components/DrawerCard.vue";
import AppBar from "./_components/AppBar.vue";

import { ref } from "vue";
const drawer = ref(false);
</script>

<style lang="scss" scoped></style>
