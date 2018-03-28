import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

const ROLES = Object.freeze({
  'administrador': '1',
  'evaluador': '2',  // evaluador
  'incubado': '3',   // usuario incubado
})

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const roles = (next.data && next.data.roles) || [];
    if (roles.length === 0) {
      console.log('Rol no existe');
      this.router.navigate(['/auth']);
      return false;
    }

    for (const rol of roles) {
      if (rol === window.localStorage.getItem('category')) {
        return true;
      }
    }
    this.router.navigate(['/auth']);
    return false;
  }
}