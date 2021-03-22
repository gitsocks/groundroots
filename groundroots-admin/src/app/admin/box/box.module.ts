import { NgModule } from '@angular/core';
import { BoxDetailsComponent } from './components/box-details/box-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: ':id', component: BoxDetailsComponent }
]

@NgModule({
  declarations: [BoxDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})

export class BoxModule { }
