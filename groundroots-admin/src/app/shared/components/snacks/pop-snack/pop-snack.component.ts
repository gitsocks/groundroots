import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-pop-snack',
  templateUrl: './pop-snack.component.html',
  styleUrls: ['./pop-snack.component.css']
})
export class PopSnackComponent implements OnInit {

  constructor(@Inject (MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {}

}
