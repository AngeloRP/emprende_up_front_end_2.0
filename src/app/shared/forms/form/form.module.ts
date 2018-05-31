import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormContentModule } from '../form-content/form-content.module';

@NgModule({
  imports: [
    CommonModule,
    FormContentModule
  ],
  declarations: [
    FormComponent
  ],
  exports: [
    FormComponent,
    FormContentModule
  ]
})
export class FormModule { }
