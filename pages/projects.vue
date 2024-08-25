<template>
    <div class="mr-10">
      <h1 class="text-2xl font-semibold text-gray-800 mb-4">Projects</h1>
      <div class="space-y-4">
        <div v-for="project in projects" :key="project.id" class="bg-gray-200 p-4 rounded-md">
          <h2 class="text-xl font-semibold">{{ project.name }}</h2>
          <p class="text-gray-600">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const projects = ref([
    { id: 1, name: 'E-commerce Platform', description: 'A platform for buying and selling products.' },
    { id: 2, name: 'Social Media Dashboard', description: 'A dashboard for managing social media posts.' },
    { id: 3, name: 'Portfolio Website', description: 'A personal portfolio to showcase work.' }
  ]);

</script>