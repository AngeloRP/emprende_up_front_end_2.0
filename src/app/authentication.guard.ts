import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (window.localStorage.getItem('category') !== undefined) {
      const category = window.localStorage.getItem('category');
      console.log('Category:' + category);
      if (category !== 'undefined') {
        if (category != null) {
          if (
            category === '1' ||  // Administrador
            category === '2' ||  // Evaluador
            category === '3'     // Incubado
          ) {
            return true;
          }
        }
      }
    } else {
      console.log('Redireccionando a authentication');
      this.router.navigate(['/auth']);
      return false;
    }
  }

  canActivateChild() {
    return true;
  }
}
