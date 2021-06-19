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
}
export default actions
