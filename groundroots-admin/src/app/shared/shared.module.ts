import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SuccessSnackComponent } from './components/snacks/success-snack/success-snack.component';
import { PopSnackComponent } from './components/snacks/pop-snack/pop-snack.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SuccessSnackComponent, PopSnackComponent],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    AngularFirestoreModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [
    PopSnackComponent
  ]
})

export class SharedModule { }
