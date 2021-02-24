import { Injectable } from '@angular/core';
import { ItemAlreadyInBoxError } from '../../exceptions/ItemAlreadyInBoxError/item-already-in-box.error';
import { SubscriptionBoxItem } from '../../models/subscription-box-item/subscription-box-item.model';
import { SubscriptionBox } from '../../models/subscription-box/subscription-box.model';

@Injectable({
  providedIn: 'root'
})
export class LocalBoxService {

  localBox: SubscriptionBox;

  constructor() {
    const localBoxStorage = localStorage.getItem('localBox');
    if (localBoxStorage) {
      this.localBox = JSON.parse(localStorage.getItem('localBox'));
    } else {
      this.localBox = {};
      localStorage.setItem('localBox', JSON.stringify(this.localBox));
    }
  }

  getLocalBox(): SubscriptionBox {
    return JSON.parse(localStorage.getItem('localBox'));
  }

  private saveLocalBox() {
    localStorage.setItem('localBox', JSON.stringify(this.localBox));
  }

  addItem(item: SubscriptionBoxItem): void {
    this.localBox = this.getLocalBox();
    if (!this.localBox.items) this.localBox.items = [];
    if (!this.doesExist(item)) {
      this.localBox.items.push(item);
      this.saveLocalBox();
    } else {
      throw new ItemAlreadyInBoxError(item, `Item with product id ${item.product.id} and variant id ${item.variant.id} is already in box!`);
    }
  }

  private doesExist(item: SubscriptionBoxItem) {
    const boxItem = this.localBox.items.filter(i => (i.product == item.product) && (i.variant == item.variant));
    return boxItem != null;
  }


}
