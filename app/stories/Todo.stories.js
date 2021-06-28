import Vue from 'vue'
import Vuex from 'vuex'
import Todo from '../src/components/pages/Todo.vue'
Vue.use(Vuex)

export default {
  title: 'Todo',
  component: Todo,
}

const Template = () => ({
  components: { Todo },
  template: `<Todo /> `,
  store: new Vuex.Store({
    modules: [
      {
        state: {
          filter: '全て',
          todos: [
            { id: 1, comment: 'test1', status: '作業中' },
            { id: 2, comment: 'test2', status: '完了' },
            { id: 3, comment: 'test3', status: '作業中' },
          ],
        },
        getters: {
          getLatestTodo: (state) => {
            return state.todos.length !== 0 ? state.todos.slice(-1)[0] : null
          },
          getTodos: (state) => (filter) => {
            if (filter === '全て') return state.todos
            return state.todos.filter((todo) => todo.status === filter)
          },
          getFilter: (state) => {
            return state.filter
          },
        },
        actions: {
          addTodoAcion({ commit, getters }, payload) {
            const latestTodo = getters['getLatestTodo']
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
        },
        mutations: {
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
        },
      },
    ],
  }),
})
export const Display = Template.bind({})
