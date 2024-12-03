import axios from "axios";
import { defineStore } from "pinia";
import { reactive } from "vue";

const useProductStore = defineStore({
  id: "product",
  state: () => ({
    flashProducts: [],
  }),

  actions: {
    async fetchFlashProducts() {
      try {
        const response = await axios
          .get("https://dummyjson.com/products")
          .then((res) => (this.flashProducts = res.data.products))
          .catch((error) => console.error(error));
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export default useProductStore;
