import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
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
