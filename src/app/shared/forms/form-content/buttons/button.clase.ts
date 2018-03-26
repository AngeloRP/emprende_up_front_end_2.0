import { Input, Output, EventEmitter } from '@angular/core';
import { ButtonInt } from './button.interface';
export class Button {
    @Input() data: ButtonInt = { id: '', title: '', clase: '', contenido: '', hasImagen: false };
    @Output() action: EventEmitter<any>;
    constructor() {
        this.action = new EventEmitter<any>();
    }

    protected hacerClick() {
        this.action.emit(true);
    }
}
