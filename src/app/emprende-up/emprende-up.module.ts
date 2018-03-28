import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmprendeUpRoutingModule } from './emprende-up-routing.module';
import { RolesGuard } from './roles.guard';

@NgModule({
  imports: [
    CommonModule,
    EmprendeUpRoutingModule
  ],
  declarations: [],
  providers: [
    RolesGuard
  ]
})
export class EmprendeUpModule { }
