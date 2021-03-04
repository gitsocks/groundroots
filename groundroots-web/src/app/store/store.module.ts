import { NgModule } from '@angular/core';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { CoffeeItemComponent } from './components/coffee-item/coffee-item.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';

const routes: Routes = [
  {
    path: '', component: CoffeeListComponent }
]

@NgModule({
  declarations: [CoffeeListComponent, CoffeeItemComponent, CoffeeDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class StoreModule { }
