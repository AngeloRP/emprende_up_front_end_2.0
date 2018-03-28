import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesGuard } from './roles.guard';
let siguiente = 'administrador';

if (window.localStorage.getItem('category') !== undefined) {
  if (window.localStorage.getItem('category') != null) {
    if (window.localStorage.getItem('category') !== '') {
      if (window.localStorage.getItem('category') === '2') {
        siguiente = 'evaluador';
      } else if (window.localStorage.getItem('category') === '3') {
        siguiente = 'incubado';
      }
    }
  }
}

const routes: Routes = [
  {
    path: '',
    redirectTo: siguiente,
    pathMatch: 'full'
  },
  {
    path: 'administrador',
    data: { pageTitle: 'Perfil del Administrador', roles: ['administrador'] },
    loadChildren: 'app/emprende-up/administrador/administrador.module#AdministradorModule',
    canActivate: [ RolesGuard ]
  },
  {
    path: 'evaluador',
    data: { pageTitle: 'Perfil del Evaluador', roles: ['evaluador'] },
    loadChildren: 'app/emprende-up/evaluador/evaluador.module#EvaluadorModule',
    canActivate: [ RolesGuard ]
  },
  {
    path: 'incubado',
    data: { pageTitle: 'Perfil del Incubado', roles: ['incubado'] },
    loadChildren: 'app/emprende-up/incubado/incubado.module#IncubadoModule',
    canActivate: [ RolesGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmprendeUpRoutingModule { }
