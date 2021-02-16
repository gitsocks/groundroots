import { Injectable } from '@angular/core';
import { WoocommerceService } from '../woocommerce.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private wc: WoocommerceService
  ) { }

  getProducts(): Product[] {
    return this.wc.get('products');
  }

}

