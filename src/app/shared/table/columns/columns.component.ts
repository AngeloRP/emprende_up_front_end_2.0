import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { TableContent } from '../table-content/table-content.class';
import { ColumnComponent } from '../column/column.component';
import { ColumnActionsComponent } from '../column-actions/column-actions.component';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})
export class ColumnsComponent extends TableContent implements OnInit, AfterViewInit {
  @ViewChildren(ColumnComponent) columnChildren: QueryList<ColumnComponent>;
  @ViewChildren(ColumnActionsComponent) columnActionChildren: QueryList<ColumnActionsComponent>;
  private columnsValueComponent: ColumnComponent[];
  private columnActionsComponent: ColumnActionsComponent[];
  columnsComponent: any[];
  constructor() {
    super();
    this.loading = true;
  }

  ngAfterViewInit() {
    this.columnsValueComponent = this.columnChildren.toArray();
    this.columnActionsComponent = this.columnActionChildren.toArray();
    this.columnsComponent = this.columnActionsComponent;
    for (let index = 0; index < this.columnsValueComponent.length; index++) {
      this.columnsComponent.push(this.columnsValueComponent[index]);
    }
    let indexValues = 0;
    let indexButtons = 0;
    for (let i = 0; i < this.columns.length; i++) {
      if (this.columns[i].tipo === undefined) {
        this.columnsComponent.push(this.columnActionsComponent[indexValues++]);
      } else {
        if (this.columns[i].tipo === 'action') {
          this.columnsComponent.push(this.columnActionsComponent[indexButtons++]);
        }
      }
    }
    console.log('Cantidad de Columnas con Valores:' + this.columnsValueComponent.length);
    console.log('Cantidad de Columnas con Botones:' + this.columnActionsComponent.length);
    console.log('Cantidad de Columnas:' + this.columnsComponent.length);
    this.loading = false;
    // this.columnsComponent[0].
  }

  ngOnInit() {
  }

}
