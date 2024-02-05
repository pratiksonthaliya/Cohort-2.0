/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = [];
  }
  add(todo) {
    this.todoList.push(todo);
  }
  remove(indexOfTodo) {
    let newTodo = [];
    for (let i = 0; i < this.todoList.length; i++) {
      if (i !== indexOfTodo) {
        newTodo.push(this.todoList[i]);
      }
    }
    this.todoList = newTodo;
  }
  update(index, updatedTodo) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (i === index) {
        this.todoList[i] = updatedTodo;
      }
    }
  }
  getAll() {
    return this.todoList;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todoList.length) {
      return this.todoList[indexOfTodo];
    } else return null;
  }
  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
