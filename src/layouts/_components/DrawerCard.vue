<template>
  <v-navigation-drawer v-model="drawer" elevation="4" location="left" temporary>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis
      obcaecati odio consequuntur aliquid! Enim ab eum iusto laudantium quia!
    </p>
  </v-navigation-drawer>
</template>

<script setup>
import { inject, ref } from "vue";
const drawer = ref(false);

const emitter = inject("emitter");
emitter.on("open-drawer-card", () => (drawer.value = !drawer.value));
</script>
