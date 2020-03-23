import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() text: string;
  @Input() isDone: boolean;
  @Input() isImportant: boolean;

  @Output() onDelete = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }
}
