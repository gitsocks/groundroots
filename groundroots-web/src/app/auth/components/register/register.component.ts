import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = {firstName: '', lastName: '', email: '', password: '', cellphone: ''};
  }

  register() {
    this.auth.signUpWithEmailAndPassword(this.user.email, this.user.password).then(user => {
      console.log(user);
    }).catch(error => { console.error(error) });
  }
}
