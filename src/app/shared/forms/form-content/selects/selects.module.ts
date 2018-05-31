import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComunComponent } from './select-comun/select-comun.component';
import { SelectMultipleComponent } from './select-multiple/select-multiple.component';
import { SelectSearchComponent } from './select-search/select-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectComunComponent,
    SelectMultipleComponent,
    SelectSearchComponent
  ],
  exports: [
    SelectComunComponent,
    SelectMultipleComponent,
    SelectSearchComponent
  ]
})
export class SelectsModule { }
