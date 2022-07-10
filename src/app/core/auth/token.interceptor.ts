import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: any = 'fake token';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone(
      {
        headers: request.headers.set('Authorization', `Bearer ${this.token}`)
      }
    )
    return next.handle(request).pipe(
      tap(x => console.log(x)),
      catchError((err) => {
        return throwError(() => new Error(`Algo deu errado! ${err}`))
      })
    )
  }
}
