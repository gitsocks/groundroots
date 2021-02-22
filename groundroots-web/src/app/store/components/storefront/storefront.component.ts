import { Component, OnInit } from '@angular/core';
import { ProductFetcher } from 'src/app/shared/logic-services/products/product.fetcher';
import { Product } from 'src/app/shared/models/product/product.model';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {

  products: Product[] = [];
  selectedProduct: Product;

  constructor(
    private productFetcher: ProductFetcher
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productFetcher.fetchCoffeeBeans().then(products => {
      this.products = products;
      console.log(products);
    });
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }
}
