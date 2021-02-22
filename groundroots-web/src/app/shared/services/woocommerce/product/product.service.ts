import { Injectable } from '@angular/core';
import { WoocommerceService } from '../woocommerce.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  coffeeBeansId = 32;
  pastriesId = 38;

  constructor(
    private wc: WoocommerceService
  ) { }

  getAll() {
    return this.wc.get('products');
  }

  getCoffeeBeans() {
    return this.wc.get(`products?category=${this.coffeeBeansId}`);
  }

  getPastries() {
    return this.wc.get(`products?category=${this.pastriesId}`);
  }

  getProductVariants(id: number) {
    return this.wc.get(`products/${id}/variations`);
  }

}

