import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from 'src/app/shared/models/coffee.model';

@Component({
  selector: 'app-coffee-list-item',
  templateUrl: './coffee-list-item.component.html',
  styleUrls: ['./coffee-list-item.component.css']
})
export class CoffeeListItemComponent implements OnInit {

  @Input() coffee: Coffee

  constructor() { }

  ngOnInit() {
  }

}
