<template>
  <div
    class="task-item bg-gray-100 rounded-lg p-5 mb-5 mt-6 shadow-md relative"
    :data-id="task.id"
  >
      <span
        class="badge text-white font-medium px-4 py-0 rounded-lg absolute top-[-10px] left-[15px]"
        :class="getBadgeClass('ProjectName')"
      >
        ProjectName
      </span>
    <h4 class="font-semibold mt-4">{{ task.title }}</h4>
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
</template>

<script setup>
import { defineProps } from 'vue'

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
</script>

<style scoped>
.task-item {
  position: relative;
  cursor:grab;
}
</style>