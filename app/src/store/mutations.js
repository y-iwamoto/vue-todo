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
  changeStatusTodo(state, payload) {
    state.todos = state.todos.map((todo) => {
      if (todo.id === payload.id) {
        const nextStatus = todo.status === '作業中' ? '完了' : '作業中'
        return {
          ...todo,
          status: nextStatus,
        }
      } else {
        return todo
      }
    })
  },
  setFilter(state, payload) {
    state.filter = payload.filter
  },
}
export default mutations
