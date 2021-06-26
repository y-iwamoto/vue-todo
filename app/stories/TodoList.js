import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import TodoList from '../src/components/modules/TodoList.vue'

storiesOf('TodoList', module)
  .add('without todos', () => ({
    components: { TodoList },
    data: () => {
      return {
        todos: [],
      }
    },
    template: `
      <TodoList :todos='todos' />
      `,
  }))
  .add('with todos', () => ({
    components: { TodoList },
    data: () => {
      return {
        todos: [
          { id: 1, comment: 'test1', status: '作業中' },
          { id: 2, comment: 'test2', status: '完了' },
          { id: 3, comment: 'test3', status: '作業中' },
        ],
      }
    },
    template: `
    <TodoList :todos='todos' />
    `,
  }))
