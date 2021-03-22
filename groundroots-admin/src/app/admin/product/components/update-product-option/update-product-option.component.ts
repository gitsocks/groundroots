import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-product-option',
  templateUrl: './update-product-option.component.html',
  styleUrls: ['./update-product-option.component.css']
})
export class UpdateProductOptionComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) public data,
    private reference: MatDialogRef<UpdateProductOptionComponent>
  ) { }

  ngOnInit() {
  }

  updateOption() {
    this.reference.close();
  }

}
