import {Component, Input, OnInit} from '@angular/core';

export interface ITodoListItem {
  id: number;
  text: string;
  isImportant: boolean;
  isDone: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular To-Do List';

  listItems: ITodoListItem[];

  constructor() {
    this.listItems = [];
  }

  ngOnInit() {}

  onAddItem( txt: string) {
    this.listItems.push({ id: this.listItems.length, text: txt, isImportant: false, isDone: false});
  }
}
