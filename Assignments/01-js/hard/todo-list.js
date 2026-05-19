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
  
  constructor(){
    this.todos = []
  }

  add(todo){
    this.todos.push(todo)
  }

  remove(indexOfTodo){
    this.todos.splice(indexOfTodo,1)
  }

  getAll(){
    const arr = []
    this.todos.forEach((todo)=>{
      arr.push(todo)
    })
    return arr
  }

  update(index,updatedTodo){
    const todo = this.todos[index]
    if(todo){
      this.todos[index] = updatedTodo
    } 
  }

  get(indexOfTodo){
    const todo = this.todos[indexOfTodo]
    if(todo===undefined){
      return null
    }
    return todo
  }

  clear(){
    this.todos = []
  }
}

const workTodo = new Todo()
workTodo.add("gaming")
workTodo.add("hacking")
workTodo.getAll()
workTodo.add("work emails")
workTodo.getAll()
workTodo.remove(1)
workTodo.update(0,"client meeting")
workTodo.get(1)
workTodo.clear()
module.exports = Todo;
