import { NgModule } from '@angular/core';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: AccountDetailsComponent }
]

@NgModule({
  declarations: [AccountDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountModule { }
