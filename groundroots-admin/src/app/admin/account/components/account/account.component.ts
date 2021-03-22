import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { User } from 'src/app/shared/models/user.model';
import { AccountService } from 'src/app/shared/services/account/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User;

  constructor(
    private auth: AuthService,
    private account: AccountService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.auth.getAuth().subscribe(authenticated => {
      if (authenticated) {
        this.account.fetchById(authenticated.uid).subscribe(user => {
          this.user = user;
        });
      }
    })
  }

}
