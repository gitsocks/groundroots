import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorefrontComponent } from './components/storefront/storefront.component';
import { ProductComponent } from './components/product/product.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoffeeBeansComponent } from './components/coffee-beans/coffee-beans.component';
import { PastryComponent } from './components/pastry/pastry.component';

const routes: Routes = [
    { path: '', component: StorefrontComponent }
]

@NgModule({
  declarations: [StorefrontComponent, ProductComponent, CoffeeBeansComponent, PastryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class StoreModule { }
