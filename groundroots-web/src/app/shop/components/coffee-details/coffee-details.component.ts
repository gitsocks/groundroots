import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Coffee } from 'src/app/shared/models/coffee.model';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { CoffeeOption } from 'src/app/shared/models/coffee-option.model';
import { LocalBoxService } from 'src/app/box/services/local-box.service';
import { Box } from 'src/app/shared/models/box.model';
import { BoxItem } from 'src/app/shared/models/box-item.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-coffee-details',
  animations: [
    trigger('openClose', [
      state('open', style({
        top: '10%',
        visibility: 'visible'
      })),
      state('closed', style({
        top: '100%',
        visibility: 'hidden'
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ])
  ],
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css']
})
export class CoffeeDetailsComponent implements OnInit, OnChanges {

  @Input()
  coffee: Coffee;

  @Output() close = new EventEmitter<Coffee>();

  size: string = "250g";
  ground: boolean = false;
  selectedOption: CoffeeOption;

  constructor(private localBoxService: LocalBoxService, private snack: MatSnackBar) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.coffee = changes.coffee.currentValue;
  }

  ngOnInit() {
    if (this.coffee) this.calculatePrice();
  }

  closePopup() {
    this.close.emit(undefined);
  }

  calculatePrice() {
    this.selectedOption = this.coffee.options.filter(option => (option.size == this.size) && (option.ground == this.ground))[0];
  }

  addToBox() {
    const localBox = this.localBoxService.getLocalBox();
    const boxItem = this.generateBoxItem();
    if (localBox) {
      const error = this.localBoxService.addBoxItem(boxItem);
      if (error)  {
        this.snack.open(error, "Awesome");
      } else {
        this.snack.open("Item added to box.", "Awesome", { duration: 3000 });
        this.closePopup();
      }
    } else {
      const boxItems: BoxItem[] = [boxItem];
      const box: Box = { items: boxItems };
      this.localBoxService.create(box);
    }
  }

  private generateBoxItem() {
    const boxItem: BoxItem = {
      id: this.coffee.id,
      name: this.coffee.name,
      blend: this.coffee.blend,
      roastery: this.coffee.roastery,
      type: this.coffee.type,
      image: this.coffee.image,
      quantity: 1,
      option: this.selectedOption
    }
    return boxItem;
  }

}
