import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersUpListComponent } from './users-up-list/users-up-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: UsersUpListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersUpRoutingModule { }
