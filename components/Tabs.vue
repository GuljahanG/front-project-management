<template>
    <div>
      <div class="tabs flex space-x-4">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          @click="activeTab = tab.name"
          :class="[
            'tab flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors',
            { 'tab-active': activeTab === tab.name },
          ]"
        >
          <i :class="['pi', tab.icon, 'text-lg']"></i>
          <span>{{ tab.name }}</span>
        </button>
      </div>
      <div class="tab-content mt-6 p-6 bg-white rounded-lg shadow-lg">
        <slot :name="activeTab"></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Define the tabs with icons
  const tabs = [
    { name: 'Tasks', icon: 'pi-list' },
    { name: 'Projects', icon: 'pi-folder-open' },
    { name: 'Users', icon: 'pi-users' },
  ]
  
  // State to manage the active tab
  const activeTab = ref(tabs[0].name)
  </script>
  
  <style scoped>
  .tab {
    cursor: pointer;
    font-weight: 500;
    color: #4b5563;
  }
  
  .tab-active {
    background-color: #4483f7;
    color: #ffffff;
  }
  
  .tab:hover {
    color: #4483f7;
  }
  </style>