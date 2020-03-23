import {Component, OnInit} from '@angular/core';
import {TodoItem, TodoListService} from "../todo-list.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(public todoListService: TodoListService) {
  }

  ngOnInit(): void {
  }

  onItemDelete(item): void {
    const list = this.getList();
    list.splice(list.indexOf(item), 1);
  }

  onItemImportant(item): void {
    item.isImportant = !item.isImportant;
  }

  onItemDone(item): void {
    item.isDone = true;
  }

  getList(): TodoItem[] {
    return this.todoListService.todoList;
  }
}
