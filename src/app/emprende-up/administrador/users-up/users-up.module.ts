import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersUpRoutingModule } from './users-up-routing.module';
import { UsersUpListComponent } from './users-up-list/users-up-list.component';
import { LoadingsModule } from '../../../shared/loadings/loadings.module';
import { HttpModule } from '@angular/http';
import { UsersModule } from '../../shared-up/users/users.module';

@NgModule({
  imports: [
    CommonModule,
    UsersUpRoutingModule,
    LoadingsModule,
    HttpModule,
    UsersModule
  ],
  declarations: [UsersUpListComponent]
})
export class UsersUpModule { }
