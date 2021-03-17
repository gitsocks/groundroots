import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AccountService } from 'src/app/account/services/account.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-set-address',
  templateUrl: './set-address.component.html',
  styleUrls: ['./set-address.component.css']
})
export class SetAddressComponent implements OnInit {

  constructor(
    private reference: MatDialogRef<SetAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User, 
    private account: AccountService) { }

  ngOnInit() {
    if (!this.user.address) {
      this.user.address = {
        street: '',
        city: '',
        province: '',
        country: '',
        postalCode: ''
      }
    }
  }

  updateAddress() {
    this.account.update(this.user)
      .then(response => { this.reference.close(); })
      .catch(error => {
        this.reference.close(error);
      });
  }

}
