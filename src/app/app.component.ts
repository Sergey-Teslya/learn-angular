import {Component, OnInit} from '@angular/core';
import {Todo, TodoService} from "./todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public todos: Todo[]
  public titleTodo: string

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.fetchTodos()
  }

  addTodo() {
    if (!this.titleTodo.trim()) {
      return
    }

    const todo: Todo = {
      title: this.titleTodo,
      completed: false
    }

    this.todoService.create(todo)
      .subscribe(todo => {
        this.todos.push(todo)
        this.titleTodo = ''
      })
  }

  fetchTodos() {
    this.todoService.getTodos()
      .subscribe(response => {
        this.todos = response
      });
  }

  removeTodo(id: number) {
    this.todoService.remove(id)
      .subscribe(ignore => {
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }

  completeTodo(id: number) {
    this.todoService.complete(id)
      .subscribe(response => {
        this.todos.find(todo => todo.id === response.id).completed = true
      })
  }
}
