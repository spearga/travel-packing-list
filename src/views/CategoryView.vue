<template>
  <MainLayout>
    <div class="p-6 bg-white rounded shadow-md">
      <h2 class="text-2xl font-bold mb-4 text-blue-600">Manage Categories</h2>
      <input
        v-model="newCategory"
        @keyup.enter="addCategory"
        placeholder="Add a new category"
        class="border p-2 rounded mr-2"
      />
      <button @click="addCategory" class="bg-blue-500 text-white p-2 rounded">Add Category</button>
      <ul class="mt-4">
        <li v-for="(category, index) in categories" :key="index" class="flex items-center justify-between p-2 border-b">
          {{ category }}
          <button @click="deleteCategory(index)" class="bg-red-500 text-white p-1 rounded">Delete</button>
        </li>
      </ul>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '../components/MainLayout.vue';

export default {
  name: 'CategoryView',
  components: {
    MainLayout
  },
  data() {
    return {
      newCategory: '',
      categories: JSON.parse(localStorage.getItem('categories')) || ['Clothing', 'Toiletries', 'Electronics', 'Other']
    };
  },
  methods: {
    addCategory() {
      if (this.newCategory.trim() && !this.categories.includes(this.newCategory.trim())) {
        this.categories.push(this.newCategory.trim());
        this.newCategory = '';
        this.saveCategories();
      }
    },
    deleteCategory(index) {
      this.categories.splice(index, 1);
      this.saveCategories();
    },
    saveCategories() {
      localStorage.setItem('categories', JSON.stringify(this.categories));
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
