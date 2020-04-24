<template>
  <div class="app">
    <TodoHead :addTodo="addTodo"></TodoHead>
    <transition-group tag="ol" name="list" class="todo-list">
      <TodoItem
        v-for="(todo,index) in filteredTodos"
        :todo="todo"
        :index="index"
        :key="todo.title"
        :delTodo="delTodo"
        :toggleTodo="toggleTodo"
      ></TodoItem>
    </transition-group>
    <TodoFoot :filterTodos="filterTodos"></TodoFoot>
  </div>
</template>

<script>
import { filteredTodosFn } from "@/utils/filter";
import TodoHead from "./TodoHead";
import TodoItem from "./TodoItem";
import TodoFoot from "./TodoFoot";
export default {
  name: "Todo",
  components: {
    TodoHead,
    TodoItem,
    TodoFoot
  },
  data() {
    return {
      todos: [],
      status: "all"
    };
  },
  computed: {
    filteredTodos() {
      //根据标记筛选出符合条件的Todos
      return filteredTodosFn(this.status, this.todos);
    }
  },
  watch: {
    todos: {
      handler(todos) {
        this.saveTodoStorage(todos);
      },
      deep: true
    }
  },
  created() {
    this.todos = this.fetchTodoStorage("todos-key");
  },
  methods: {
    //增
    addTodo(item) {
      this.todos.push(item);
    },
    //删
    delTodo(index) {
      this.todos.splice(index, 1);
    },
    //切换todo完成标识
    toggleTodo(todo) {
      todo.complete = !todo.complete;
    },
    //改变筛选条件
    filterTodos(flagStatus) {
      this.status = flagStatus;
    },
    //获取本地存储里的todos-key,没有就设置"[]”
    fetchTodoStorage(todos) {
      return JSON.parse(localStorage.getItem("todos-key") || "[]");
    },
    saveTodoStorage(todos) {
      localStorage.setItem("todos-key", JSON.stringify(todos));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>