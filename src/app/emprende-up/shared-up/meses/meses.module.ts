import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MesComponent } from './mes/mes.component';
import { MesesActivosComponent } from './meses-activos/meses-activos.component';
import { MesesAllComponent } from './meses-all/meses-all.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MesComponent, MesesActivosComponent, MesesAllComponent]
})
export class MesesModule { }
