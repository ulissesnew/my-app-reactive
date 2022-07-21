import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { switchMap, tap, take, distinctUntilChanged } from 'rxjs/operators';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ){}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd ),
      map(() => this.activateRoute),
      map(route => {
        while(route.firstChild) {
          route = route.firstChild;
        }
        return route
      }),
      distinctUntilChanged(),
      switchMap((route: any) => route.data),
      tap((event: any) => this.titleService.setTitle(event.title)),
    ).subscribe()
  }

}
