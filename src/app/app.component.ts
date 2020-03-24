import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  selectedFilter: string;
  filterText: string;

  constructor() {
  }

  ngOnInit() {
  }

  setFilter(filt) {
    this.selectedFilter = filt;
  }

  setFilterText(text) {
    this.filterText = text;
  }
}
