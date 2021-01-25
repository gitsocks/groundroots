import { Component, OnInit } from '@angular/core';
import { Option } from '../../interfaces/option';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {

  selectedProduct: Product;

  products: Product[];

  pastries: Product[] = [
    { name: "Cookie 1", price: 255.00, description: "It tastes real amazing!", options: [] },
    { name: "Cookie 2", price: 255.00, description: "It awesomely real amazing!", options: [] },
    { name: "Cookie 3", price: 255.00, description: "It greatly real amazing!", options: [] },
    { name: "Cookie 4", price: 255.00, description: "It wowly real amazing!", options: [] }
  ];

  coffees: Product[] = [
    { name: "Coffee 1", price: 255.00, description: "It tastes real amazing!", options: [] },
    { name: "Coffee 2", price: 255.00, description: "It tastes real amazing!", options: [] },
    { name: "Coffee 3", price: 255.00, description: "It tastes real amazing!", options: [] },
    { name: "Coffee 4", price: 255.00, description: "It tastes real amazing!", options: [] }
  ]

  options: Option[] = [
    { option: 'Pastries', active: false, products: this.pastries },
    { option: 'Coffee', active: false, products: this.coffees }
  ]



  constructor() { }

  ngOnInit() {
    this.toggleProducts('Pastries');
  }

  toggleProducts(value: string) {
    this.options.forEach((option) => {
      console.log(value == option.option)
      if (value == option.option) {
        this.products = option.products;
        this.setOptionActive(option);
      }
    });
  }

  setOptionActive(active: Option) {
    this.options.forEach((option) => {
      option.active = false;
      if (option.option == active.option) {
        option.active = true;
      }
    });
  }

  setSelectedProduct(product: Product) {
    this.selectedProduct = product;
  }

  removeSelectedProduct(product: Product) {
    this.selectedProduct = product;
  }
}
