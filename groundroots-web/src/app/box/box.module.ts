import { NgModule } from '@angular/core';
import { LocalBoxComponent } from './components/local-box/local-box.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LocalBoxItemComponent } from './components/local-box-item/local-box-item.component';
import { RemoveBoxItemComponent } from './components/dialogs/remove-box-item/remove-box-item.component';
import { ConfirmSubscriptionComponent } from './components/dialogs/confirm-subscription/confirm-subscription.component';
import { SuccessfulSubscriptionComponent } from './components/successful-subscription/successful-subscription.component';
import { BoxDetailsComponent } from './components/box-details/box-details.component';
import { BoxItemComponent } from './components/box-item/box-item.component';
import { CancelSubscriptionComponent } from './components/dialogs/cancel-subscription/cancel-subscription.component';

const routes: Routes = [
  { path: '', component: LocalBoxComponent },
  { path: 'payment/success', component: SuccessfulSubscriptionComponent },
  { path: 'view/:id', component: BoxDetailsComponent }
]

@NgModule({
  declarations: [LocalBoxComponent, LocalBoxItemComponent, RemoveBoxItemComponent, ConfirmSubscriptionComponent, SuccessfulSubscriptionComponent, BoxDetailsComponent, BoxItemComponent, CancelSubscriptionComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    RemoveBoxItemComponent,
    ConfirmSubscriptionComponent,
    CancelSubscriptionComponent
  ]
})

export class BoxModule { }
