<template>
  <div class="p-4 bg-white rounded shadow-md">
    <h2 class="text-xl font-bold mb-4">Packing List</h2>
    <div class="mb-4">
      <input
        v-model="newItem"
        @keyup.enter="addItem"
        placeholder="Add a new item"
        class="border p-2 rounded mr-2"
      />
      <select v-model="selectedCategory" class="border p-2 rounded mr-2">
        <option disabled value="">Select a category</option>
        <option v-for="category in categories" :key="category">{{ category }}</option>
      </select>
      <select v-model="selectedBag" class="border p-2 rounded mr-2">
        <option disabled value="">Select a bag</option>
        <option v-for="bag in bags" :key="bag">{{ bag }}</option>
      </select>
      <button @click="addItem" class="bg-blue-500 text-white p-2 rounded">Add Item</button>
    </div>
    <ul>
      <li v-for="(item, index) in packingItems" :key="index" class="flex items-center justify-between p-2 border-b">
        <div>
          <input type="checkbox" v-model="item.packed" @change="saveItems" class="mr-2" />
          {{ item.name }} - {{ item.bag }} ({{ item.category }})
        </div>
        <button @click="deleteItem(index)" class="bg-red-500 text-white p-1 rounded">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: '',
      selectedCategory: '',
      selectedBag: '',
      packingItems: JSON.parse(localStorage.getItem('packingItems')) || [],
      bags: JSON.parse(localStorage.getItem('bags')) || [],
      categories: JSON.parse(localStorage.getItem('categories')) || ['Clothing', 'Toiletries', 'Electronics', 'Other']
    };
  },
  methods: {
    addItem() {
      if (this.newItem.trim() && this.selectedBag && this.selectedCategory) {
        this.packingItems.push({
          name: this.newItem.trim(),
          bag: this.selectedBag,
          category: this.selectedCategory,
          packed: false
        });
        this.newItem = '';
        this.selectedBag = '';
        this.selectedCategory = '';
        this.saveItems();
      }
    },
    deleteItem(index) {
      this.packingItems.splice(index, 1);
      this.saveItems();
    },
    saveItems() {
      localStorage.setItem('packingItems', JSON.stringify(this.packingItems));
    }
  },
  mounted() {
    this.categories = JSON.parse(localStorage.getItem('categories')) || ['Clothing', 'Toiletries', 'Electronics', 'Other'];
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
