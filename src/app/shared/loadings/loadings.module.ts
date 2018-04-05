import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingOndaComponent } from './loading-onda/loading-onda.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingOndaComponent],
  exports: [
    LoadingOndaComponent
  ]
})
export class LoadingsModule { }
