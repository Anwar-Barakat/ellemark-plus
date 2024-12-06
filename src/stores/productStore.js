import axios from "axios";
import { defineStore } from "pinia";

const useProductStore = defineStore({
  id: "productStore",
  state: () => ({
    flashProducts: [], // Stores flash deal products
    mobileProducts: [], // Stores mobile products
    loading: false, // Tracks loading state
    error: null, // Tracks errors, if any
  }),

  actions: {
    // Fetch Flash Products
    async fetchFlashProducts() {
      this.loading = true; // Start loading
      this.error = null; // Reset error
      try {
        const response = await axios.get("https://dummyjson.com/products");
        this.flashProducts = response.data.products;
      } catch (error) {
        this.error = error.message || "An error occurred while fetching flash products";
        console.error(error);
      } finally {
        this.loading = false; // Stop loading
      }
    },

    // Fetch Mobile Products
    async fetchMobileProducts() {
      this.loading = true; // Start loading
      this.error = null; // Reset error
      try {
        const response = await axios.get("https://dummyjson.com/products/category/smartphones");
        this.mobileProducts = response.data.products;
      } catch (error) {
        this.error = error.message || "An error occurred while fetching mobile products";
        console.error(error);
      } finally {
        this.loading = false; // Stop loading
      }
    },
  },
});

export default useProductStore;
