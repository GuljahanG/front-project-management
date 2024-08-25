<template>
    <div v-if="isOpen" class="fixed inset-0 z-40 bg-gray-900 bg-opacity-50" @click.self="closeModal"></div>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex justify-end">
      <div class="w-full sm:w-1/3 bg-white h-full shadow-xl p-6 overflow-y-auto">
        <h2 class="text-xl font-semibold mb-4">Add New Task</h2>
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
  import { ref } from 'vue';
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
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
  
  const task = ref({
    title: '',
    // Initialize other fields as needed
  });
  </script>
  
  <style scoped>
  /* Add any scoped styles here if needed */
  </style>



<!-- <div class="mb-4">
    <label for="task-title" class="block text-gray-700 font-medium mb-2">Task Title</label>
    <input
    type="text"
    id="task-title"
    class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
    placeholder="Enter task title"
    />
</div>


<div class="mb-4">
    <label for="task-datetime" class="block text-gray-700 font-medium mb-2">Date and Time</label>
    <input
    type="datetime-local"
    id="task-datetime"
    class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
    />
</div>


<div class="flex space-x-4 mb-4">
    
    <div class="w-1/2 pr-2">
        <label for="task-project" class="block text-gray-700 font-semibold mb-2">
            Choose Project
        </label>
        <select
            id="task-project"
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
            <option  value="" disabled selected>Select Project</option>
            <option value="project1">Project 1</option>
            <option value="project2">Project 2</option>
        </select>
    </div>
 
    <div class="w-1/2 pl-2">
    <label for="task-lead" class="block text-gray-700 font-medium mb-2">Choose Lead</label>
    <select
        id="task-lead"
        class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
    >
        <option value="">Select Lead</option>
        <option value="lead1">Lead 1</option>
        <option value="lead2">Lead 2</option>
    </select>
    </div>
</div>


<div class="flex space-x-4 mb-4">

    <div class="w-1/2 pr-2">
    <label for="task-status" class="block text-gray-700 font-medium mb-2">Status</label>
    <select
        id="task-status"
        class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
    >
        <option value="">Select Status</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
    </select>
    </div>


    <div class="w-1/2 pl-2">
    <label for="task-priority" class="block text-gray-700 font-medium mb-2">Priority</label>
    <select
        id="task-priority"
        class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
    >
        <option value="">Select Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select>
    </div>
</div>


<div class="mb-4">
    <label for="task-description" class="block text-gray-700 font-medium mb-2">Task Description</label>
    <textarea
    id="task-description"
    class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
    rows="4"
    placeholder="Enter task description"
    ></textarea>
</div>


<div class="mb-6">
    <label for="file-upload" class="block text-gray-700 font-medium mb-2">Attach Files</label>
    <div
    class="relative flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4 cursor-pointer hover:border-primary-500 transition"
    >
    <input
        type="file"
        id="file-upload"
        class="absolute inset-0 opacity-0 cursor-pointer"
        multiple
    />
    <div class="text-center">
        <i class="pi pi-upload text-3xl text-gray-500 mb-2"></i>
        <p class="text-gray-500">Drag and drop files here or click to select</p>
    </div>
    </div>
</div>


<div class="flex justify-end space-x-2 mt-6">
    <button
    type="button"
    class="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
    @click="closeModal"
    >
    Cancel
    </button>
    <button
    type="button"
    class="bg-primary-900 text-white px-4 py-2 rounded-md hover:bg-primary-800"
    @click="addTask"
    >
    Save
    </button>
</div> -->