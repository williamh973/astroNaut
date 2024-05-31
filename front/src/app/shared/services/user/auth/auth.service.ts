import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { TokenResponse } from 'src/app/models/token.model';
import { UserAuth } from 'src/app/models/user/user-auth.model';
import { UserRegister } from 'src/app/models/user/user-register.model';
import { LocalStorageService } from '../../local-storage/local-storage.service';
import { TokenService } from '../../token/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _BASE_URL = 'http://localhost:8080/api/v1/auth';
  private _httpErrorSubject$: BehaviorSubject<HttpErrorResponse> =
    new BehaviorSubject(new HttpErrorResponse({}));
  private _httpSuccessSubject$: BehaviorSubject<HttpResponse<any>> =
    new BehaviorSubject(new HttpResponse({}));

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  signUp(userRegister: UserRegister): void {
    this.http.post<any>(`${this._BASE_URL}/register`, userRegister).subscribe();
  }

  signIn(userAuth: UserAuth): void {
    this.tokenService.resetToken();
    this.http
      .post<any>(`${this._BASE_URL}/authenticate`, userAuth)
      .subscribe((tokenFromDB: TokenResponse) => {
        this.tokenService.updateToken(tokenFromDB);

        const token = this.tokenService.isCheckTokenInLocalStorage();
        if (token) {
          setTimeout(() => {
            this.router.navigate(['/astronaut/landing-page']);
          }, 2_000);
        }
      });
  }

  getHttpErrorSubject$(): Observable<HttpErrorResponse> {
    return this._httpErrorSubject$.asObservable();
  }
  setHttpErrorSubject$(error: HttpErrorResponse): void {
    this._httpSuccessSubject$.next(new HttpResponse({}));
    this._httpErrorSubject$.next(error);
  }

  getHttpSuccessSubject$(): Observable<HttpResponse<any>> {
    return this._httpSuccessSubject$.asObservable();
  }
  setHttpSuccessSubject$(success: HttpResponse<any>): void {
    this._httpErrorSubject$.next(new HttpErrorResponse({}));
    this._httpSuccessSubject$.next(success);
  }
}
