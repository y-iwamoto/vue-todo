<template>
  <ul>
    <li v-for="(item, idx) in items" :key="idx">
      <label>
        <input
          type="radio"
          v-model="checkStatus"
          :value="item.status"
          @click="click(item)"
        />
        {{ item.name }}
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoFilter',
  data() {
    return {
      checkStatus: '全て',
      items: [
        { status: '全て', name: '全て' },
        { status: '作業中', name: '作業中' },
        { status: '完了', name: '完了' },
      ],
    }
  },
  methods: {
    click(item) {
      this.$emit('filter', item.status)
    },
  },
}
</script>
<style>
ul {
  display: flex;
}
li {
  list-style: none;
}
</style>
