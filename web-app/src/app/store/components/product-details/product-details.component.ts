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


  // string
  currentAnimateClass: string;

  constructor() { }

  ngOnInit() {
    let details = <HTMLElement>document.getElementById('product-details');
    this.currentAnimateClass = 'animate__bounceInLeft';
  }

  ngOnChanges(changes: SimpleChanges) {
    this.product = changes.product.currentValue;
    if (this.product) {
      this.toggleClass();
    }
  } 

  close() {
    this.product = undefined;
    this.removed.emit(this.product);
    let details = <HTMLElement>document.getElementById('product-details');

    // this.toggleClass();
  }

  private toggleClass() {
    let details = <HTMLElement>document.getElementById('product-details');
    details.classList.toggle('show');
    if (this.currentAnimateClass == 'animate__bounceInLeft') {
      details.classList.remove('animate__bounceInLeft');
      details.classList.add('animate__bounceOutLeft');
      this.currentAnimateClass = 'animate__bounceOutLeft';
    } else {
      details.classList.remove('animate__bounceOutLeft');
      details.classList.add('animate__bounceInLeft');
      this.currentAnimateClass = 'animate__bounceInLeft';
    }
    
  }

}
