import { shallowMount } from '@vue/test-utils'
import Component from '@/components/modules/TodoInput.vue'

describe('Testing TodoInput component', () => {
  const inputText = 'test1'
  const errorText = 'TODOは未入力です'

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Component)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('The input form is empty', async () => {
    await wrapper.get('input').setValue('')
    await wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.emitted('addTodo')).toBe(undefined)
    expect(wrapper.text()).toContain(errorText)
  })

  it('The input form is filled out', async () => {
    await wrapper.setData({
      error: errorText,
    })
    expect(wrapper.text()).toContain(errorText)

    await wrapper.get('input').setValue(inputText)
    expect(wrapper.vm.$data.todo).toBe(inputText)

    await wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.emitted('addTodo')[0][0]).toBe(inputText)
    expect(wrapper.vm.$data.todo).toBe('')
    expect(wrapper.text()).not.toContain(errorText)
  })
})
