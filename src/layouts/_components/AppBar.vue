<template>
  <v-app-bar app color="blue-darken-3">
    <v-container>
      <div class="flex items-center justify-between">
        <div>
          <v-img
            :width="120"
            aspect-ratio="16/9"
            cover
            src="/public/images/logo.png"
          ></v-img>
        </div>
        <div>
          <v-btn text>Home</v-btn>
          <v-btn text>About</v-btn>
          <v-btn text>Contact</v-btn>
        </div>
        <div class="flex items-center gap-1">
          <v-btn icon color="yellow-darken-2">
            <v-icon @click="openDrawerCard">mdi-shopping-outline</v-icon>
          </v-btn>
          <v-btn icon @click="toggleTheme" color="yellow-darken-2">
            <v-icon>{{ isDark ? "mdi-weather-sunny" : "mdi-weather-night" }}</v-icon>
          </v-btn>
          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn v-bind="activatorProps" color="yellow-darken-2" icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="Search">
                <v-card-text>
                  <v-text-field
                    :loading="loading"
                    append-inner-icon="mdi-magnify"
                    density="compact"
                    label="Search templates"
                    variant="solo"
                    hide-details
                    single-line
                    @click:append-inner="onClick"
                  ></v-text-field>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text="Search" @click="isActive.value = false"></v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
          <v-spacer></v-spacer>
        </div>
      </div>
    </v-container>
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
