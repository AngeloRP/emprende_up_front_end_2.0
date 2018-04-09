import { Content } from '../content.class';
import { Input } from '@angular/core';
import { ColumnInterface } from './column.interface';
export class Column extends Content {
    @Input() column: ColumnInterface;
    @Input() row: any;
}
