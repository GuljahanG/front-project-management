<template>
    <div class="overflow-x-auto">
    <div class="flex items-center justify-between mb-6 mr-6">
      <h1 class="text-2xl font-semibold text-gray-800">Tasks</h1>
      
      <div class="flex items-center space-x-8">
        <i class="pi pi-filter text-neutral-600 cursor-pointer text-xl"></i>
        
        <!-- Users Icon -->
        <i class="pi pi-users text-neutral-600 cursor-pointer text-xl"></i>
        
        <!-- Add Task Button -->
        <button @click="openCreateModal" class="bg-primary-900 text-white px-4 py-2 rounded-md flex items-center space-x-2">
          <i class="pi pi-plus"></i>
          <span>Add Task</span>
        </button>
      </div>
    </div>

    <CreateTaskModal
      :isOpen="isCreateModalOpen"
      @close="closeCreateModal"
      @submit="handleCreateTask"
    />

    <!-- Task Board Component -->
    <TaskBoard />

  </div>
</template>
<script setup>
    import TaskBoard from '~/components/Tasks/TaskBoard.vue';
    import CreateTaskModal from '~/components/Tasks/CreateModal.vue';

    const isCreateModalOpen = ref(false);

    const openCreateModal = () => {
    isCreateModalOpen.value = true;
    };

    const closeCreateModal = () => {
    isCreateModalOpen.value = false;
    };

    const handleCreateTask = () => {
    // Handle task creation logic here
    closeCreateModal();
    };

</script>
