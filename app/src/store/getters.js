const getters = {
  getLatestTodo(state) {
    return state.todos.length !== 0 ? state.todos.slice(-1)[0] : null
  },
  getTodos(state) {
    return state.todos
  },
}
export default getters
