import { FormInterface } from './form.interface';
import { ResponseJson } from '../../response_json';
import { RequestJson } from '../../request_json';
import { InterfacesBackRequest } from '../../interfaces_back_request.enum';
import { FieldsetInterface } from '../form-content/fieldset/fieldset.interface';
export class Form implements FormInterface {
    loading: boolean;
    fieldsets: FieldsetInterface[];
    clase: string | '';
    id: string | '';
    requestJson: any = {};
    responseJson: any = {};
    constructor() {
        this.loading = false;
    }

    constructorFormulario(
        id: string,
        clase: string,
        fieldsets: FieldsetInterface[]
    ) {
        this.id = id;
        this.clase = clase;
        this.fieldsets = fieldsets;
    }

    protected submitForm(event) {
        event.preventDefault();
        this.loading = true;
        console.log('Event: ' + JSON.stringify(event));
        this.generarResponse();
    }

    protected generarResponse() {
        for (let index = 0; index < this.fieldsets.length; index++) {
            const fieldset = this.fieldsets[index];
            for (let index2 = 0; index2 < fieldset.inputs.length; index2++) {
                const input = fieldset.inputs[index2];
                // console.log('Input:' + JSON.stringify(input));
                if (input.data.isRequired === true) {
                    this.requestJson[input.data.id] = input.data.value;
                }
            }
        }
        // console.log('Request Json:' + JSON.stringify(this.requestJson));
        this.requestBack();
    }

    protected requestBack() {

    }
}
