import { NgModule } from '@angular/core';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';
import { CoffeeListItemComponent } from './components/coffee-list-item/coffee-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/login']);

const routes: Routes = [
  { path: '', redirectTo: '/app/coffee', pathMatch: 'full' },
  { path: 'coffee', component: CoffeeListComponent },
  { path: 'me', loadChildren: () => import('../account/account.module').then(m => m.AccountModule), canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'box', loadChildren: () => import('../box/box.module').then(m => m.BoxModule), canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } }
]

@NgModule({
  declarations: [CoffeeListComponent, CoffeeDetailsComponent, CoffeeListItemComponent, ShopComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ShopModule { }
