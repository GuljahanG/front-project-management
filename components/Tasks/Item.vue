<template>
  <div
    class="task-item bg-gray-100 rounded-lg p-4 mb-5 shadow-md relative"
    :data-id="task.id"
    @click="openEditModal"
  >
      <!-- <span
        class="badge text-white font-medium px-4 py-0 rounded-lg absolute top-[-10px] left-[15px]"
        :class="getBadgeClass('ProjectName')"
      >
        ProjectName
      </span> -->
    <h4 class="font-semibold mt-2">{{ task.title }}</h4>
    <!-- badges -->
    <div class="badges mt-3 flex space-x-2">
      <span
        v-for="badge in task.badges"
        :key="badge"
        class="badge text-white font-medium px-3 py-0 rounded-full"
        :class="getBadgeClass(badge)"
      >
        {{ badge }}
      </span>
    </div>
    <!-- Icons and counts at the bottom right -->
    <div class="absolute bottom-2 right-2 flex items-center space-x-2">
      <div class="flex items-center text-gray-600">
        <i class="pi pi-file text-lg"></i>
        <span class="ml-1">{{ task.filesCount }}</span>
      </div>
      <div class="flex items-center text-gray-600">
        <i class="pi pi-comment text-lg"></i>
        <span class="ml-1">{{ task.commentsCount }}</span>
      </div>
    </div>

  </div>

  <EditTaskModal
    :isOpen="isEditModalOpen"
    :task="task"
    @close="closeEditModal"
    @submit="handleEditTask"
  />

</template>

<script setup>
import { defineProps } from 'vue'
import EditTaskModal from '~/components/Tasks/EditModal.vue';
const isEditModalOpen = ref(false);
// Define props to accept task data
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
})

const getBadgeClass = (badge) => {
  switch (badge) {
    case 'Low':
      return 'bg-emerald-500';
    case 'Medium':
      return 'bg-yellow-500';
    case 'High':
      return 'bg-red-500';
    case 'Completed':
      return 'bg-blue-500';
    case 'ProjectName':
      return 'bg-violet-500';
    default:
      return 'bg-gray-300';
  }
};
const openEditModal = (task) => {
  isEditModalOpen.value = true;
};

const closeEditModal = () => {
  isEditModalOpen.value = false;
  };

const handleEditTask = () => {
  // Handle task editing logic here
  closeEditModal();
};

</script>

<style scoped>
.task-item {
  position: relative;
  cursor:grab;
}
</style>