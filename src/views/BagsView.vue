<template>
  <MainLayout>
    <div class="p-4 bg-white rounded shadow-md">
      <h2 class="text-xl font-bold mb-4">Manage Bags</h2>
      <BagList />
    </div>
  </MainLayout>
</template>

<script>
import BagList from '../components/BagList.vue';
import MainLayout from '../components/MainLayout.vue';

export default {
  name: 'BagsView',
  components: {
    BagList,
    MainLayout
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
