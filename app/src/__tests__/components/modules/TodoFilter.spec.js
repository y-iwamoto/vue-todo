import { shallowMount } from '@vue/test-utils'
import Component from '@/components/modules/TodoFilter.vue'

describe('Testing TodoFilter component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Component)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('select each radio button', async () => {
    const radioInputs = wrapper.findAll('input[type="radio"]')

    await radioInputs.at(1).trigger('click')
    expect(wrapper.emitted('filter')[0][0]).toBe('作業中')

    await radioInputs.at(2).trigger('click')
    expect(wrapper.emitted('filter')[1][0]).toBe('完了')

    await radioInputs.at(0).trigger('click')
    expect(wrapper.emitted('filter')[2][0]).toBe('全て')
  })
})
