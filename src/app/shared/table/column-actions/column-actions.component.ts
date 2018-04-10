import { Component, OnInit, ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Column } from '../column/column.class';

@Component({
  selector: 'app-column-actions',
  templateUrl: './column-actions.component.html',
  styleUrls: ['./column-actions.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ColumnActionsComponent extends Column implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
