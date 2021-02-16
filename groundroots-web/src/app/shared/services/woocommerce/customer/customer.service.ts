import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user/user.model';
import { WoocommerceService } from '../woocommerce.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private wc: WoocommerceService
  ) { }

  getCustomers() {
    return this.wc.get('customers');
  }

  getCustomer(user: User) {
    return this.wc.get(`customers/${user.id}`);
  }

  createCustomer(customer: User) {
    return this.wc.post('customers', customer);
  }

}
