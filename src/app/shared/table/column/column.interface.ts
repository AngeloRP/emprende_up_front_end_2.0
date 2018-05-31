import { TableColumn } from '@swimlane/ngx-datatable';
import { InternalButton } from '../column-actions/internal-button';
export interface ColumnInterface extends TableColumn {
    widthText: number | 50;
    tipo?: string | 'normal-value';
    internal_buttons?: InternalButton[]; //
}
