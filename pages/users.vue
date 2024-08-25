<template>
    <div class="mr-10">
        <h1 class="text-2xl font-semibold text-gray-800 mb-4">Users</h1>
        <div class="space-y-4">
            <div v-for="user in users" :key="user.id" class="bg-gray-200 p-4 rounded-md">
            <h2 class="text-xl font-semibold">{{ user.name }}</h2>
            <p class="text-gray-600">{{ user.email }}</p>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">


const users = ref([
{ id: 1, name: 'Test User 1', email: 'test1@example.com' },
{ id: 2, name: 'Test User 2', email: 'test2@example.com' },
{ id: 3, name: 'Test User 3', email: 'test3@example.com' }
]);

</script>
