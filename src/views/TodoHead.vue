<template>
  <div>
    <form class="form" @submit.prevent="addItem">
      <input class="input form__input" v-model.trim="inpVal" />
      <button class="btn form__submit-btn" type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoHead",
  props: {
    addTodo: Function
  },
  data() {
    return {
      inpVal: ""
    };
  },
  methods: {
    addItem: function(e) {
      if (!this.inpVal) return;
      const todoItem = {
        title: this.inpVal,
        complete: false
      };
      this.addTodo(todoItem);
      this.inpVal = "";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>