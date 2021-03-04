import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  selectedProduct: string;

  constructor() { }

  ngOnInit() {
  }

  selectProduct(product: string) {
    this.selectedProduct = product;
  }


}
