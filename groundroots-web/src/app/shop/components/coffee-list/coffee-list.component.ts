import { Component, OnInit } from '@angular/core';
import { CoffeeOption } from 'src/app/shared/models/coffee-option.model';
import { Coffee } from 'src/app/shared/models/coffee.model';
import { CoffeeBuilderService } from '../../services/coffee-builder.service';
import { CoffeeService } from '../../services/coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  selectedCoffee: Coffee;

  coffees: Coffee[] = [];

  constructor(private coffeeService: CoffeeService, private builder: CoffeeBuilderService) { }

  ngOnInit() {
    this.getCoffees();
  }

  getCoffees() {
    this.coffeeService.fetchCoffees().subscribe((querySnapshot) => {
      querySnapshot.forEach(doc => {
        const data = doc.data();
        const coffee = this.builder.build(doc.id, data);
        this.coffees.push(coffee);
      });
    });
  }

  selectCoffee(coffee: Coffee) {
    this.selectedCoffee = coffee;
  }

}
