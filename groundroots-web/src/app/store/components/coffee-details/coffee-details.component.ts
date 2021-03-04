import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        top: '20%'
      })),
      state('closed', style({
        top: '100%'
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ],
})
export class CoffeeDetailsComponent implements OnInit, OnChanges {

  @Input()
  product: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.product = changes.product.currentValue;
  }

  ngOnInit() {
  }

}
