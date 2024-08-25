<!-- <template>
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
  </style> -->

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div class="w-64 bg-gray-800 text-white p-5">
      <h2 class="text-2xl font-semibold mb-6">Navigation</h2>
      <div class="space-y-4">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          @click="setActiveTab(tab.name)"
          :class="[
            'flex items-center space-x-2 px-4 py-2 rounded-lg w-full text-left transition-colors',
            { 'bg-gray-700': activeTab === tab.name }
          ]"
        >
          <i :class="['pi', tab.icon, 'text-lg']"></i>
          <span>{{ tab.name }}</span>
        </button>
      </div>
    </div>
    
    <!-- Main Content -->
    <div class="flex-1 p-5 bg-gray-100">
      <div class="container mx-auto">
        <div class="tab-content mt-6 p-6 bg-white rounded-lg shadow-lg">
          <component :is="activeComponent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TaskBoard from '~/components/Tasks/TaskBoard.vue'

// Define the tabs with icons
const tabs = [
  { name: 'Tasks', icon: 'pi-list', component: TaskBoard },
  { name: 'Projects', icon: 'pi-folder-open', component: () => import('~/components/Projects/Projects.vue') },
  { name: 'Users', icon: 'pi-users', component: () => import('~/components/Users/Users.vue') },
]

// State to manage the active tab
const activeTab = ref(tabs[0].name)

// Function to set the active tab and load the corresponding component
const setActiveTab = (tabName) => {
  activeTab.value = tabName
}

// Compute the active component to render
const activeComponent = computed(() => {
  return tabs.find(tab => tab.name === activeTab.value)?.component || null
})
</script>