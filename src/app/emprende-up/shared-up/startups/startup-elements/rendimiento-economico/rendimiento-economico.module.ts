import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendimientoEconomicoInicialComponent } from './rendimiento-economico-inicial/rendimiento-economico-inicial.component';
import { RendimientoEconomicoComponent } from './rendimiento-economico/rendimiento-economico.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RendimientoEconomicoInicialComponent, RendimientoEconomicoComponent]
})
export class RendimientoEconomicoModule { }
