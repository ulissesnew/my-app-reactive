import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable, of, throwError } from 'rxjs';
import { catchError, pluck, tap } from 'rxjs/operators';
import { TODOS } from './data/todos';
import { USERS } from './data/users';
import { POSTS } from './data/posts';
import { Generic } from './models/generic.model';
import { EnumSelectEndpoint } from '../core/enums/select-endpoint.enum';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class FakeService {
  private all$: Observable<{ data: Generic[] }> = of({
    data: TODOS,
  });

  private users$: Observable<{ data: Generic[] }> = of({
    data: USERS,
  });

  private posts$: Observable<{ data: Generic[] }> = of({
    data: POSTS,
  });
  token: string = '123';

  private options = {
    headers: new HttpHeaders({
      'Content-type': 'Application/json',
      Authorization: `Bearer ${this.token}`,
    }),
  };
  constructor(private httpClient: HttpClient) {}
    apiUrl: string = environment.apiUrl;

  getFake(value?: string): Observable<Generic[]> {
    /* buscar dado real da internet 
    * descomente a linha abaixo 
    */

    // return this.getOriginal(value);

    if (value === EnumSelectEndpoint.USERS) {
      return this.users$.pipe(
        tap((x) => console.log(x)),
        pluck('data'),
        map((item) => item.slice(0, 10)),
        catchError((err) => {
          return throwError(() => new Error(`Algo deu errado! ${err}`));
        })
      );
    } else if (value === EnumSelectEndpoint.POSTS) {
      return this.posts$.pipe(
        tap((x) => console.log(x)),
        pluck('data'),
        map((item) => item.slice(0, 10)),
        catchError((err) => {
          return throwError(() => new Error(`Algo deu errado! ${err}`));
        })
      );
    }
    return this.all$.pipe(
      tap((x) => console.log(x)),
      pluck('data'),
      map((item) => item.slice(0, 10)),
      catchError((err) => {
          return throwError(() => new Error(`Algo deu errado! ${err}`))
      })
    );
  }

  private getOriginal(value?: string): Observable<Generic[]> {
    return this.httpClient
      .get<Generic[]>(`${this.apiUrl}/${value ? value : EnumSelectEndpoint.TODOS}`, this.options)
      .pipe(
        tap((x) => console.log(x)),
        map((item) => item.slice(0, 10)),
        catchError((err) => {
          return throwError(() => new Error(`Algo deu errado! ${err}`));
        })
      );
  }
}
