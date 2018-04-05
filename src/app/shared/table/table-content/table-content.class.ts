import { Input } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
export class TableContent {
    @Input() rows: any[];
    @Input() columns: TableColumn[];
    @Input() loading: boolean;
}
