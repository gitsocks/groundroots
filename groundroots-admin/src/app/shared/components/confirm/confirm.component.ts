import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) public data,
    private reference: MatDialogRef<ConfirmComponent>) { }

  ngOnInit() {
  }

  confirm(){
    this.reference.close(true);
  }

}
