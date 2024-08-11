<template>
    <div>
      <div class="p-8 bg-gray-100 min-h-screen">
        <div class="container mx-auto">
          <Tabs>
            <template #Tasks>
              <h1 class="text-2xl font-semibold text-gray-800 mb-4">Tasks</h1>
              <TaskBoard />
            </template>
            <template #Projects>
              <h1 class="text-2xl font-semibold text-gray-800 mb-4">Projects</h1>
              <div class="space-y-4">
                <p class="bg-gray-200 p-4 rounded-md">Project 1: E-commerce platform</p>
                <p class="bg-gray-200 p-4 rounded-md">Project 2: Social media dashboard</p>
                <p class="bg-gray-200 p-4 rounded-md">Project 3: Portfolio website</p>
              </div>
            </template>
            <template #Users>
              <h1 class="text-2xl font-semibold text-gray-800 mb-4">Users</h1>
              <div class="space-y-4">
                <p class="bg-gray-200 p-4 rounded-md">User 1: Test Test</p>
                <p class="bg-gray-200 p-4 rounded-md">User 2: Test Test</p>
                <p class="bg-gray-200 p-4 rounded-md">User 3: Test Test</p>
              </div>
            </template>
          </Tabs>
        </div>
      </div>
      
    </div>
  </template>
  
  <script setup>
  import TaskBoard from '@/components/TaskBoard.vue'
  import Tabs from '@/components/Tabs.vue'
  </script>