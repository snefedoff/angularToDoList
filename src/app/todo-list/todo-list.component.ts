import {Component, Input, OnInit} from '@angular/core';
import {TodoListService} from "../todo-list.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(public todoListService: TodoListService) {
    console.log(todoListService.todoList);
  }

  ngOnInit(): void {
  }

  onItemDelete(e, _item) {
    const list = this.todoListService.todoList;
    list.splice(list.indexOf(_item), 1);
  }


}
