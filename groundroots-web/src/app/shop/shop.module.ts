import { NgModule } from '@angular/core';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';
import { CoffeeListItemComponent } from './components/coffee-list-item/coffee-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CoffeeListComponent }
]

@NgModule({
  declarations: [CoffeeListComponent, CoffeeDetailsComponent, CoffeeListItemComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ShopModule { }
