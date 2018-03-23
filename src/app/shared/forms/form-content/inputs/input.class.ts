import { Input } from '@angular/core';
import { IconoInterface } from '../icono/icono.interface';
import { InputClassContent } from './input-content.class';

export class InputClass extends InputClassContent {
    @Input() imagen: IconoInterface;
    constructor() {
        super();
    }
}