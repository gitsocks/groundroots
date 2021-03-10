import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  tab: string = 'profile';

  constructor(private auth: AuthService, private router: Router) {
    this.router.events.subscribe(event => {
      if (typeof(event) === NavigationEnd.name) console.log(event);
    })
  }

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
