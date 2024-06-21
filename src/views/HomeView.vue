<template>
  <MainLayout>
    <div class="p-4 bg-white rounded shadow-md">
      <h2 class="text-xl font-bold mb-4">Home</h2>
      <PackingList />
    </div>
  </MainLayout>
</template>

<script>
import PackingList from '../components/PackingList.vue';
import MainLayout from '../components/MainLayout.vue';

export default {
  name: 'HomeView',
  components: {
    PackingList,
    MainLayout
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
