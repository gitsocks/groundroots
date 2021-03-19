import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MaterialModule } from '../material/material.module';
import { SuccessSnackComponent } from './components/snacks/success-snack/success-snack.component';
import { PopSnackComponent } from './components/snacks/pop-snack/pop-snack.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [SuccessSnackComponent, PopSnackComponent, ConfirmComponent],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    PopSnackComponent,
    ConfirmComponent
  ]
})

export class SharedModule { }
