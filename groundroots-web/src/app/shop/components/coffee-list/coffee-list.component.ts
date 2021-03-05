import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/shared/models/coffee.model';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  selectedCoffee: Coffee;

  coffees: Coffee[] = [
    { id: "a", name: "Ethiopian", blend: "Single-Origin", roastery: "Red Truck Roaster", image: "assets/images/vectors/coffee/coffee-bag.svg", options: [{ size: "250g", ground: false, price: 60.00 }, { size: "250g", ground: true, price: 65.00 }, { size: "1kg", ground: false, price: 100.00 }, { size: "1kg", ground: true, price: 120.00 }]}
  ]

  constructor() { }

  ngOnInit() {
  }

  selectCoffee(coffee: Coffee) {
    this.selectedCoffee = coffee;
  }

}
