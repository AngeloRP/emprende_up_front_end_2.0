import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetComponent } from './fieldset.component';
import { InputsModule } from '../inputs/inputs.module';

@NgModule({
  imports: [
    CommonModule,
    InputsModule
  ],
  declarations: [
    FieldsetComponent
  ],
  exports: [
    FieldsetComponent
  ]
})
export class FieldsetModule { }
