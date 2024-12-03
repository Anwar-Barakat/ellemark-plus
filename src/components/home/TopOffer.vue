<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <v-card class="mx-auto w-full">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-img
                v-bind="props"
                :class="[
                  'align-end',
                  'text-white transition-all',
                  { 'opacity-75': isHovering },
                ]"
                height="300"
                src="/public/images/playstations.webp"
                cover
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
            </template>
          </v-hover>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card class="mx-auto w-full">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-img
                v-bind="props"
                :class="[
                  'align-end',
                  'text-white transition-all',
                  { 'opacity-75': isHovering },
                ]"
                height="300"
                src="/public/images/chairs.webp"
                cover
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
            </template>
          </v-hover>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card class="mx-auto w-full">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-img
                v-bind="props"
                :class="[
                  'align-end',
                  'text-white transition-all',
                  { 'opacity-75': isHovering },
                ]"
                height="300"
                src="/public/images/headset.webp"
                cover
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
            </template>
          </v-hover>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="mx-auto w-full">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-img
                v-bind="props"
                :class="[
                  'align-end',
                  'text-white transition-all',
                  { 'opacity-75': isHovering },
                ]"
                src="/public/images/laptops.webp"
                contain
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
            </template>
          </v-hover>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="mx-auto w-full">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-img
                v-bind="props"
                :class="[
                  'align-end',
                  'text-white transition-all',
                  { 'opacity-75': isHovering },
                ]"
                src="/public/images/iphones.webp"
                contain
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
            </template>
          </v-hover>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped></style>
