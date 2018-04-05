import { Component, OnInit } from '@angular/core';
import { TableContent } from './table-content.class';

import {
  TableColumn,
  ColumnMode
} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.css']
})
export class TableContentComponent extends TableContent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
