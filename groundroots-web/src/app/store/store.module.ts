import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { CoffeeItemComponent } from './components/coffee-item/coffee-item.component';



@NgModule({
  declarations: [CoffeeListComponent, CoffeeItemComponent],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }
