import getters from '@/store/getters'
describe('getters', () => {
  const todos = [
    { id: 0, comment: 'test1', status: '作業中' },
    { id: 1, comment: 'test2', status: '完了' },
    { id: 2, comment: 'test3', status: '作業中' },
  ]

  it('getLatestTodo', () => {
    const state = {
      todos: todos,
    }
    const result = getters.getLatestTodo(state)

    expect(result).toEqual({ id: 2, comment: 'test3', status: '作業中' })
  })

  it('getFilter', () => {
    const state = {
      filter: '全て',
      todos: [],
    }
    const result = getters.getFilter(state)

    expect(result).toEqual('全て')
  })

  describe('getTodos', () => {
    it('filter value is 全て', () => {
      const state = {
        todos: todos,
      }
      const result = getters.getTodos(state)('全て')

      expect(result).toEqual(todos)
    })

    it('Filters except for 全て ', () => {
      const state = {
        todos: todos,
      }
      const result = getters.getTodos(state)('完了')
      expect(result).toHaveLength(1)
      expect(result[0]).toEqual(todos[1])
    })
  })
})
