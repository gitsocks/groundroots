import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Filter } from 'src/app/shared/enums/filter.enum';
import { Product } from 'src/app/shared/models/product/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input()
  filter: Filter;

  @Input()
  product: Product;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filter != undefined) this.filter = changes.filter.currentValue;
    if (changes.product != undefined) this.product = changes.product.currentValue;
  }

  ngOnInit() {}

  public get Filter () {
    return Filter;
  }

}
