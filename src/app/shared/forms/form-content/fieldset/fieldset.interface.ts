import { IconoInterface } from '../icono/icono.interface';
import { TypeInput } from '../inputs/enum-type-input';
import { InputInterface } from '../inputs/input.interface';
import { InputOptions } from '../inputs/input-options.interface';
import { InputLabelInterface } from '../inputs/input_label.interface';

export interface FieldsetInput {
    imagen: IconoInterface,
    type: TypeInput,
    data: InputInterface,
    options: InputOptions,
    label: InputLabelInterface
}

export interface FieldsetInterface {
    inputs: FieldsetInput[];
    clase: string;
    id: string;
}
