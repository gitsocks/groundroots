import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BoxItem } from '../../models/box-item.model';

@Component({
  selector: 'app-quick-box-item',
  templateUrl: './quick-box-item.component.html',
  styleUrls: ['./quick-box-item.component.css']
})
export class QuickBoxItemComponent implements OnInit {

  @Input() item: BoxItem;
  @Output() remove = new EventEmitter<BoxItem>();
  @Output() update = new EventEmitter<BoxItem>();

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  increase() {
    this.item.quantity++;
    this.update.emit(this.item);
  }

  decrease() {
    this.item.quantity--;
    this.update.emit(this.item);
  }

}
