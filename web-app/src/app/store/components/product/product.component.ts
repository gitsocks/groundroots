import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit { 

  @Input() product: Product;

  @Output() selected = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  selectProduct(product: Product) {
    this.selected.emit(product);
  }



}
