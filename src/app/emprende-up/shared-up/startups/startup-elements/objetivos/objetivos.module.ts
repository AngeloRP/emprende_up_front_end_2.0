import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { ObjetivosListComponent } from './objetivos-list/objetivos-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ObjetivoComponent, ObjetivosListComponent]
})
export class ObjetivosModule { }
