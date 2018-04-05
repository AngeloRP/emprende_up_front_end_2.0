import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesoriaComponent } from './asesoria/asesoria.component';
import { AsesoriaComoServicioComponent } from './asesoria-como-servicio/asesoria-como-servicio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AsesoriaComponent, AsesoriaComoServicioComponent]
})
export class AsesoriasModule { }
