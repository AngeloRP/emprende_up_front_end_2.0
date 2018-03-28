import { FieldsetInterface } from '../form-content/fieldset/fieldset.interface';
export interface FormInterface {
    fieldsets: FieldsetInterface[];
    clase: string | '';
    id: string | '';
}
