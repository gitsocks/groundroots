import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/services/account.service';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor(private auth: AuthService, private account: AccountService, private router: Router) { }

  ngOnInit() {
    this.user = {firstName: '', lastName: '', email: '', password: '', cellphone: ''};
  }

  async register() {
    const user =  await this.auth.signUpWithEmailAndPassword(this.user.email, this.user.password);
    this.user.id = user.id;
    this.user.address = {
      street: '',
      city: '',
      province: '',
      country: '',
      postalCode: ''
    }
    this.account.create(this.user).then(() => {
      this.router.navigate(['/app/coffee']);
    });
  }
}
