import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { PopSnackComponent } from 'src/app/shared/components/snacks/pop-snack/pop-snack.component';
import { AccountService } from 'src/app/shared/services/account/account.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private auth: AuthService,
    private account: AccountService,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {

  }

  signIn() {
    this.auth.signIn(this.email, this.password).then(auth => {
      this.account.fetchById(auth.user.uid).subscribe(document => {
        const data = document.data();
        const roles = data.roles;
        if (roles) {
          if (roles.includes('admin')) {
            this.snack.openFromComponent(PopSnackComponent, {
              duration: 3000, data: {
                message: 'Welcome Back!',
                type: 'success'
              }
            });
          } else {
            this.snack.openFromComponent(PopSnackComponent, {
              duration: 3000, data: {
                message: 'Authentication Failed!',
                type: 'danger'
              }
            });
          }
        } else {
          this.snack.openFromComponent(PopSnackComponent, {
            duration: 3000, data: {
              message: 'Authentication Failed!',
              type: 'danger'
            }
          });
        }
      })
    }, error => {
      if (error.code == 'auth/wrong-password') this.snack.openFromComponent(PopSnackComponent, { duration: 3000, data: { message: 'Authentication Failed!', type: 'danger' } });
    });
  }

}
