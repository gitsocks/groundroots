import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Coffee } from 'src/app/shared/models/coffee.model';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { CoffeeOption } from 'src/app/shared/models/coffee-option.model';

@Component({
  selector: 'app-coffee-details',
  animations: [
    trigger('openClose', [
      state('open', style({
        top: '20%',
        visibility: 'visible'
      })),
      state('closed', style({
        top: '100%',
        visibility: 'hidden'
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ])
  ],
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css']
})
export class CoffeeDetailsComponent implements OnInit, OnChanges {

  @Input()
  coffee: Coffee;

  @Output() close = new EventEmitter<Coffee>();

  size: string = "250g";
  ground: boolean = false;
  selectedOption: CoffeeOption;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.coffee = changes.coffee.currentValue;
  }

  ngOnInit() {
    if (this.coffee) this.calculatePrice();
  }

  closePopup() {
    this.close.emit(undefined);
  }

  calculatePrice() {
    this.selectedOption = this.coffee.options.filter(option => (option.size == this.size) && (option.ground == this.ground))[0];
  }

  addToBox() {
    
  }

}
