/**
 * Created by griga on 7/11/16.
 */


import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout.component';
import { AuthLayoutComponent } from './shared/layout/app-layouts/auth-layout.component';
import { ModuleWithProviders } from '@angular/core';

let siguiente = 'administrador';

if (window.localStorage.getItem('category') === '2') {
  siguiente = 'comite';
} else if (window.localStorage.getItem('category') === '3') {
  siguiente = 'incubado';
}
export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: { pageTitle: 'Home' }

  }
  //
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
