import { TableColumn } from '@swimlane/ngx-datatable';
export interface ColumnInterface extends TableColumn {
    tipo?: string | 'normal-value';
}
