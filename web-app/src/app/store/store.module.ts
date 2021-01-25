import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './components/store/store.component';
import { ProductComponent } from './components/product/product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutItemComponent } from './components/checkout-item/checkout-item.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'checkout', component: CheckoutComponent }
]

@NgModule({
  declarations: [
    StoreComponent,
    ProductComponent,
    CheckoutComponent,
    CartComponent,
    CartItemComponent,
    CheckoutItemComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CartComponent
  ]
})
export class StoreModule { }
