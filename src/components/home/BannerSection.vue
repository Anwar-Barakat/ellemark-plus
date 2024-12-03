<template>
  <v-container>
    <v-row align="center" class="banner">
      <!-- Left Side: Image -->
      <v-col cols="12" md="6" class="image-col">
        <v-img
          src="/images/banner-bg.jpg"
          alt="Banner Image"
          class="banner-image"
          aspect-ratio="1.3"
          cover
        ></v-img>
      </v-col>

      <!-- Right Side: Text Content -->
      <v-col cols="12" md="6" class="text-col d-flex flex-column justify-center">
        <div class="text-content">
          <h1 class="text-h3 font-weight-bold mb-4">Huge Saving on UHD Television</h1>
          <h2 class="text-h5 font-weight-medium mb-3">
            Sales up to
            <span>50%</span>
            off
          </h2>
          <p class="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <v-btn
            color="blue-darken-2"
            size="large"
            :to="'/learn-more'"
            variant="outlined"
            rounded="xl"
          >
            Learn More
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style scoped></style>
