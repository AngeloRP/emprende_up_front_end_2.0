import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmprendeUpRoutingModule } from './emprende-up-routing.module';
import { RolesGuard } from './roles.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EmprendeUpRoutingModule
  ],
  declarations: [],
  providers: [
    RolesGuard
  ]
})
export class EmprendeUpModule { }
