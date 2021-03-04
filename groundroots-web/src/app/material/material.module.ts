import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatButtonModule,
    MatBottomSheetModule
  ],
  exports: [
    MatCardModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatButtonModule,
    MatBottomSheetModule
  ]
})
export class MaterialModule { }
