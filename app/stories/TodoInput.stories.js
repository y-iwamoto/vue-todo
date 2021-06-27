import TodoInput from '../src/components/modules/TodoInput.vue'

export default {
  title: 'TodoInput',
  component: TodoInput,
}

const Template = () => ({
  components: { TodoInput },
  template: `<TodoInput/> `,
})
export const Display = Template.bind({})
