import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import actions from '@/store/actions'
import mutations from '@/store/mutations'

const state = {
  filter: '全て',
  todos: [],
}
const initStore = () => {
  return cloneDeep({
    state,
    mutations,
    actions,
  })
}

describe('store', () => {
  let store
  let localVue
  const todos = [
    { id: 0, comment: 'test1', status: '作業中' },
    { id: 1, comment: 'test2', status: '完了' },
    { id: 2, comment: 'test3', status: '作業中' },
  ]

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(initStore())
  })

  it('dispatch addTodoAcion', () => {
    expect(store.state.todos).toEqual([])
    store.dispatch('addTodoAcion', { comment: 'test1' })

    expect(store.state.todos).toEqual([
      {
        id: 0,
        comment: 'test1',
        status: '作業中',
      },
    ])
  })

  it('dispatch deleteTodo', () => {
    store.state.todos = todos
    store.dispatch('deleteTodoAcion', { id: 1 })

    expect(store.state.todos).toHaveLength(2)
    expect(store.state.todos[0]).toEqual(todos[0])
    expect(store.state.todos[1]).toEqual({
      id: 1,
      comment: 'test3',
      status: '作業中',
    })
  })

  it('dispatch changeStatusTodo', () => {
    store.state.todos = todos
    store.dispatch('changeStatusTodoAction', { id: 2 })

    expect(store.state.todos[0]).toEqual(todos[0])
    expect(store.state.todos[1]).toEqual(todos[1])
    expect(store.state.todos[2]).toEqual({
      id: 2,
      comment: 'test3',
      status: '完了',
    })
  })

  it('dispatch filterTodos', () => {
    store.state.todos = todos
    store.dispatch('filterTodosAction', { filter: '作業中' })

    expect(store.state.filter).toEqual('作業中')
  })
})
