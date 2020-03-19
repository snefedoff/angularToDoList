import {Component, Input, OnInit} from '@angular/core';
import {ITodoListItem} from "../app.component";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() props: ITodoListItem;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {

  }
}
