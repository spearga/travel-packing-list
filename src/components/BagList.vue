<template>
  <div>
    <input v-model="newBag" @keyup.enter="addBag" placeholder="Add a new bag" class="border p-2 rounded mr-2" />
    <button @click="addBag" class="bg-blue-500 text-white p-2 rounded">Add Bag</button>
    <ul class="mt-4">
      <li v-for="(bag, index) in bags" :key="index" class="flex items-center justify-between p-2 border-b">
        {{ bag }}
        <button @click="deleteBag(index)" class="bg-red-500 text-white p-1 rounded">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newBag: '',
      bags: JSON.parse(localStorage.getItem('bags')) || []
    };
  },
  methods: {
    addBag() {
      if (this.newBag.trim() && !this.bags.includes(this.newBag.trim())) {
        this.bags.push(this.newBag.trim());
        this.newBag = '';
        this.saveBags();
      }
    },
    deleteBag(index) {
      this.bags.splice(index, 1);
      this.saveBags();
    },
    saveBags() {
      localStorage.setItem('bags', JSON.stringify(this.bags));
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>

