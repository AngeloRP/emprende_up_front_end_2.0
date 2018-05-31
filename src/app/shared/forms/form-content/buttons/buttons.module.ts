import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCancelarComponent } from './button-cancelar/button-cancelar.component';
import { ButtonAceptarComponent } from './button-aceptar/button-aceptar.component';
import { ButtonEliminarComponent } from './button-eliminar/button-eliminar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonEliminarComponent,
    ButtonAceptarComponent,
    ButtonCancelarComponent],
  exports: [
    ButtonEliminarComponent,
    ButtonAceptarComponent,
    ButtonCancelarComponent
  ]
})
export class ButtonsModule { }
