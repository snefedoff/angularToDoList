import {Injectable} from '@angular/core';

export class TodoItem {
  name: string;
  isDone: boolean;
  isImportant: boolean;

  constructor(text: string) {
    this.name = text;
    this.isDone = false;
    this.isImportant = false;
  }
}

export interface ITodoService {
  add(todoText: string);

  remove(idx: number);

  update(idx: number, record: TodoItem);
}

@Injectable({
  providedIn: 'root'
})
export class TodoListService implements ITodoService {

  public todoList: Array<TodoItem>;

  constructor() {
    this.todoList = new Array<TodoItem>();
    this.init();
  }

  add(todoText: string) {
    this.todoList.push(new TodoItem(todoText));
  }

  remove(idx: number) {
    this.todoList.splice(idx, 1);
  }

  update(idx: number, record: TodoItem) {
  }

  init() {
    this.add('Learn HTML');
    this.add('Learn CSS');
    this.add('Learn JavaScript');
    this.add('Learn Angular');
    this.add('Make something awesome ');
    this.add('Profit');
  }

  getDoneTodosCount() {
    return this.todoList.filter(item => item.isDone).length;
  }

  getAllTodosCount() {
    return this.todoList.length;
  }
}
