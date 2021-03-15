import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account/services/account.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loggedIn: boolean;

  constructor(private auth: AuthService, private account: AccountService) { }

  ngOnInit() {
    this.getAuth();
  }

  getAuth() {
    return this.auth.getAuthState().subscribe(credentials => {
      this.loggedIn = credentials != null;
    });
  }

  signOut() {
    this.auth.signOut();
  }

}
