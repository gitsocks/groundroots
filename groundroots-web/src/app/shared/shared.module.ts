import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { QuickBoxComponent } from './components/quick-box/quick-box.component';
import { MenuComponent } from './components/menu/menu.component';
import { QuickBoxItemComponent } from './components/quick-box-item/quick-box-item.component';

@NgModule({
  declarations: [TopNavigationComponent, QuickBoxComponent, MenuComponent, QuickBoxItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    TopNavigationComponent,
    QuickBoxComponent,
    QuickBoxItemComponent,
    MenuComponent,
    HttpClientModule
  ]
})

export class SharedModule { }
