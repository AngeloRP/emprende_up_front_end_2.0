import { IconoInterface } from '../icono/icono.interface';
import { TypeInput } from '../inputs/enum-type-input';
import { InputInterface } from '../inputs/input.interface';
import { InputOptions } from '../inputs/input-options.interface';
import { InputLabelInterface } from '../inputs/input_label.interface';

export interface FieldsetInput {
    imagen: IconoInterface,
    type: TypeInput | 'text',
    data: InputInterface,
    options: InputOptions,
    label: InputLabelInterface,
    clase: string | '',
    id: string | ''
}

export interface FieldsetInterface {
    inputs: FieldsetInput[];
    hasLegend: boolean | false;
    legend: string | '';
    clase: string | '';
    id: string | '';
}
