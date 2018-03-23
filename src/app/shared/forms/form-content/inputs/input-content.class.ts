
import { Input } from '@angular/core';
import { InputClassContentPadre } from './input-content-padre.class';
import { TypeInput } from './enum-type-input';
export class InputClassContent extends InputClassContentPadre {
    @Input() type: TypeInput = TypeInput.text;
    constructor() {
        super();
    }
}
