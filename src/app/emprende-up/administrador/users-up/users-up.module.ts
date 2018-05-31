import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersUpRoutingModule } from './users-up-routing.module';
import { UsersUpListComponent } from './users-up-list/users-up-list.component';
import { LoadingsModule } from '../../../shared/loadings/loadings.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from '../../shared-up/users/users.module';

@NgModule({
  imports: [
    CommonModule,
    UsersUpRoutingModule,
    LoadingsModule,
    HttpClientModule,
    UsersModule
  ],
  declarations: [UsersUpListComponent]
})
export class UsersUpModule { }
