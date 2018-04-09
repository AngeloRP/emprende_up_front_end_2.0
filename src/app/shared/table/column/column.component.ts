import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { TableContent } from '../table-content/table-content.class';
import { Column } from './column.class';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent extends Column implements OnInit, AfterViewInit {
  @ViewChild('template') template: TemplateRef<any>;
  constructor() {
    super();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log('Entro view Init');
    console.log('Template:' + this.template);
  }

}
