import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {

  @Input() show;

  constructor(
    private app: AppComponent
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.show = changes.show.currentValue;
    console.log(this.show)
  }

  ngOnInit() {

  }

  toggleCart() {
    this.app.toggleCart();
  }

}
