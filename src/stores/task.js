import { defineStore } from 'pinia'
import supabase from '../supabase/index'

//copy paste from internet
function getRandomInt64() {
  const upper = crypto.getRandomValues(new Uint32Array(1))[0]
  const lower = crypto.getRandomValues(new Uint32Array(1))[0]
  return (upper << 32) | lower
}

export default defineStore('tasks', {
  state() {
    return {
      tasksList: []
    }
  },
  actions: {
    async fetchTasks() {
      const { data, error } = await supabase.from('tasks').select()

      if (error) {
        throw error
      }

      //TODO filter by user id
      this.tasksList = data.sort((a, b) => {
        // Sort by is_completed first
        if (a.is_completed && !b.is_completed) {
          return 1
        } else if (!a.is_completed && b.is_completed) {
          return -1
        }
        // If both tasks have the same is_completed value, sort by order
        return a.order - b.order
      })
    },
    async addNewTask({ title, userId }) {
      const newTaskId = getRandomInt64()
      const newTask = { id: newTaskId, title, user_id: userId, order: this.tasksList.length }

      //fake one
      this.tasksList.push(newTask)

      //insert to DB
      const { data, error } = await supabase.from('tasks').insert(newTask).select()

      if (error) {
        this.tasksList = this.tasksList.filter((task) => {
          if (task.id !== newTaskId) {
            return task
          }
        })
        throw error
      }

      this.tasksList = this.tasksList.map((task) => {
        if (task.id === newTaskId) {
          return {
            ...task,
            create_at: data.create_at
          }
        }
        return task
      })
    },

    async editTask(title, id) {
      const index = this.tasksList.findIndex((task) => task.id === id)
      if (index > -1) {
        this.tasksList[index].title = title
      }

      const { error } = await supabase.from('tasks').update({ title }).eq('id', id)

      if (error) {
        //TODO remove the previous todo
        // show a modal displaying the error
        throw error
      }
    },

    async completeTask(is_completed, id) {
      const index = this.tasksList.findIndex((task) => task.id === id)
      if (index > -1) {
        this.tasksList[index].is_complete = is_completed
      }

      const { error } = await supabase.from('tasks').update({ is_completed }).eq('id', id)

      if (error) {
        //TODO remove the previous todo
        // show a modal displaying the error
        throw error
      }
    },

    async deleteTask(id) {
      const { error } = await supabase.from('tasks').delete().eq('id', id)

      if (error) {
        console.error(error)
        return
      }

      const index = this.tasksList.findIndex((task) => task.id === id)

      this.tasksList.splice(index, 1)
    }
  }
})
