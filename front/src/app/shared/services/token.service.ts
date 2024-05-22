import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage/local-storage.service';
import { TokenResponse } from 'src/app/models/token.model';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly _tokenDetailsSubject$: BehaviorSubject<any> =
    new BehaviorSubject<any>(this.getTokenFromLocalStorageAndDecode());

  constructor(
    private http: HttpClient,
    private lsService: LocalStorageService
  ) {}

  updateToken(tokenFromDB: TokenResponse) {
    this._clearLocalStorageAndThenPutNewToken(tokenFromDB);
    const decodedToken = this._decodeToken(tokenFromDB);
    this._setTokenDetailsSubject$(decodedToken);
  }

  getTokenFromLocalStorageAndDecode(): any {
    const tokenId = this.lsService.getToken();
    if (tokenId) {
      return this._decodeToken({ token: tokenId });
    } else {
      return null;
    }
  }

  resetToken(): void {
    this._tokenDetailsSubject$.next({});
  }

  private _clearLocalStorageAndThenPutNewToken(
    tokenFromDB: TokenResponse
  ): void {
    this.lsService.clearTokenAndUserEmail();
    this.lsService.setToken(tokenFromDB);
  }

  private _decodeToken(tokenFromDB: TokenResponse): any {
    return this._getDecodedTokenResponse(tokenFromDB.token);
  }

  private _getDecodedTokenResponse(token: string): any {
    return jwt_decode(token);
  }

  private _setTokenDetailsSubject$(tokenInfos: any): void {
    this._tokenDetailsSubject$.next(tokenInfos);
  }

  _getTokenDetailsSubject$(): Observable<any> {
    return this._tokenDetailsSubject$.asObservable();
  }

  isCheckTokenInLocalStorage(): boolean {
    const token = this.lsService.getToken();
    return !!token;
  }
}
function jwt_decode(token: string): any {
  throw new Error('Function not implemented.');
}
