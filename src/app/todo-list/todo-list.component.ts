import {Component, Input, OnInit} from '@angular/core';
import {ITodoListItem} from "../app.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() listItems: ITodoListItem[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.listItems);
  }

}
