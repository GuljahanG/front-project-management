
<template>
  <div class="task-manager flex">
    <div class="column" v-for="(tasks, status, index) in groupedTasks" :key="status">
        <div class="column-header">
          <span class="text-center text-lg font-semibold ml-2">{{ status }}</span>
          <div class="header flex items-center border-b-4 mb-4" ></div>
        </div>
        <!-- task items -->
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
import TaskItem from '@/components/Item.vue'

const draggable = VueDraggableNext;

const tasks = ref([
  { id: 1, title: 'Task 1', status: 'new', badges: ['Low'], filesCount: 3, commentsCount: 5  },
  { id: 2, title: 'Task 2', status: 'process', badges: ['Medium', 'High'], filesCount: 3, commentsCount: 5  },
  { id: 3, title: 'Task 3', status: 'completed', badges: ['Medium', 'High','Low'] },
  { id: 4, title: 'Task 4', status: 'done', badges: ['Completed', 'Medium'], filesCount: 3, commentsCount: 5  },
  { id: 5, title: 'Task 5', status: 'done', badges: ['Completed','Low'], filesCount: 3, commentsCount: 5  },
  { id: 6, title: 'Task 6', status: 'new', badges: ['Medium', 'High'], filesCount: 3, commentsCount: 5  },
  { id: 7, title: 'Task 7', status: 'new', badges: ['High'], filesCount: 3, commentsCount: 5  },
])

// Group tasks by status
const groupedTasks = computed(() => {
  return {
    new: tasks.value.filter((task) => task.status === 'new'),
    process: tasks.value.filter((task) => task.status === 'process'),
    completed: tasks.value.filter((task) => task.status === 'completed'),
    done: tasks.value.filter((task) => task.status === 'done'),
  }
})

// Handle the drag end event
const onDragEnd = (evt) => {
  try {
    const { oldIndex, newIndex, to, from, item } = evt
    
    const newStatus = to.getAttribute('data-status')
    const oldStatus = from.getAttribute('data-status')
    const itemId = item.getAttribute('data-id')
    
    const movedTaskIndex = tasks.value.findIndex(task => task.id == itemId)
    const movedTask = tasks.value[movedTaskIndex]

    if (!movedTask) {
      console.error("Moved task is undefined, skipping update")
      return
    }

    movedTask.status = newStatus
    tasks.value.splice(movedTaskIndex, 1)
    tasks.value.splice(newIndex, 0, movedTask)

    console.log(`Task ID: ${movedTask.id}, New Status: ${newStatus}`)
  } catch (error) {
    console.error("Error during drag and drop operation:", error)
  }
}
</script>

<style scoped>
.dragArea {
  width: 100%;
  height: 90vh;
}
.task-manager {
  display: flex;
  justify-content: space-around;
}

.column {
  padding: 10px;
  border-radius: 5px;
  width: 25%;
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