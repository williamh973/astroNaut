import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { TokenService } from '../shared/services/token/token.service';
import { LoginOrRegisterPopupService } from '../shared/services/login-or-register-popup/login-or-register-popup.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  role!: 'ROLE_USER' | 'ROLE_ADMIN';

  constructor(
    private router: Router,
    private tokenS: TokenService,
    public loginOrRegisterPopupService: LoginOrRegisterPopupService
  ) {
    this.tokenS
      ._getTokenDetailsSubject$()
      .pipe(map((decodedToken: any) => decodedToken.role))
      .subscribe((role: 'ROLE_USER' | 'ROLE_ADMIN') => {
        this.role = role;
      });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.tokenS._getTokenDetailsSubject$().pipe(
      map((tokenDetails: any) => {
        if (tokenDetails && tokenDetails.role) {
          this.role = tokenDetails.role;

          if (this.role === 'ROLE_USER' || this.role === 'ROLE_ADMIN') {
            return true;
          }
        }
        this.router.navigate(['']);
        this.loginOrRegisterPopupService.openPopup();
        return false;
      })
    );
  }
}
