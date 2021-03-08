import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AuthModule } from './auth/auth.module';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { ShopModule } from './shop/shop.module';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BoxModule } from './box/box.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AuthModule,
    ShopModule,
    BoxModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthGuardModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
