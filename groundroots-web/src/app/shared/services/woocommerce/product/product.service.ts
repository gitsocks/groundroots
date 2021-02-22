import { Injectable } from '@angular/core';
import { WoocommerceService } from '../woocommerce.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(
    private wc: WoocommerceService
  ) { }

  getAll() {
    return this.wc.get('products');
  }

  getCoffeeBeans() {
    return this.wc.get('products?category=32');
  }

  getProductVariants(id: number) {
    return this.wc.get(`products/${id}/variations`);
  }

}

