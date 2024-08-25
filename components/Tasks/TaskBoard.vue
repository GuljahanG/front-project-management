<template>
  <div class="task-manager flex scrollbar-custom">
    <div
      class="column flex-shrink-0 overflow-y-auto scrollbar-custom" 
      v-for="(tasks, status) in groupedTasks"
      :key="status"
      @scroll="onScroll($event, status)"
    >
      <div class="column-header">
        <span class="text-center text-lg font-semibold ml-2">{{ status }}</span>
        <div class="header flex items-center border-b-4 mb-4"></div>
      </div>

      <draggable
        class="dragArea list-group w-full p-4 rounded-md"
        :list="tasks"
        group="tasks"
        :data-status="status"
        @end="onDragEnd"
      >
        <TaskItem
          v-for="element in tasks"
          :key="element.id"
          :task="element"
        />
      </draggable>

      
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import TaskItem from '~/components/Tasks/Item.vue'
import tasksData from '@/assets/json/tasks.json';

const draggable = VueDraggableNext;

const totalTasks = ref(tasksData);
const tasksPerLoad = 6;
const tasks = ref([]); // This will hold the tasks currently being displayed

// Load tasks by status, limiting to 15 per status
const loadTasksByStatus = () => {
  const statusGroups = {};

  totalTasks.value.forEach((task) => {
    if (!statusGroups[task.status]) {
      statusGroups[task.status] = [];
    }
    if (statusGroups[task.status].length < tasksPerLoad) {
      statusGroups[task.status].push(task);
    }
  });

  tasks.value = statusGroups;
};

// Handle scroll event to load more tasks per status
const onScroll = (e, status) => {
  const column = e.target;
  const bottom = column.scrollHeight - column.scrollTop === column.clientHeight;
  console.log(column.scrollHeight, column.scrollTop, column.clientHeight);console.log('tasks',tasks.value[status]);
  if (bottom && tasks.value[status]) {
    const currentTasks = tasks.value[status];console.log(currentTasks);
    const nextTasks = totalTasks.value
      .filter(task => task.status === status)
      .slice(currentTasks.length, currentTasks.length + tasksPerLoad);

    if (nextTasks.length) {
      tasks.value[status] = [...currentTasks, ...nextTasks];
    }
  }
};

// Group tasks by status (for template usage)
const groupedTasks = computed(() => tasks.value);

// Handle the drag end event
const onDragEnd = (evt) => {
  try {
    const { oldIndex, newIndex, to, from, item } = evt
    
    const newStatus = to.getAttribute('data-status')
    const oldStatus = from.getAttribute('data-status')
    const itemId = item.getAttribute('data-id')
    console.log(`Task ID: ${itemId}, New Status: ${newStatus}`)
    //FIX
    // const movedTaskIndex = tasks.value.findIndex(task => task.id == itemId)
    // const movedTask = tasks.value[movedTaskIndex]

    // if (!movedTask) {
    //   console.error("Moved task is undefined, skipping update")
    //   return
    // }

    // movedTask.status = newStatus
    // tasks.value.splice(movedTaskIndex, 1)
    // tasks.value.splice(newIndex, 0, movedTask)

   // console.log(`Task ID: ${movedTask.id}, New Status: ${newStatus}`)
  } catch (error) {
    console.error("Error during drag and drop operation:", error)
  }
}
// Load initial tasks by status on component mount
onMounted(() => {
  loadTasksByStatus();
});

</script>

<style scoped>
.dragArea {
  height: 74vh;
}
.task-manager {
  display: flex;
  justify-content: space-around;
  overflow-x: auto; /* Ensure horizontal scrolling is enabled */
  white-space: nowrap; /* Prevent columns from wrapping */
}

.column {
  padding: 10px;
  border-radius: 5px;
  width: 30%;
}
h3 {
  text-align: center;
  margin-bottom: 10px;
}

.list-group-item {
  cursor: pointer;
  background-color: #fff;
  margin: 5px;
  padding: 10px;
}
</style>