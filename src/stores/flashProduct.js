import axios from "axios";
import { defineStore } from "pinia";

const useFlashProductStore = defineStore({
  id: "flashProduct",
  state: () => ({
    flashProducts: [],
    loading: false, // Tracks the loading state
    error: null, // Tracks errors, if any
  }),

  actions: {
    async fetchFlashProducts() {
      this.loading = true; // Set loading to true when fetching starts
      this.error = null; // Clear previous errors
      try {
        const response = await axios.get("https://dummyjson.com/products");
        this.flashProducts = response.data.products
        console.log(this.flashProducts);
      } catch (error) {
        this.error = error.message || "An error occurred";
        console.error(error);
      } finally {
        this.loading = false; // Set loading to false when fetching ends
      }
    },
  },
});

export default useFlashProductStore;
