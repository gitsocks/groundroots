import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-remove-product-option',
  templateUrl: './remove-product-option.component.html',
  styleUrls: ['./remove-product-option.component.css']
})
export class RemoveProductOptionComponent implements OnInit {

  constructor(
    private reference: MatDialogRef<RemoveProductOptionComponent>
  ) { }

  ngOnInit() {
  }

  remove() {
    this.reference.close(true);
  }

}
