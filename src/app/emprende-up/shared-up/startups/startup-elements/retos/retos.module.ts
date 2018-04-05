import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetoComponent } from './reto/reto.component';
import { RetosListComponent } from './retos-list/retos-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RetoComponent, RetosListComponent]
})
export class RetosModule { }
