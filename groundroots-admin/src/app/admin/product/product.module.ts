import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';



@NgModule({
  declarations: [ProductsComponent, AddProductComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
