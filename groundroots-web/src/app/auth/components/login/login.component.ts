import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router, RouterEvent } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private auth: AuthService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit() {
    this.user = {email: '', password: ''};
  }

  signIn() {
    this.auth.signInWithEmail(this.user.email, this.user.password).then(credentials => {
      this.router.navigate(['/shop'])
    }).catch(error => {
      if (error.code === "auth/user-not-found") { 
        this.snack.open("🤷‍♂️ No user was found!", "Register Now", { duration: 5000 }).onAction().subscribe(action => {
          this.router.navigate(['/auth/register'])
        });
      }
    });
  }

}
