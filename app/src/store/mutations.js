const mutations = {
  setTodo(state, payload) {
    state.todos.push(payload)
  },
  deleteAndAdjustTodo(state, payload) {
    state.todos = state.todos
      .filter((todo) => todo.id !== payload.id)
      .map((todo, index) => ({
        ...todo,
        id: index,
      }))
  },
}
export default mutations
