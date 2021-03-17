import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AddressComponent } from 'src/app/account/components/address/address.component';
import { AccountService } from 'src/app/account/services/account.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Address } from 'src/app/shared/models/address.model';
import { BoxItem } from 'src/app/shared/models/box-item.model';
import { Box } from 'src/app/shared/models/box.model';
import { User } from 'src/app/shared/models/user.model';
import { BoxService } from '../../services/box.service';
import { LocalBoxService } from '../../services/local-box.service';
import { ConfirmSubscriptionComponent } from '../dialogs/confirm-subscription/confirm-subscription.component';
import { RemoveBoxItemComponent } from '../dialogs/remove-box-item/remove-box-item.component';
import { SetAddressComponent } from '../dialogs/set-address/set-address.component';

@Component({
  selector: 'app-local-box',
  templateUrl: './local-box.component.html',
  styleUrls: ['./local-box.component.css']
})
export class LocalBoxComponent implements OnInit {

  user: User;
  box: Box;

  boxSizes = [
    { weight: 0.25, name: "Small", price: 100.00 },
    { weight: 0.5, name: "Medium", price: 125.00 },
    { weight: 1, name: "Large", price: 150.00 }
  ]

  constructor(
    public auth: AuthService, 
    public account: AccountService,
    public localBoxService: LocalBoxService, 
    public dialog: MatDialog,
    public snack: MatSnackBar,
    public boxSerivce: BoxService,
    public router: Router) { }

  ngOnInit() {
    this.getUser();
    this.box = {
      items: this.localBoxService.getLocalBox().items
    }
  }

  getUser() {
    this.auth.getAuthState().subscribe(user => {
      this.account.fetchById(user.uid).get().subscribe(user => {
        this.user = {
          email: user.data().email,
          firstName: user.data().firstName,
          lastName: user.data().lastName,
          cellphone: user.data().cellphone,
          address: user.data().address
        }
        this.user.id = user.id;
      });
    })
  }

  setAddress() {
    this.dialog.open(SetAddressComponent, { data: this.user, width: "60%" }).afterClosed().subscribe(response => {
      if (response) {
        this.snack.open("An error has occurred.", "Okay", { duration: 3000 });
      }
    })
  }

  update(boxItem: BoxItem) {
    const error = this.localBoxService.update(boxItem);
    if (error == "This will remove the item from your cart? Are you sure?") {
      this.dialog.open(RemoveBoxItemComponent, { data: error }).afterClosed().subscribe(remove => {
        if (remove) this.localBoxService.removeBoxItem(boxItem);
      });
    } else if (error == "Max box size reached already!") {
      this.snack.open(error, "Awesome", { duration: 3000 });
    }
  }

  confirmSubscription() {
    this.box.size = this.determineSize().name;
    this.box.price = this.calculateTotal();
    this.dialog.open(ConfirmSubscriptionComponent, { data: { user: this.user, box: this.box }}).afterClosed().subscribe(confirm => {
      if (!confirm) this.snack.open("👍 Cancelled!", "Thank You", { duration: 3000 });
    });
  }

  calculateTotal() {
    let total = 0.00;
    this.localBoxService.getLocalBox().items.forEach(item => {
      total += item.option.price * item.quantity;
    });
    total += this.determineSize().price;
    return total;
  }

  signUp() {
    this.box.customerId = this.user.id;
    this.confirmSubscription();
  }

  determineSize() {
    const weight = this.localBoxService.calculateCurrentWeight();
    if (weight < 0.5) return this.boxSizes.filter(x => x.name == "Small")[0];
    if ((weight >= 0.5) && (weight < 1)) return this.boxSizes.filter(x => x.name == "Medium")[0];
    if (weight >= 1) return this.boxSizes.filter(x => x.name == "Large")[0];
  }
}
