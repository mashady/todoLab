import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-wrapper',
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css',
})
export class WrapperComponent {
  allTodo: any[] = [];

  newTodo(newTodo: any): void {
    const todoObj: any = {
      id: this.allTodo?.length + 1 || 1,
      name: newTodo,
      completed: false,
    };
    this.allTodo.push(todoObj);
  }
  taskStatus(oneTodo: any): void {
    oneTodo.completed = !oneTodo.completed;
  }
  deleteTodo(id: any): void {
    this.allTodo = this.allTodo.filter((todo) => todo.id !== id);
  }
}
