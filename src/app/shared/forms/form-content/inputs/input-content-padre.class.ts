import { InputInterface } from './input.interface';
import { Input } from '@angular/core';
import { InputOptions } from './input-options.interface';
export class InputClassContentPadre {
    @Input() data: InputInterface;
    @Input() options: InputOptions;
    constructor() {
    }

    operation() {

    }
}
