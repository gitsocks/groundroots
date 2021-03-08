import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-subscription',
  templateUrl: './confirm-subscription.component.html',
  styleUrls: ['./confirm-subscription.component.css']
})
export class ConfirmSubscriptionComponent implements OnInit {

  constructor(private reference: MatDialogRef<ConfirmSubscriptionComponent>) { }

  ngOnInit() {
  }

  continue() {
    this.reference.close(true);
  }

}
