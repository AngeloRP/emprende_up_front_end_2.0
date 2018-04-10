import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import { TableContent } from './table-content.class';
import { isNumber, isNull } from 'util';
// import { ColumnComponent } from '../column/column.component';
import { ColumnsComponent } from '../columns/columns.component';

import {
  TableColumn,
  ColumnMode,
  DatatableComponent
} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableContentComponent extends TableContent implements OnInit, AfterViewInit, OnChanges {
  // @ViewChild('action') action: TemplateRef<any>;
  @ViewChild(ColumnsComponent)
  private columnsChild: ColumnsComponent;
  @ViewChild(DatatableComponent) table: DatatableComponent;
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
              this.temp = this.rows;
            }, 0);
            console.log('Index:' + index + '-Cantidad:' + this.columnsChild.columnsComponent.length);
            console.log('view Init:' + this.columnsChild.columnsComponent[index]);
            this.columns[index].cellTemplate = this.columnsChild.columnsComponent[index].template;
          }
        }
      }
    }
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searValue && !changes.searValue.isFirstChange()) {
      // exteranl API call or more preprocessing...
      // console.log('sadadadadad');
      setTimeout(() => {
        // this.updateFilter();
        this.updateTable();
      }, 0);
    }
  }

  private updateTable() {
    // console.log('Event:' + event);
    // console.log('Event JSON:' + JSON.stringify(event));
    // event.preventDefault();
    // console.log('Filter Event:' + event);
    // console.log('Filter Event JSON:' + JSON.stringify(event));
    const val = this.searValue.toLowerCase();
    console.log('Escrito en filter:' + val);
    console.log('Columnas de busqueda:' + this.searColumns);
    console.log('Temp:' + JSON.stringify(this.temp));
    // filter our data
    const temp = this.temp.filter(d => {
      // console.log('Nueva Tabla:' + d);
      console.log('Nueva Tabla:' + JSON.stringify(d));
      return (
        !val ||
        this.searColumns.some((field: any) => {
          console.log('Field:' + field);
          console.log('Value:' + d[field]);
          if (d[field] === undefined || d[field] === 'undefined') {
            return false;
          } else {
            if (isNumber(d[field])) {
              return (d[field] + '').toLowerCase().indexOf(val) !== -1;
            } else {
              return d[field].toLowerCase().indexOf(val) !== -1;
            }
          }
        })
      );
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

}
