import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SAuthService } from './s-auth.service';

@Injectable({
  providedIn: 'root'
})
export class GAuthGuard implements CanActivate {
  constructor(private authService:SAuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.authService.getToken())
        return true;
      return false;
  }
  
}
