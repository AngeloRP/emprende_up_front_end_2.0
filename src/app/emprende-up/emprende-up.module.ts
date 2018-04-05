import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmprendeUpRoutingModule } from './emprende-up-routing.module';
import { RolesGuard } from './roles.guard';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    EmprendeUpRoutingModule
  ],
  declarations: [],
  providers: [
    RolesGuard
  ]
})
export class EmprendeUpModule { }
