import { Input } from '@angular/core';
import { Content } from '../content.class';
import { ColumnInterface } from '../column/column.interface';
export class TableContent extends Content {
    @Input() columns: ColumnInterface[];
    @Input() searColumns: string[];
    @Input() searValue: string;
    @Input() pageSize: number | 10;
    @Input() idTable: string | '';
    @Input() pageNumber: number | 0;
    temp = [];
    /**
     * En prop va el nombre del valor de base de datos y en name
     * si es un columna de botones 'action'
     * si es una columna con valores normales de bd 'normal-value'
     * si se quiere crear una nueva columna se crea un nuevo componente columna
     * se define que tipo que valor deberia ser campo name y se agrega un ngIf en
     * el componente columns
     */
    constructor() {
        super();
    }

    /*updateFilter(event) {

    }*/

}
