import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalBoxComponent } from './components/local-box/local-box.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BoxItemComponent } from './components/box-item/box-item.component';
import { LocalBoxItemComponent } from './components/local-box-item/local-box-item.component';
import { RemoveBoxItemComponent } from './components/dialogs/remove-box-item/remove-box-item.component';
import { ConfirmSubscriptionComponent } from './components/dialogs/confirm-subscription/confirm-subscription.component';
import { SuccessfulSubscriptionComponent } from './components/successful-subscription/successful-subscription.component';

const routes: Routes = [
  { path: '', component: LocalBoxComponent },
  { path: 'successful', component: SuccessfulSubscriptionComponent }
]

@NgModule({
  declarations: [LocalBoxComponent, BoxItemComponent, LocalBoxItemComponent, RemoveBoxItemComponent, ConfirmSubscriptionComponent, SuccessfulSubscriptionComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    RemoveBoxItemComponent,
    ConfirmSubscriptionComponent
  ]
})

export class BoxModule { }
