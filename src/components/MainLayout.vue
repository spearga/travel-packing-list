<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/bags">Manage Bags</router-link>
      <router-link to="/categories">Manage Categories</router-link>
      <router-link to="/import-export">Import/Export CSV</router-link>
    </nav>
    <main>
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
nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
}
</style>
