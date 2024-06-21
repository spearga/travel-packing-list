<template>
    <MainLayout>
      <div class="p-6 bg-white rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4 text-blue-600">Import and Export Data</h2>
  
        <!-- Export Section -->
        <div class="mb-4">
          <button @click="exportData" class="bg-blue-500 text-white p-2 rounded">Export Data to CSV</button>
        </div>
  
        <!-- Import Section -->
        <div>
          <h3 class="text-lg font-bold mb-2 text-blue-600">Import CSV</h3>
          <input type="file" @change="handleFileUpload" class="border p-2 rounded" />
        </div>
      </div>
    </MainLayout>
  </template>
  
  <script>
  import MainLayout from '../components/MainLayout.vue';
  import Papa from 'papaparse';
  
  export default {
    name: 'ImportExportView',
    components: {
      MainLayout
    },
    methods: {
      exportData() {
        const bags = JSON.parse(localStorage.getItem('bags')) || [];
        const packingItems = JSON.parse(localStorage.getItem('packingItems')) || [];
        const categories = JSON.parse(localStorage.getItem('categories')) || ['Clothing', 'Toiletries', 'Electronics', 'Other'];
  
        // Convert each dataset to CSV format
        const bagsCsv = Papa.unparse(bags.map(bag => ({ name: bag, __type: 'Bag' })), { header: true });
        const packingItemsCsv = Papa.unparse(packingItems.map(item => ({ ...item, __type: 'Packing Item' })), { header: true });
        const categoriesCsv = Papa.unparse(categories.map(category => ({ name: category, __type: 'Category' })), { header: true });
  
        // Combine CSV sections with headers
        const combinedCsv = [
          'Bags\n',
          bagsCsv,
          '\nPacking Items\n',
          packingItemsCsv,
          '\nCategories\n',
          categoriesCsv
        ].join('\n');
  
        // Create a Blob and trigger the download
        const blob = new Blob([combinedCsv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', 'packing_data.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;
  
        Papa.parse(file, {
          header: true,
          complete: (results) => {
            const data = results.data;
            const bags = data.filter(row => row.__type === 'Bag').map(row => row.name);
            const packingItems = data.filter(row => row.__type === 'Packing Item').map(row => {
              delete row.__type;
              return row;
            });
            const categories = data.filter(row => row.__type === 'Category').map(row => row.name);
  
            localStorage.setItem('bags', JSON.stringify(bags));
            localStorage.setItem('packingItems', JSON.stringify(packingItems));
            localStorage.setItem('categories', JSON.stringify(categories));
  
            alert('Data imported successfully!');
          },
          error: (error) => {
            console.error(error);
            alert('An error occurred while importing the CSV file.');
          }
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  