export function filteredTodosFn(key, todos) {
  if (key === "all") {
    return todos;
  } else if (key === "complete") {
    return todos.filter(function(todo) {
      return todo.complete;
    });
  } else {
    return todos.filter(function(todo) {
      return !todo.complete;
    });
  }
}
