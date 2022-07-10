import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  merge,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { EnumSelectEndpoint } from 'src/app/core/enums/select-endpoint.enum';
import { FakeService } from 'src/app/services/fake.service';
import { Generic } from 'src/app/services/models/generic.model';
import { TIME } from '../../core/constants/constants';

@Component({
  selector: 'app-filtro-reativo',
  templateUrl: './filtro-reativo.component.html',
  styleUrls: ['./filtro-reativo.component.scss']
})
export class FiltroReativoComponent implements OnInit {

 

  ngOnInit(): void {
  }
  select$ = of([
    {
      name: EnumSelectEndpoint.TODOS,
      value: EnumSelectEndpoint.TODOS
    },
    {
      name: EnumSelectEndpoint.POSTS,
      value: EnumSelectEndpoint.POSTS
    },
    {
      name: EnumSelectEndpoint.USERS,
      value: EnumSelectEndpoint.USERS
    }
  ])

  filter = new FormControl('todos');

  filterInput$ = this.filter.valueChanges.pipe(
    tap((x) => console.log('all data', x)),
    filter((x: any) => x.length > 3),
    debounceTime(TIME),
    switchMap((value) => this.getItems(String(value))),
    distinctUntilChanged(),
    tap((x) => console.log('filter input', x))
  );

  items$: Observable<Generic[]> = this.getItems();

  all$ = merge(this.items$, this.filterInput$);

  constructor(private fakeService: FakeService) {}

  getItems(value?: string) {
    return (this.items$ = this.fakeService.getFake(value));
  }

}
