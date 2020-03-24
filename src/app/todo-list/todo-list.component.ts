import {Component, Input, OnInit} from '@angular/core';
import {TodoItem, TodoListService} from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() selectedFilter: string;
  @Input() filterText: string;

  constructor(public todoListService: TodoListService) {
  }

  ngOnInit(): void {
  }

  onItemDelete(item): void {
    this.todoListService.todoList.splice(
      this.todoListService.todoList.indexOf(item),
      1
    );
  }

  onItemImportant(item): void {
    item.isImportant = !item.isImportant;
  }

  onItemDone(item): void {
    item.isDone = !item.isDone;
  }

  getList(): TodoItem[] {

    let list = this.todoListService.todoList;
    if (this.filterText) {
      list = list.filter(item => item.name.includes(this.filterText));
    }

    switch (this.selectedFilter) {
      case 'important':
        return list.filter(item => item.isImportant);
        break;
      case 'done':
        return list.filter(item => item.isDone);
        break;
      case 'all':
      default:
        return list;
    }
  }
}
