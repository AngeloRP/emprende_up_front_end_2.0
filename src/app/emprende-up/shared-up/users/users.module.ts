import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './users-table/users-table.component';
import { TableModule } from '../../../shared/table/table.module';
import { UsersTableService } from './users-table/users-table.service';
import { UserComponent } from './user/user.component';
import { LoadingsModule } from '../../../shared/loadings/loadings.module';
import { UsersTableInactiveComponent } from './users-table-inactive/users-table-inactive.component';
import { UserInactiveComponent } from './user-inactive/user-inactive.component';
import { UsersTableInactiveService } from './users-table-inactive/users-table-inactive.service';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    LoadingsModule
  ],
  declarations: [
    UsersTableComponent,
    UserComponent,
    UsersTableInactiveComponent,
    UserInactiveComponent
  ],
  exports: [
    UsersTableComponent,
    UsersTableInactiveComponent
  ],
  providers: [
    UsersTableService,
    UsersTableInactiveService
  ]
})
export class UsersModule { }
