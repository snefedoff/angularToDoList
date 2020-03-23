import { Component, OnInit } from '@angular/core';
import {TodoListService} from "../todo-list.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(public todoListService: TodoListService) { }

  ngOnInit(): void {
  }

}
