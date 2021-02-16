import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { CustomerService } from './shared/services/woocommerce/customer/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'groundroots-web';

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });

  }
}
