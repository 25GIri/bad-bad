// A simple Todo List implementation in JavaScript

class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(task) {
        if (!task || task.trim() === "") {
            throw new Error("Task cannot be empty");
        }
        const todo = {
            id: Date.now(),
            task: task.trim(),
            completed: false
        };
        this.todos.push(todo);
        return todo;
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
        return todo;
    }

    getTodos() {
        return this.todos;
    }

    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
    }
}

// Export or use the TodoList
const myTodoList = new TodoList();
myTodoList.addTodo("Learn JavaScript");
myTodoList.addTodo("Build a cool project");
console.log(myTodoList.getTodos());
