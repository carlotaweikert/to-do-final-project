<script setup>
import TaskForm from './TaskForm.vue'
import TaskList from './TaskList.vue'
import useTaskStore from '../stores/task.js'
import useUserStore from '../stores/user.js'

const tasksStore = useTaskStore()
const userStore = useUserStore()
tasksStore.fetchTasks()

function addTask(taskTitle) {
  const newTask = taskTitle
  try {
    tasksStore.addNewTask({ title: newTask, userId: userStore.user.id })
  } catch (error) {
    // do the modal thing
    alert('ERROR at trying to add new task')
  }
}
function completeTask(task) {
  tasksStore.completeTask(!task.is_complete, task.id)
}
function editTask(task) {
  tasksStore.editTask(task.title, task.id)
}
function deleteTask(taskId) {
  tasksStore.deleteTask(taskId)
}
</script>

<template>
  <div class="app-container" id="tasklist">
    <h1 class="app-header">TO DO LIST</h1>
    <task-form @add-task="addTask" />
    <task-list
      :tasks="tasksStore.tasksList"
      @complete-task="completeTask"
      @edit-task="editTask"
      @delete-task="deleteTask"
    />
  </div>
</template>

<style>
.add-task {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.completed {
  color: rgba(89, 74, 97, 255);
  text-decoration: line-through rgba(89, 74, 97, 255);
}

.submit-task {
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  border: none;
  /* background: var(--add-button-shadow); */
  color: #272727;
  background-image: url(../assets/add-icon.png);
  background-size: 30px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 12px 0 var(--add-button-shadow);
}

.submit-task:active {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border: none;
  background: var(--add-button-shadow);
  color: #272727;
  background-image: url(../assets/add-icon.png);
  background-size: 25px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 12px 0 var(--add-button-shadow);
}

.task-list-item .checkbox {
  width: 25px;
  height: 25px;
  border: 1px solid #272727;
  border-radius: 50%;
  background-image: url(../assets/pinkCheck.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0px;
  transition: 0.2s;
  margin-right: 8px;
  flex-shrink: 0;
  margin-top: 4px;
  appearance: none;
}

.task-list-item input:hover {
  border-color: var(----checkbox-color);
  box-shadow: 0 0 0 3px var(--checkbox-shadow);
}

.task-list-item input:checked {
  background-size: 25px;
  border: 1px solid var(--checkbox-color);
}

.save-btn {
  width: 40px;
}

.delete-btn {
  margin-left: auto;
  margin-right: 5px;
  display: block;
  width: 25px;
  height: 25px;
  background-image: url(../assets/close.png);
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: center;
  cursor: pointer;
  border-radius: 50%;
}
</style>
