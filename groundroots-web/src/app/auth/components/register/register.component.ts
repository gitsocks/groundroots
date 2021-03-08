import { Component, OnInit } from '@angular/core';
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

  constructor(private auth: AuthService, private account: AccountService) { }

  ngOnInit() {
    this.user = {firstName: '', lastName: '', email: '', password: '', cellphone: ''};
  }

  async register() {
    const user =  await this.auth.signUpWithEmailAndPassword(this.user.email, this.user.password);
    const ref = this.account.create(this.user);
    user.id = (await ref).id;
  }
}
