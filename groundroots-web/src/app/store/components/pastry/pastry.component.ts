import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pastry } from 'src/app/shared/models/product/pastry.model';

@Component({
  selector: 'app-pastry',
  templateUrl: './pastry.component.html',
  styleUrls: ['./pastry.component.css']
})
export class PastryComponent implements OnInit, OnChanges {

  @Input() pastry: Pastry;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.pastry =  changes.pastry.currentValue;
  }

  ngOnInit() {

  }

  addToBox() {}

}
