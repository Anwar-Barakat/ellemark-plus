import axios from "axios";
import { defineStore } from "pinia";

const useNewProductStore = defineStore({
  id: "newProducts",
  state: () => ({
    newProducts: [],
    loading: false, // Tracks the loading state
    error: null, // Tracks errors, if any
  }),

  actions: {
    async fetchNewProducts() {
      this.loading = true; // Set loading to true when fetching starts
      this.error = null; // Clear previous errors
      try {
        const response = await axios.get("https://dummyjson.com/products");
        this.newProducts = response.data.products
      } catch (error) {
        this.error = error.message || "An error occurred";
        console.error(error);
      } finally {
        this.loading = false; // Set loading to false when fetching ends
      }
    },
  },
});

export default useNewProductStore;
