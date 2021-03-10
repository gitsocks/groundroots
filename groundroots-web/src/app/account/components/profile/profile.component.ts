import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/shared/models/user.model';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private account: AccountService, private auth: AuthService, private snack: MatSnackBar) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.auth.getAuthState().subscribe(credentials => {
      this.user = { id: credentials.uid, email: credentials.email };
      this.account.fetchById(this.user.id).valueChanges().subscribe((user: User) => {
        this.user.firstName = user.firstName;
        this.user.lastName = user.lastName;
        this.user.cellphone = user.cellphone;
      });
    });
  }

  updateUser() {
    this.account.update(this.user)
    .then(response => { this.snack.open("🔥 Successfully updated!", "Awesome", { duration: 3000 }); })
    .catch(error => { 
      this.snack.open("😬 An error has occurred!", "Okay", { duration: 3000 }); 
      console.error(error);
    });
  }

}
