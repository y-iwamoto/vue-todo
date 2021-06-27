import TodoList from '../src/components/modules/TodoList.vue'

export default {
  title: 'TodoList',
  component: TodoList,
}

const Template = (args) => ({
  components: { TodoList },
  data: () => {
    return {
      todos: args.todos,
    }
  },
  template: `<TodoList :todos='todos' /> `,
})

export const WithoutTodos = Template.bind({})
WithoutTodos.args = {
  todos: [],
}

export const WithTodos = Template.bind({})
WithTodos.args = {
  todos: [
    { id: 1, comment: 'test1', status: '作業中' },
    { id: 2, comment: 'test2', status: '完了' },
    { id: 3, comment: 'test3', status: '作業中' },
  ],
}
