import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { TableContent } from './table-content.class';
// import { ColumnComponent } from '../column/column.component';
import { ColumnsComponent } from '../columns/columns.component';

import {
  TableColumn,
  ColumnMode
} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableContentComponent extends TableContent implements OnInit, AfterViewInit {
  // @ViewChild('action') action: TemplateRef<any>;
  @ViewChild(ColumnsComponent)
  private columnsChild: ColumnsComponent;
  constructor() {
    super();
    this.loading = true;
  }

  ngAfterViewInit() {
    if (this.columnsChild !== undefined) {
      if (this.columnsChild.loading === false) {
        for (let index = 0; index < this.columns.length; index++) {
          if (this.columnsChild.columnsComponent[index] !== undefined) {
            setTimeout(() => {
              this.loading = false;
            }, 0);
            console.log('Index:' + index + '-Cantidad:' + this.columnsChild.columnsComponent.length);
            console.log('view Init:' + this.columnsChild.columnsComponent[index]);
            this.columns[index].cellTemplate = this.columnsChild.columnsComponent[index].template;
          }
        }
      }
    }
    /*for (let index = 0; index < this.columns.length; index++) {
      console.log('view Init:' + this.columnsChild);
     // this.columns[index].cellTemplate = this.columnsChild.columnsComponent[index].template;
      // console.log('Template:' + this.normalColumn.mensaje());
      // console.log('Template JSON:' + JSON.stringify(this.normalColumn.mensaje()));
    }*/
  }

  ngOnInit() {
    /*if (this.posColumnAction !== undefined) {
      if (this.posColumnAction >= 0 && this.posColumnAction < this.columns.length) {
        if (this.columns[this.posColumnAction].tipo !== undefined) {
          console.log('Emtro a llenar template actions');
          this.columns[this.posColumnAction].cellTemplate = this.action;
        }
      }
    }*/
  }

}
