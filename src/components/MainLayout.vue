<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <nav class="bg-blue-600 text-white p-4 rounded shadow-md mb-6">
      <router-link to="/" class="mr-4 hover:text-gray-200">Home</router-link>
      <router-link to="/bags" class="mr-4 hover:text-gray-200">Manage Bags</router-link>
      <router-link to="/categories" class="mr-4 hover:text-gray-200">Manage Categories</router-link>
      <router-link to="/import-export" class="hover:text-gray-200">Import/Export CSV</router-link>
    </nav>
    <main class="container mx-auto">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'MainLayout'
};
</script>

<style scoped>
nav a {
  margin-right: 10px;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
