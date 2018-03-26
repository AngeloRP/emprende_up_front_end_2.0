import { Input } from '@angular/core';
import { IconoInterface } from '../icono/icono.interface';
import { InputClassContent } from './input-content.class';
import { InputLabelInterface } from './input_label.interface';

/**
 * @param hasLabel verifica que el campo input tenga un label en la parte izquierda si true
 */

export class InputClass extends InputClassContent {
    @Input() imagen: IconoInterface;
    @Input() label: InputLabelInterface;
    constructor() {
        super();
    }
}
