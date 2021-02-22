import { Component, OnInit } from '@angular/core';
import { ProductFetcher } from 'src/app/shared/logic-services/products/product.fetcher';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {

  constructor(
    private productFetcher: ProductFetcher
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productFetcher.fetchProducts().then(products => {
      console.log(products);
    })
  }
}
