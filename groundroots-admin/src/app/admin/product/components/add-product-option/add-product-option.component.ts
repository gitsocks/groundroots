import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CoffeeOption } from 'src/app/shared/models/coffee-option.model';

@Component({
  selector: 'app-add-product-option',
  templateUrl: './add-product-option.component.html',
  styleUrls: ['./add-product-option.component.css']
})
export class AddProductOptionComponent implements OnInit {

  option: CoffeeOption = { size: '', weight: 0.00, ground: false, price: 0.00};

  constructor(
    @Inject (MAT_DIALOG_DATA) public data,
    private reference: MatDialogRef<AddProductOptionComponent>) { }

  ngOnInit() {
  }

  addOption() {
    this.reference.close(this.option);
  }
}
