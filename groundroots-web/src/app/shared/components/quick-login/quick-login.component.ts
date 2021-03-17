import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/services/account.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-quick-login',
  templateUrl: './quick-login.component.html',
  styleUrls: ['./quick-login.component.css']
})
export class QuickLoginComponent implements OnInit {

  method: string = 'login';
  user: User;

  constructor(
    private auth: AuthService,
    private reference: MatDialogRef<QuickLoginComponent>,
    private snack: MatSnackBar,
    private router: Router,
    private account: AccountService) { }

  ngOnInit() {
    this.user = { email: '', password: '' };
  }

  signIn() {
    this.auth.signInWithEmail(this.user.email, this.user.password).then(credentials => {
      this.reference.close();
    }).catch(error => {
      if (error.code === "auth/user-not-found") {
        this.snack.open("No user was found!", "Register Now", { duration: 5000 }).onAction().subscribe(action => {
          this.method = 'register';
        });
      }
    });
  }

  async register() {
    const user = await this.auth.signUpWithEmailAndPassword(this.user.email, this.user.password);
    this.user.id = user.id;
    this.user.address = {
      street: '',
      city: '',
      province: '',
      country: '',
      postalCode: ''
    }
    this.account.create(this.user).then(() => {
      this.router.navigate(['/app/box']);
    });
  }

}
