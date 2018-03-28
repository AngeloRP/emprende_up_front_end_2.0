import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableContentComponent } from './table-content/table-content.component';
import { SwitchComponent } from './switch/switch.component';
import { FilterComponent } from './filter/filter.component';
import { HeadersComponent } from './headers/headers.component';
import { RowsComponent } from './rows/rows.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableComponent, TableContentComponent, SwitchComponent, FilterComponent, HeadersComponent, RowsComponent
  ],
  exports: [
    TableComponent, TableContentComponent, SwitchComponent, FilterComponent, HeadersComponent, RowsComponent
  ]
})
export class TableModule { }
