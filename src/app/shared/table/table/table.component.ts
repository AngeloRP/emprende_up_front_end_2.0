import { Component, OnInit } from '@angular/core';
import { TableContent } from '../table-content/table-content.class';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent extends TableContent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
