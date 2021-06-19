import store from './index'
const actions = {
  addTodoAcion({ commit }, payload) {
    const latestTodo = store.getters['getLatestTodo']
    const nextId = latestTodo ? latestTodo.id + 1 : 0
    commit('setTodo', {
      id: nextId,
      comment: payload.comment,
      status: '作業中',
    })
  },
  deleteTodoAcion({ commit }, payload) {
    commit('deleteAndAdjustTodo', {
      id: payload.id,
    })
  },
  changeStatusTodoAction({ commit }, payload) {
    commit('changeStatusTodo', {
      id: payload.id,
    })
  },
  filterTodosAction({ commit }, payload) {
    commit('setFilter', {
      filter: payload.filter,
    })
  },
}
export default actions
