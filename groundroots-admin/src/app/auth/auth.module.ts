import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    AngularFireAuthModule
  ]
})

export class AuthModule { }
