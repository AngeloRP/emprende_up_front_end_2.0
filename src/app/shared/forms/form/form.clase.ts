import { FormInterface } from './form.interface';
import { ResponseJson } from '../../response_json';
import { RequestJson } from '../../request_json';
import { InterfacesBackRequest } from '../../interfaces_back_request.enum';
export class Form {
    loading: boolean;
    form: FormInterface;
    requestJson: any = {};
    responseJson: any = {};
    constructor() {
        this.loading = false;
    }

    protected submitForm(event) {
        this.loading = true;
        console.log('Event: ' + JSON.stringify(event));
        this.generarResponse();
    }

    protected generarResponse() {
        for (let index = 0; index < this.form.fieldsets.length; index++) {
            const fieldset = this.form.fieldsets[index];
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
