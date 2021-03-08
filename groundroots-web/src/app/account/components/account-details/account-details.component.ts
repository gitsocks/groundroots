import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.getAuthState();
  }

  getAuthState() {
    this.auth.getAuthState().subscribe(user => { console.log(user.uid) });
  }

  signOut() {
    this.auth.signOut();
  }




}
