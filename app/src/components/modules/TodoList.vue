<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todos" :key="todo.id">
        <td>{{ todo.id }}</td>
        <td>{{ todo.comment }}</td>
        <td>
          <button @click="clickChange(todo.id)">{{ todo.status }}</button>
        </td>
        <td><button @click="clickDelete(todo.id)">削除</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: Array,
  },
  methods: {
    clickDelete(id) {
      this.$emit('delete', id)
    },
    clickChange(id) {
      this.$emit('change', id)
    },
  },
}
</script>
