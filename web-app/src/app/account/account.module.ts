import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './components/account/account.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AddressComponent } from './components/address/address.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';


@NgModule({
  declarations: [
    AccountComponent,
    AccountDetailsComponent,
    AddressComponent,
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
