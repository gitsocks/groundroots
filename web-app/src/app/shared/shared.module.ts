import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [NavbarComponent, MenuComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    MenuComponent
  ]
})
export class SharedModule { }
