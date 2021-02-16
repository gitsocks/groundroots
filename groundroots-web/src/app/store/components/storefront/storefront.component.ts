import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/woocommerce/product/product.service';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {}
}
