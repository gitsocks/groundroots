import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmSubscriptionComponent } from '../confirm-subscription/confirm-subscription.component';

@Component({
  selector: 'app-cancel-subscription',
  templateUrl: './cancel-subscription.component.html',
  styleUrls: ['./cancel-subscription.component.css']
})
export class CancelSubscriptionComponent implements OnInit {

  constructor(
    private reference: MatDialogRef<ConfirmSubscriptionComponent>
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.reference.close(true);
  }

}
