const getters = {
  getLatestTodo(state) {
    return state.todos.length !== 0 ? state.todos.slice(-1)[0] : null
  },
  getFilter(state) {
    return state.filter
  },
  getTodos: (state) => (filter) => {
    if (filter === '全て') return state.todos
    return state.todos.filter((todo) => todo.status === filter)
  },
}
export default getters
