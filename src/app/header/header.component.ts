import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoListService} from "../todo-list.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public todoListService: TodoListService) { }

  ngOnInit(): void {
  }
}
