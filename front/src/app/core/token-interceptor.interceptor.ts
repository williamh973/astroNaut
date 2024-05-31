import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthService } from '../shared/services/user/auth/auth.service';
import { LocalStorageService } from '../shared/services/local-storage/local-storage.service';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {
  constructor(
    private authS: AuthService,
    private lsService: LocalStorageService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const idToken = this.lsService.getToken();
    if (idToken) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + idToken),
      });

      return this.mapStream(cloned, next);
    } else {
      return this.mapStream(request, next);
    }
  }

  mapStream(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((incomingRequest) => {
        console.log(incomingRequest);
        if (incomingRequest instanceof HttpResponse) {
          this.authS.setHttpSuccessSubject$(incomingRequest);
        }
      }),
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        this.authS.setHttpErrorSubject$(err);
        return throwError(() => new Error('Une erreur est survenue'));
      })
    );
  }
}
