import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private SharedService: SharedService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if (JSON.parse(localStorage.getItem('user')) ||state.url === '/authentication/register/simple' || state.url === 'dashboard/defautl') {
      //   return true;
      // } else {
      //   this.router.navigate(["/auth/login"]);
      // }
      return true;
  }
}
