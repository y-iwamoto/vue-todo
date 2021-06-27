import TodoFilter from '../src/components/modules/TodoFilter.vue'

export default {
  title: 'TodoFilter',
  component: TodoFilter,
}

const Template = () => ({
  components: { TodoFilter },
  template: `<TodoFilter/> `,
})
export const Display = Template.bind({})
