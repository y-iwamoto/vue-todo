const getters = {
  getLatestTodo(state) {
    return state.todos.length !== 0 ? state.todos.slice(-1)[0] : null
  },
  getTodos(state) {
    if (state.filter === '全て') return state.todos
    return state.todos.filter((todo) => todo.status === state.filter)
  },
}
export default getters
