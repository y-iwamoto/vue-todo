<template>
  <div>
    <h1>ToDoリスト</h1>
    <TodoFilter @filter="filterTodos($event)" />
    <TodoList
      :todos="todos"
      @delete="deleteTodo($event)"
      @change="changeStatusTodo($event)"
    />
    <TodoInput @addTodo="addTodo($event)" />
  </div>
</template>

<script>
import TodoInput from '../modules/TodoInput'
import TodoList from '../modules/TodoList'
import TodoFilter from '../modules/TodoFilter'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Todo',
  components: {
    TodoInput,
    TodoList,
    TodoFilter,
  },
  computed: {
    ...mapGetters(['getTodos', 'getFilter']),
    todos() {
      return this.getTodos(this.getFilter)
    },
  },
  methods: {
    ...mapActions([
      'addTodoAcion',
      'deleteTodoAcion',
      'changeStatusTodoAction',
      'filterTodosAction',
    ]),
    addTodo(todo) {
      this.addTodoAcion({ comment: todo })
    },
    deleteTodo(id) {
      this.deleteTodoAcion({ id: id })
    },
    changeStatusTodo(id) {
      this.changeStatusTodoAction({ id: id })
    },
    filterTodos(status) {
      this.filterTodosAction({ filter: status })
    },
  },
}
</script>
