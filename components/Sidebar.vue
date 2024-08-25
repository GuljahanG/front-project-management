<template>
    <div class="w-64 text-primary-800 p-5 h-full border-r border-neutral-200">
      <h2 class="mb-10 mt-6 text-2xl font-semibold text-primary-800"><i class='pi pi-wave-pulse text-xl'></i> ProjectPulse</h2>
      <div class="space-y-2 mt-6">
        <NuxtLink
          v-for="tab in tabs"
          :key="tab.name"
          :to="tab.route"
          :class="[
            'flex items-center space-x-4 px-4 py-2 rounded-lg w-full text-left transition-colors bg-primary-700',
            {
              'bg-primary-900 text-white border border-primary-1000': activeTab === tab.name,
              'hover:bg-primary-1100': activeTab !== tab.name,
            }
          ]"
          @click="setActiveTab(tab.name)"
        >
          <i :class="['pi', tab.icon, 'text-xl']"></i>
          <span>{{ tab.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  
  // Define the tabs with icons and routes
  const tabs = [
    { name: 'Dashboard', icon: 'pi-home', route: '/' },
    { name: 'Tasks', icon: 'pi-list', route: '/tasks' },
    { name: 'Projects', icon: 'pi-folder-open', route: '/projects' },
    { name: 'Users', icon: 'pi-users', route: '/users' },
  ]
  
  // State to manage the active tab
  const activeTab = ref('Dashboard')
  
  // Get the current route
  const route = useRoute()
  
  // Watch the route changes and update activeTab accordingly
  watch(
    () => route.path,
    (newPath) => {
      const matchingTab = tabs.find(tab => tab.route === newPath)
      if (matchingTab) {
        activeTab.value = matchingTab.name
      }
    },
    { immediate: true }
  )
  
  // Function to set the active tab and highlight the sidebar
  const setActiveTab = (tabName) => {
    activeTab.value = tabName
  }
  </script>
  
  <style scoped>
  /* Additional styles for elegance */
  </style>