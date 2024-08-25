<template>
    <div v-if="isOpen" class="fixed inset-0 z-40 bg-gray-900 bg-opacity-50" @click.self="closeModal"></div>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex justify-end">
      <div class="w-full sm:w-1/3 bg-white h-full shadow-xl p-6 overflow-y-auto" @click.self="closeModal">
        <h2 class="text-xl font-semibold mb-4">Edit Task</h2>
        <form @submit.prevent="submitForm">
          <!-- Task Title -->
          <div class="mb-4">
            <label for="task-title" class="block text-gray-700 font-medium mb-2">Task Title</label>
            <input
              type="text"
              id="task-title"
              v-model="task.title"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter task title"
              required
            />
          </div>
          <!-- Additional form fields here -->
          <!-- Button Row -->
          <div class="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              class="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
              @click="closeModal"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-primary-900 text-white px-4 py-2 rounded-md hover:bg-primary-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true,
    },
    task: {
      type: Object,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
    onSubmit: {
      type: Function,
      required: true,
    },
  });
  
  const emit = defineEmits(['close', 'submit']);
  
  const closeModal = () => {
    emit('close');
  };
  
  const submitForm = () => {
    emit('submit');
  };
  
  const task = ref({ ...props.task });
  
  // Watch for changes to props.task to update the local task object
  watch(() => props.task, (newTask) => {
    Object.assign(task.value, newTask);
  }, { deep: true });
  </script>
  
  <style scoped>
  /* Add any scoped styles here if needed */
  </style>