import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() tag: string | undefined | null;
  @Input() userId: string | number | undefined;
  @Input() id: number | string | undefined;
  @Input() title: string | undefined;
  @Input() body: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
