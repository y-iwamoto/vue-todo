import mutations from '@/store/mutations'

describe('mutations', () => {
  const todos = [
    { id: 1, comment: 'test1', status: '作業中' },
    { id: 2, comment: 'test2', status: '完了' },
    { id: 3, comment: 'test3', status: '作業中' },
  ]

  const state = {
    filter: '全て',
    todos: todos,
  }

  it('setTodo', () => {
    const payload = { id: 4, comment: 'test4', status: '作業中' }
    mutations.setTodo(state, payload)
    expect(state.todos[0]).toEqual(todos[0])
    expect(state.todos[1]).toEqual(todos[1])
    expect(state.todos[2]).toEqual(todos[2])
    expect(state.todos[3]).toEqual({
      id: 4,
      comment: 'test4',
      status: '作業中',
    })
  })

  it('changeStatusTodo', () => {
    const payload = { id: 2 }
    mutations.changeStatusTodo(state, payload)
    expect(state.todos[0]).toEqual(todos[0])
    expect(state.todos[1]).toEqual({
      id: 2,
      comment: 'test2',
      status: '作業中',
    })
    expect(state.todos[2]).toEqual(todos[2])
  })

  it('setFilter', () => {
    const payload = { filter: '完了' }
    mutations.setFilter(state, payload)
    expect(state.filter).toBe('完了')
  })
})
