import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout.component';
import { AuthLayoutComponent } from './shared/layout/app-layouts/auth-layout.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthenticationGuard } from './authentication.guard';


export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: { pageTitle: 'Home' },
    loadChildren: 'app/emprende-up/emprende-up.module#EmprendeUpModule',
    canActivate: [AuthenticationGuard],
    canActivateChild: [AuthenticationGuard]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  { path: '**', redirectTo: 'auth' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
