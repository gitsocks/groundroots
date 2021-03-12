import { Component, Input, OnInit } from '@angular/core';
import { BoxItem } from 'src/app/shared/models/box-item.model';
import { Box } from 'src/app/shared/models/box.model';

@Component({
  selector: 'app-box-item',
  templateUrl: './box-item.component.html',
  styleUrls: ['./box-item.component.css']
})
export class BoxItemComponent implements OnInit {

  @Input() box: BoxItem;

  constructor() { }

  ngOnInit() {
  }

}
