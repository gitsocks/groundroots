import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { PopSnackComponent } from 'src/app/shared/components/snacks/pop-snack/pop-snack.component';
import { Box } from 'src/app/shared/models/box.model';
import { User } from 'src/app/shared/models/user.model';
import { AccountService } from 'src/app/shared/services/account/account.service';
import { BoxService } from 'src/app/shared/services/box/box.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer: User;
  boxes: Box[] = [];

  constructor(
    private route: ActivatedRoute,
    private account: AccountService,
    private boxService: BoxService,
    private dialog: MatDialog,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getCustomer(id);
    this.getBoxes(id);
  }

  getCustomer(id: string) {
    this.account.fetchById(id).subscribe(customer => {
      const data = customer.data();
      this.customer = data;
      this.customer.id = id;
      console.log(this.customer)
    });
  }

  getBoxes(id) {
    this.boxService.fetchByCustomer(id).subscribe(boxes => {
      this.boxes = boxes;
    });
  }

  confirmDetailsUpdate() {
    this.dialog.open(ConfirmComponent, {data: {title: "Confirm Update", message: "Are you sure you want to update the customer's details?"}}).afterClosed().subscribe(confirm => {
      if (confirm) this.updateDetails();
    });
  }

  confirmAddressUpdate() {
    this.dialog.open(ConfirmComponent, { data: { title: "Confirm Update", message: "Are you sure you want to update the customer's address?" } }).afterClosed().subscribe(confirm => {
      if (confirm) this.updateAddress();
    });
  }

  updateDetails() {
    this.account.update(this.customer).then(() => {
      this.snack.openFromComponent(PopSnackComponent, {data: {message: "Updated customer!"}, duration: 3000});
    }).catch(error => {
      this.snack.openFromComponent(PopSnackComponent, {data: {message: "An error has occurred!"}, duration: 3000});
      console.error(error)
    })
  }

  updateAddress() {
    this.account.updateAddress(this.customer).then(() => {
      this.snack.openFromComponent(PopSnackComponent, { data: { message: "Updated customer!" }, duration: 3000 });
    }).catch(error => {
      this.snack.openFromComponent(PopSnackComponent, { data: { message: "An error has occurred!" }, duration: 3000 });
      console.error(error)
    })
  }

}
