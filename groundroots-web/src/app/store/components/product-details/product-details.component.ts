import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductFetcher } from 'src/app/shared/logic-services/products/product.fetcher';
import { Product } from 'src/app/shared/models/product/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnChanges {

  @Input() product: Product;

  constructor(
    private productFetcher: ProductFetcher
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.product = changes.product.currentValue;
    this.getProductDetails();
  }

  ngOnInit() {
  }

  getProductDetails() {
    this.productFetcher.fetchProductVariations(this.product.id).then(productVariants => {
      this.product.variants = productVariants;
    });
  }

}
