<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="openDrawerCard"></v-app-bar-nav-icon>
    <v-toolbar-title>My App</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="toggleTheme">
      <v-icon>{{ isDark ? "mdi-weather-sunny" : "mdi-weather-night" }}</v-icon>
    </v-btn>
    <v-navigation-drawer v-model="drawer" app> </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup>
import { ref, computed, inject } from "vue";
import { useDisplay, useTheme } from "vuetify";

const emitter = inject("emitter");
const openDrawerCard = () => emitter.emit("open-drawer-card");

const display = useDisplay();
const theme = useTheme();
const drawer = ref(false);

const mobileView = computed(() => display.smAndDown.value);
const isDark = computed(() => theme.global.name.value === "dark");

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? "light" : "dark";
};
</script>

<style scoped></style>
