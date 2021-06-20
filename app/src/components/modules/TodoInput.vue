<template>
  <div>
    <h2>新規タスクの追加</h2>
    <form @submit.prevent="click">
      <input type="text" v-model="todo" />
      <button type="submit">追加</button>
      <div v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      todo: '',
      error: '',
    }
  },
  computed: {
    validation() {
      if (!this.todo) {
        return 'TODOは未入力です'
      }
      return ''
    },
  },
  methods: {
    click() {
      const error = this.validation
      if (error) {
        this.error = error
        return
      } else {
        this.error = ''
      }
      this.$emit('addTodo', this.todo)
      this.todo = ''
    },
  },
}
</script>
