import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import * as moment from 'moment';
import * as md5 from 'md5';
import { BoxService } from 'src/app/box/services/box.service';

@Component({
  selector: 'app-confirm-subscription',
  templateUrl: './confirm-subscription.component.html',
  styleUrls: ['./confirm-subscription.component.css']
})
export class ConfirmSubscriptionComponent implements OnInit {

  signature: string;

  constructor(
    private reference: MatDialogRef<ConfirmSubscriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private boxService: BoxService
    ) { }

  ngOnInit() {
    this.boxService.create(this.data.box).then(reference => {
      this.data.box.id = reference.id;
      this.generateSignature();
    });
  }

  nextMonth() {
    return moment().startOf('month').format("yyyy-MM-DD");
  }

  continue() {
  }

  environment() {
    return environment;
  }

  generateSignature() {

  }

}
