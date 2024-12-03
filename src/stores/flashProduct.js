import axios from "axios";
import { defineStore } from "pinia";

const useFlashProductStore = defineStore({
  id: "flashProduct",
  state: () => ({
    flashProducts: [],
  }),

  actions: {
    async fetchFlashProducts() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        this.flashProducts = response.data.products;
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export default useFlashProductStore;
