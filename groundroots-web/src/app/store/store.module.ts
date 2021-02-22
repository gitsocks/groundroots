import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorefrontComponent } from './components/storefront/storefront.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: StorefrontComponent },
    { path: 'store/:id', component: ProductDetailsComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [StorefrontComponent, ProductDetailsComponent, ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StoreModule { }
