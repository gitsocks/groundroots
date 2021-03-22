import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddProductOptionComponent } from './components/add-product-option/add-product-option.component';
import { UpdateProductOptionComponent } from './components/update-product-option/update-product-option.component';
import { RemoveProductOptionComponent } from './components/remove-product-option/remove-product-option.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add', component: AddProductComponent },
  { path: ':id', component: ProductDetailsComponent }
]

@NgModule({
  declarations: [ProductsComponent, AddProductComponent, AddProductOptionComponent, UpdateProductOptionComponent, RemoveProductOptionComponent, ProductDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddProductOptionComponent,
    UpdateProductOptionComponent,
    RemoveProductOptionComponent
  ]
})

export class ProductModule { }
