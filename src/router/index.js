import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BagsView from '../views/BagsView.vue';
import CategoryView from '../views/CategoryView.vue';
import ImportExportView from '../views/ImportExportView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/bags', name: 'Bags', component: BagsView },
  { path: '/categories', name: 'Categories', component: CategoryView },
  { path: '/import-export', name: 'ImportExport', component: ImportExportView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
