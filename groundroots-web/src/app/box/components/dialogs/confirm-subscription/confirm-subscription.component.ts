import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-confirm-subscription',
  templateUrl: './confirm-subscription.component.html',
  styleUrls: ['./confirm-subscription.component.css']
})
export class ConfirmSubscriptionComponent implements OnInit {

  @ViewChild('payfastForm', {static: false}) payfastForm: NgForm;

  constructor(
    private reference: MatDialogRef<ConfirmSubscriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
    console.log(this.data.box);
    console.log(this.data.user);
  }

  nextMonth() {
    return moment().startOf('month').toDate();
  }

  continue() {
    // this.reference.close(true);
    this.payfastForm.ngSubmit.emit();
  }

  environment() {
    return environment;
  }

  submitForm() {
    this.payfastForm.ngSubmit.emit();
  }

}
