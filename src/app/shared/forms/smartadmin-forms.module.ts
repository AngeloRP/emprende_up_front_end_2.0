

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {SmartadminValidationModule} from './validation/smartadmin-validation.module';
import {SmartadminWizardsModule} from './wizards/smartadmin-wizards.module';
import { ButtonAceptarComponent } from './form-content/buttons/button-aceptar/button-aceptar.component';
import { ButtonCancelarComponent } from './form-content/buttons/button-cancelar/button-cancelar.component';
import { ButtonEliminarComponent } from './form-content/buttons/button-eliminar/button-eliminar.component';
import { InputTextComponent } from './form-content/inputs/input-text/input-text.component';
import { InputDateComponent } from './form-content/inputs/input-date/input-date.component';
import { InputNumberComponent } from './form-content/inputs/input-number/input-number.component';
import { InputMillarComponent } from './form-content/inputs/input-millar/input-millar.component';
import { InputPhoneComponent } from './form-content/inputs/input-phone/input-phone.component';
import { InputPasswordComponent } from './form-content/inputs/input-password/input-password.component';
import { InputEmailComponent } from './form-content/inputs/input-email/input-email.component';
import { InputCheckboxComponent } from './form-content/inputs/input-checkbox/input-checkbox.component';
import { InputRadioButtonComponent } from './form-content/inputs/input-radio-button/input-radio-button.component';
import { SelectComunComponent } from './form-content/selects/select-comun/select-comun.component';
import { SelectMultipleComponent } from './form-content/selects/select-multiple/select-multiple.component';
import { SelectSearchComponent } from './form-content/selects/select-search/select-search.component';
import { InputSubmitComponent } from './form-content/inputs/input-submit/input-submit.component';
import { InputResetComponent } from './form-content/inputs/input-reset/input-reset.component';
import { InputFileComponent } from './form-content/inputs/input-file/input-file.component';
import { InputHiddenComponent } from './form-content/inputs/input-hidden/input-hidden.component';
import { InputComponent } from './form-content/inputs/input/input.component';
import { IconoComponent } from './form-content/icono/icono.component';
import { InputContentComponent } from './form-content/inputs/input-content/input-content.component';



@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [
    ButtonEliminarComponent,
    ButtonAceptarComponent,
    ButtonCancelarComponent,
    InputTextComponent,
    InputDateComponent,
    InputNumberComponent,
    InputMillarComponent,
    InputPhoneComponent,
    InputPasswordComponent,
    InputEmailComponent,
    InputCheckboxComponent,
    InputRadioButtonComponent,
    SelectComunComponent,
    SelectMultipleComponent,
    SelectSearchComponent,
    InputSubmitComponent,
    InputResetComponent,
    InputFileComponent,
    InputHiddenComponent,
    InputComponent,
    IconoComponent,
    InputContentComponent
  ],
  exports: [
    SmartadminValidationModule,
    SmartadminWizardsModule,
    ButtonEliminarComponent,
    ButtonAceptarComponent,
    ButtonCancelarComponent  ]

})
export class SmartadminFormsModule {}
