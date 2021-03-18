import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }
]

@NgModule({
  declarations: [DashboardComponent, AdminComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})

export class AdminModule { }
