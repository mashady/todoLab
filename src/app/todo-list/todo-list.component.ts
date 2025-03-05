import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [NgStyle],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() allTodo: any;
  @Output() handleDelete = new EventEmitter<number>();
  @Output() toggler = new EventEmitter<number>();

  hanldeDeleteButton(todoID: any) {
    this.handleDelete.emit(todoID);
    console.log(todoID);
  }
  handleChangeStatus(todo: any) {
    this.toggler.emit(todo);
    console.log(todo);
  }
}
