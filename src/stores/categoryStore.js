import axios from "axios";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categoryStore", {
  state: () => ({
    categories: [],
    products: [],
    loading: true,
    error: null,
  }),
  actions: {
    async fetchStaticCategories() {
      this.loading = true; // Start loading
      try {
        // Static category data
        const staticCategories = [
          {
            id: 1,
            name: "Mobile Phones",
            image:
              "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
          },
          {
            id: 2,
            name: "Laptops",
            image:
              "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
          },
          {
            id: 3,
            name: "Televisions",
            image:
              "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
          },
          {
            id: 4,
            name: "PCs & Accessories",
            image:
              "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
          },
          {
            id: 5,
            name: "Audio & Video",
            image:
              "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
          },
          {
            id: 6,
            name: "Gaming Accessories",
            image:
              "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
          },
          {
            id: 7,
            name: "Home Appliances",
            image:
              "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
          },
          {
            id: 8,
            name: "Kitchen Appliances",
            image:
              "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
          },
          {
            id: 9,
            name: "Cameras",
            image:
              "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
          },
          {
            id: 10,
            name: "Consumables",
            image:
              "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
          },
          {
            id: 11,
            name: "Smart Homes",
            image:
              "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
          },
          {
            id: 12,
            name: "Accessories",
            image:
              "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
          },
        ];

        // Shuffle the categories if desired (optional)
        this.categories = staticCategories.sort(() => 0.5 - Math.random());
        this.loading = false; // Stop loading
      } catch (err) {
        this.error = "Failed to load categories.";
        console.error(err); // Log the error
        this.loading = false; // Stop loading on error
      }
    },
    async fetchCategories() {
      this.loading = true;
      try {
        // Fetch categories from the API
        const response = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        this.categories = response.data.map((category, index) => ({
          id: index + 1, // Generate a unique ID
          name: category.name, // Capitalize the category
          slug: category.slug,
        }));
        this.loading = false;
      } catch (error) {
        this.error = "Failed to load categories.";
        console.error(error);
        this.loading = false;
      }
    },
    async fetchProductsByCategory(slug) {
      this.loading = true;
      try {
        console.log(`https://dummyjson.com/products/category/${slug}`)
        const response = await axios.get(
          `https://dummyjson.com/products/category/${slug}`
        );
        this.products = response.data.products; // Store the products in the state
        this.loading = false;
      } catch (error) {
        this.error = "Failed to load products.";
        console.error(error);
        this.loading = false;
      }
    },
  },
});
