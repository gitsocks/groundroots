import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductFetcher } from 'src/app/shared/logic-services/products/product.fetcher';
import { Product } from 'src/app/shared/models/product/product.model';

enum Filter {
  coffeeShop, pastries
}

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})

export class StorefrontComponent implements OnInit {

  products: Product[] = [];
  selectedProduct: Product;

  filter: Filter;

  constructor(
    private productFetcher: ProductFetcher
  ) { }

  public get Filter() {
    return Filter;
  }

  ngOnInit() {
    this.filter = Filter.coffeeShop;
    this.fetchCoffeeShop();
  }

  fetchCoffeeShop()  {
    this.productFetcher.fetchCoffeeBeans().then(products => {
      this.products = products;
    });
  }

  fetchPastries() {
    this.productFetcher.fetchPastries().then(products => {
      this.products = products;
    });
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  changeFilter(filter: Filter) {
    this.filter = filter;
    this.selectProduct(undefined);
    switch (filter) {
      case Filter.coffeeShop:
        this.fetchCoffeeShop();
        console.warn("Get coffees");
        break;
      case Filter.pastries:
        this.fetchPastries();
        console.warn("Get pastries");
        break;
      default:
        break;
    }
  }
}
