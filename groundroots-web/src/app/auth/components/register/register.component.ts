import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user/user.model';
import { CustomerService } from 'src/app/shared/services/woocommerce/logic-services/customer/customer.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor(
    private router: Router,
    private auth: AuthService,
    // private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.initializeUser();
  }

  initializeUser() {
    this.user = { email: "", password: "" };
  }

  // register() {
  //   this.auth.register(this.user.email, this.user.password).then(response => {
  //     this.user.uid = response.user.uid;
  //     this.customerService.createCustomer(this.user).then(response => {
  //       this.user.id = response.data.id;
  //       console.info(response);
  //     }).catch(error => {
  //       console.error(error);
  //     })
  //     console.info(response);
  //   }).catch(error => {
  //     console.error(error);
  //   });
  // }

  registerWithGoogle() {
    this.auth.loginWithGoogle().then(response => {
      this.user.uid = response.user.uid;
      this.user.first_name = response.user.displayName.split(' ')[0];
      this.user.last_name = response.user.displayName.split(' ')[1];
      this.user.email = response.user.email;
      this.customerService.createCustomer(this.user).then(response => {
        this.user.id = response.data.id;
        this.router.navigate(['/']);
      }).catch(error => {
        console.error(error);
      })
      console.info(response);
    }).catch(error => {
      console.error(error);
    });
  }

}
