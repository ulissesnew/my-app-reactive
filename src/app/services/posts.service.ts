import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { pluck } from 'rxjs/operators'
import { POSTS } from './data/posts';
import { Post } from './models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts$: Observable<{data: Post[]}> = of({data: POSTS})
  token: any = 123;

  constructor(private httpClient: HttpClient) { }

  apiUrl = environment.apiUrl;

  options = {
    headers: new HttpHeaders({
      'Content-type': 'Application/json',
      Authorization: `Bearer ${this.token}`
    })
  }

  getPosts(): Observable<Post[]> {
    return this.posts$.pipe(
      pluck('data'),
      // tap((x: any) => console.log('getPosts',x.length)),
      catchError((err) => {
        return throwError((() => new Error(`Algo deu errado! ${err}`)))
      })
    )
    return this.httpClient.get<Post[]>(`${this.apiUrl}/posts`, this.options)
    .pipe(
      // tap((x: any) => console.log('getPosts',x.length)),
      catchError((err) => {
        return throwError((() => new Error(`Algo deu errado! ${err}`)))
      })
    )
  }

  getPostId(id: number): Observable<Post> {
    // return this.httpClient.get<Post>(`${this.apiUrl}/posts/${id}`, this.options)
    // .pipe(
    //   tap(console.log),
    //   catchError((err) => {
    //   return throwError(() => new Error(`Algo deu errado!, ${err}`))
    //   })
    // )
    return this.posts$.pipe(
      pluck('data'),
      map((x) => {
        const f = x.filter(f => Number(f.id) === Number(id))[0]
        return f
      }),
      catchError((err) => {
        return throwError(() => new Error(`Algo deu Errado!, ${err}`))
      }),
      tap(x => console.log(x)),

    )
  }
}
