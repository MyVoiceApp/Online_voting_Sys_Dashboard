import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router : Router){}

    canActivate():  boolean{

      if (localStorage.getItem('token')) {
        return true
      } else {
        this._router.navigate(['/login'])
        return false;
      }
    }

}
