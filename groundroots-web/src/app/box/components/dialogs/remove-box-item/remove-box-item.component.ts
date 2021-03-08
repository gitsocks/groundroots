import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-remove-box-item',
  templateUrl: './remove-box-item.component.html',
  styleUrls: ['./remove-box-item.component.css']
})
export class RemoveBoxItemComponent implements OnInit {

  constructor(
    private reference: MatDialogRef<RemoveBoxItemComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
    ) { }

  ngOnInit() {
  }

  confirm() {
    this.reference.close(true);
  }

}
