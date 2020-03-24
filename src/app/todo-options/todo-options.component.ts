import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-options',
  templateUrl: './todo-options.component.html',
  styleUrls: ['./todo-options.component.scss']
})
export class TodoOptionsComponent implements OnInit {
  @Output() onFilterSelect = new EventEmitter();
  @Output() onFilterTextInput = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
