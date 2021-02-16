import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.initializeUser();
  }

  initializeUser() {
    this.user = { uid: "", email: "", password: "" }
  }

  login() {
    this.auth.loginWithEmail(this.user.email, this.user.password).then(response => {
      console.log(response);
      this.user.email = response.user.email;
      this.user.uid = response.user.uid;
      this.user.first_name = response.user.displayName.split(' ')[0];
      this.user.last_name = response.user.displayName.split(' ')[1];
      alert(`Welcome back ${this.user.first_name} ${this.user.last_name}!`);
      
    }).catch(error => {
      console.log(error);
    });
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle().then(response  => {
      console.log(response);
      this.user.email = response.user.email;
      this.user.uid = response.user.uid;
      this.user.first_name = response.user.displayName.split(' ')[0];
      this.user.last_name = response.user.displayName.split(' ')[1];
      
    }).catch(error => {
      console.log(error);
    });
  }

}
