import { shallowMount } from '@vue/test-utils'
import Component from '@/components/modules/TodoList.vue'

describe('Testing TodoList component', () => {
  let wrapper
  const todos = [
    { id: 1, comment: 'test1', status: '作業中' },
    { id: 2, comment: 'test2', status: '完了' },
    { id: 3, comment: 'test3', status: '作業中' },
  ]

  beforeEach(() => {
    wrapper = shallowMount(Component)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('Initial rendering', () => {
    expect(wrapper.text()).toContain('ID')
    expect(wrapper.text()).toContain('コメント')
    expect(wrapper.text()).toContain('状態')
    expect(wrapper.text()).not.toContain('削除')
  })

  it('todos empty', async () => {
    await wrapper.setProps({
      todos: [],
    })

    const tableRows = wrapper.findAll('table > tbody > tr')
    expect(tableRows.length).toBe(0)
  })

  it('todos exist', async () => {
    await wrapper.setProps({
      todos: todos,
    })

    const tableRows = wrapper.findAll('table > tbody > tr')
    expect(tableRows.length).toBe(3)
    expect(tableRows.at(0).text()).toBe('1 test1 作業中 削除')
    expect(tableRows.at(1).text()).toBe('2 test2 完了 削除')
    expect(tableRows.at(2).text()).toBe('3 test3 作業中 削除')
  })

  it('pressed the change todo status button', async () => {
    await wrapper.setProps({
      todos: todos,
    })

    await wrapper.findAll('button').at(2).trigger('click')
    expect(wrapper.emitted('change')[0][0]).toBe(2)

    await wrapper.findAll('button').at(4).trigger('click')
    expect(wrapper.emitted('change')[1][0]).toBe(3)
  })

  it('pressed the change delete todo button', async () => {
    await wrapper.setProps({
      todos: todos,
    })

    await wrapper.findAll('button').at(5).trigger('click')
    expect(wrapper.emitted('delete')[0][0]).toBe(3)

    await wrapper.findAll('button').at(1).trigger('click')
    expect(wrapper.emitted('delete')[1][0]).toBe(1)
  })
})
