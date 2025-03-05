import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  imports: [],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  @Output() newTodoSender = new EventEmitter<any>();

  handleAddingNew(newTodo: any) {
    this.newTodoSender.emit(newTodo);
    console.log(newTodo);
  }
}
