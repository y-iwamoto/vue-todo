<template>
  <div>
    <h1>ToDoリスト</h1>
    <TodoList :todos="getTodos" @delete="deleteTodo($event)" />
    <TodoInput @addTodo="addTodo($event)" />
  </div>
</template>

<script>
import TodoInput from '../modules/TodoInput'
import TodoList from '../modules/TodoList'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Todo',
  components: {
    TodoInput,
    TodoList,
  },
  data() {
    return {
      todos: [],
    }
  },
  computed: {
    ...mapGetters(['getTodos']),
  },
  methods: {
    ...mapActions(['addTodoAcion', 'deleteTodoAcion']),
    addTodo(todo) {
      this.addTodoAcion({ comment: todo })
    },
    deleteTodo(id) {
      this.deleteTodoAcion({ id: id })
    },
  },
}
</script>
