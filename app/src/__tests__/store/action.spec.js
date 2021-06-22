import actions from '@/store/actions'

describe('actions', () => {
  describe('addTodoAcion', () => {
    it('latestTodo exists', async () => {
      const commit = jest.fn()
      const getters = {
        getLatestTodo: {
          id: 3,
          comment: 'test3',
          status: '完了',
        },
      }
      const payload = { comment: 'test4' }
      await actions.addTodoAcion({ commit, getters }, payload)
      expect(commit).toHaveBeenCalledWith('setTodo', {
        id: 4,
        comment: 'test4',
        status: '作業中',
      })
    })

    it('latestTodo does not exists', async () => {
      const commit = jest.fn()
      const getters = {
        getLatestTodo: null,
      }
      const payload = { comment: 'test1' }
      await actions.addTodoAcion({ commit, getters }, payload)
      expect(commit).toHaveBeenCalledWith('setTodo', {
        id: 0,
        comment: 'test1',
        status: '作業中',
      })
    })
  })

  it('deleteTodoAcion', async () => {
    const commit = jest.fn()
    const payload = { id: 1 }
    await actions.deleteTodoAcion({ commit }, payload)
    expect(commit).toHaveBeenCalledWith('deleteAndAdjustTodo', {
      id: 1,
    })
  })

  it('changeStatusTodoAction', async () => {
    const commit = jest.fn()
    const payload = { id: 1 }
    await actions.changeStatusTodoAction({ commit }, payload)
    expect(commit).toHaveBeenCalledWith('changeStatusTodo', {
      id: 1,
    })
  })

  it('filterTodosAction', async () => {
    const commit = jest.fn()
    const payload = { filter: '作業中' }
    await actions.filterTodosAction({ commit }, payload)
    expect(commit).toHaveBeenCalledWith('setFilter', {
      filter: '作業中',
    })
  })
})
