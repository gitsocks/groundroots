import { NgModule } from '@angular/core';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { BoxesComponent } from './components/boxes/boxes.component';

const routes: Routes = [
  {
    path: '', component: AccountDetailsComponent, children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'address', component: AddressComponent },
      { path: 'boxes', component: BoxesComponent }
    ]
  }
]

@NgModule({
  declarations: [AccountDetailsComponent, ProfileComponent, AddressComponent, BoxesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountModule { }
