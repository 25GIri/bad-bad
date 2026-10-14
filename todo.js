// Simple Todo List Implementation in JavaScript

class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(task) {
    const todo = {
      id: Date.now(),
      task: task,
      completed: false
    };
    this.todos.push(todo);
    return todo;
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleTodo(id) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  getTodos() {
    return this.todos;
  }
}

// Example usage:
const myTodoList = new TodoList();
myTodoList.addTodo("Learn JavaScript");
myTodoList.addTodo("Build a todo app");
console.log(myTodoList.getTodos());
