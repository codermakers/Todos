<template>
  <div class="filters">
    <button class="btn filters__btn filters__btn--all" @click="filterItems('all')">All</button>
    <button
      class="btn filters__btn filters__btn--complete"
      @click="filterItems('complete')"
    >Complete</button>
    <button
      class="btn filters__btn filters__btn--incomplete"
      @click="filterItems('incomplete')"
    >Incomplete</button>
  </div>
</template>

<script>
export default {
  name: "TodoFoot",
  props: {
    filterTodos: Function
  },
  methods: {
    filterItems(flagStatus) {    
      this.filterTodos(flagStatus);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>