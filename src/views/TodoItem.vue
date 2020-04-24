<template>
  <li class="todo-list__item">
    <button class="todo-list__item-content" @click="toggleItem(todo)">{{ todo.title }}</button>
    <button class="btn todo-list__item-remove" @click="delItem(index)">
      <i class="fa" :class="[todo.complete ? 'fa-check' : 'fa-times']"></i>
    </button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object,
    index: Number,
    delTodo: Function,
    toggleTodo: Function
  },
  methods: {
    delItem(index) {
      this.delTodo(index);
    },
    toggleItem(todo) {
      this.toggleTodo(todo);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>