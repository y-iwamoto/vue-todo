import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import TodoFilter from '../src/components/modules/TodoFilter.vue'

storiesOf('TodoFilter', module).add('TodoFilter', () => ({
  components: { TodoFilter },
  template: `
    <TodoFilter/>
    `,
}))
