import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/shared/models/user.model';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  user: User;

  constructor(private account: AccountService, private auth: AuthService, private snack: MatSnackBar) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.auth.getAuthState().subscribe(credentials => {
      this.user = { id: credentials.uid, email: credentials.email };
      this.account.fetchById(this.user.id).valueChanges().subscribe((user: User) => {
        if (user.address) {
          this.user.address = {
            street: user.address.street,
            city: user.address.city,
            province: user.address.province,
            country: user.address.country,
            postalCode: user.address.postalCode
          };
        } else {
          this.user.address = {
            street: '',
            city: '',
            province: '',
            country: '',
            postalCode: ''
          };
        }
      });
    });
  }

  updateAddress() {
    this.account.update(this.user)
      .then(response => { this.snack.open("🔥 Successfully updated!", "Awesome", { duration: 3000 }); })
      .catch(error => {
        this.snack.open("😬 An error has occurred!", "Okay", { duration: 3000 });
        console.error(error);
      });
  }

}
