import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { InputContentComponent } from './input-content/input-content.component';
import { InputHiddenComponent } from './input-hidden/input-hidden.component';
import { InputFileComponent } from './input-file/input-file.component';
import { InputResetComponent } from './input-reset/input-reset.component';
import { InputSubmitComponent } from './input-submit/input-submit.component';
import { InputRadioButtonComponent } from './input-radio-button/input-radio-button.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputPhoneComponent } from './input-phone/input-phone.component';
import { InputMillarComponent } from './input-millar/input-millar.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule } from '@angular/forms';
import { IconosModule } from '../icono/iconos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IconosModule
  ],
  declarations: [
    InputComponent,
    InputContentComponent,
    InputHiddenComponent,
    InputFileComponent,
    InputResetComponent,
    InputSubmitComponent,
    InputRadioButtonComponent,
    InputCheckboxComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputPhoneComponent,
    InputMillarComponent,
    InputNumberComponent,
    InputDateComponent,
    InputTextComponent
  ],
  exports: [
    InputComponent,
    InputContentComponent,
    InputHiddenComponent,
    InputFileComponent,
    InputResetComponent,
    InputSubmitComponent,
    InputRadioButtonComponent,
    InputCheckboxComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputPhoneComponent,
    InputMillarComponent,
    InputNumberComponent,
    InputDateComponent,
    InputTextComponent
  ]
})
export class InputsModule { }
