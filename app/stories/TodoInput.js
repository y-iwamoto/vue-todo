import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import TodoInput from '../src/components/modules/TodoInput.vue'

storiesOf('TodoInput', module).add('TodoInput', () => ({
  components: { TodoInput },
  template: `
    <TodoInput/>
    `,
}))
