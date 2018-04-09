import { TableColumn } from '@swimlane/ngx-datatable';
export interface TableContentInterface {
    rows: any[];
    columns: TableColumn[];
    loading: boolean;
    nameColumnButtons: string;
}
