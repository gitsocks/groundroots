import { Injectable } from '@angular/core';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {

  wc: any;

  constructor() {
    this.wc = new WooCommerceRestApi({
      url: environment.woocommerce.url,
      consumerKey: environment.woocommerce.key,
      consumerSecret: environment.woocommerce.secret,
      version: environment.woocommerce.version,
      queryStringAuth: true
    });
  }

  get(endpoint: string) {
    return this.wc.get(endpoint);
  }

  post(endpoint: string, data: any) {
    return this.wc.post(endpoint, data);
  }



}
