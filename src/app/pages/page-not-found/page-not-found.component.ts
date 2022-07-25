import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  arr = [
    {
      name: 'joao',
      age: 10,
      roles: [
        "ADMIN"
      ]
    }, 
    
    {
      name: 'maria', 
      age: 20,
      roles: [
        "USER"
      ]
    },
    {
      name: 'tom', 
      age: 30,
      roles: [
        "USER"
      ]
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
