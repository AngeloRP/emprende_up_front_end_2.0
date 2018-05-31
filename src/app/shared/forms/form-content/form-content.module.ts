import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from './buttons/buttons.module';
import { FieldsetModule } from './fieldset/fieldset.module';
import { InputsModule } from './inputs/inputs.module';
import { SelectsModule } from './selects/selects.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule,
    FieldsetModule,
    InputsModule,
    SelectsModule
  ],
  declarations: []
})
export class FormContentModule { }
