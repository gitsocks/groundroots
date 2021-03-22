import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'customers', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'box', loadChildren: () => import('./box/box.module').then(m => m.BoxModule) },
]

@NgModule({
  declarations: [DashboardComponent, AdminComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})

export class AdminModule { }
