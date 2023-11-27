import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-guard.service.spec';

@Injectable({
 providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(public authService: AuthService, private router: Router) {}

 canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  if (this.authService.getIsAuthenticated() !== false) {
    return true;
  } else {
    this.router.navigate(['/login']);
    return false;
  }
 }

}