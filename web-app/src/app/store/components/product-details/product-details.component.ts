import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        top: '20%'
      })),
      state('closed', style({
        top: '100%'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ]
})
export class ProductDetailsComponent implements OnInit, OnChanges {

  @Input() product: Product;
  @Output() removed = new EventEmitter<Product>();

  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    this.product = changes.product.currentValue;
    if (this.product) {
      this.isOpen = true;
    }
  } 

  close() {
    this.product = undefined;
    this.removed.emit(this.product);
    this.isOpen = false;
  }

  // animations
  

}
