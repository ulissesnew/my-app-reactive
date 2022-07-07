import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, pluck, throwError } from 'rxjs';
import { tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { USERS } from './data/users';
import { User } from './models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) { 
  }
  private apiUrl = environment.apiUrl;

  private options = {
    headers: new HttpHeaders({
      'Content-type': 'Application/json'
    })
  }

  private users$: Observable<{data: User[]}> = of({
    data: USERS
  })

  getUsers(): Observable<User[]> {
    /* buscar dado real da internet 
    * descomente a linha abaixo 
    */
    // return this.httpClient.get<User[]>(`${this.apiUrl}/users`, this.options)

    return this.users$.pipe(
      pluck('data'),
      catchError((err) => {
        return throwError(() => new Error(`Algo deu errado! ${err}`))
      })
    )
  }

}
