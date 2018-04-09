import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableContentComponent } from './table-content/table-content.component';
import { SwitchComponent } from './switch/switch.component';
import { FilterComponent } from './filter/filter.component';
import { HeadersComponent } from './headers/headers.component';
import { RowsComponent } from './rows/rows.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ColumnsComponent } from './columns/columns.component';
import { ColumnComponent } from './column/column.component';
import { ColumnActionsComponent } from './column-actions/column-actions.component';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  declarations: [
    TableComponent,
    TableContentComponent,
    SwitchComponent,
    FilterComponent,
    HeadersComponent,
    RowsComponent,
    ColumnComponent,
    ColumnsComponent,
    ColumnActionsComponent
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
