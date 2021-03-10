import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    AngularFireAuthModule
  ]
})

export class AuthModule { }
