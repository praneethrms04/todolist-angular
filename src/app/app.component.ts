import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'practice-app';

  todoitem: string = '';

  todos!: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodo();
    const todo1: Todo = {
      id: Date.now(),
      title: 'Todo 1',
      completed: true,
    };
    this.todoService.addTodo(todo1);
  }
  addTodo() {
    const newTodo: Todo = {
      id: Date.now(),
      title: this.todoitem,
      completed: false,
    };
    this.todoService.addTodo(newTodo);
    this.todoitem = '';
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
