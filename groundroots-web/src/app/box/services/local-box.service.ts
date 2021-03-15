import { Injectable } from '@angular/core';
import { BoxItem } from 'src/app/shared/models/box-item.model';
import { Box } from 'src/app/shared/models/box.model';

@Injectable({
  providedIn: 'root'
})
export class LocalBoxService {

  box: Box;

  constructor() { }

  private readBox() {
    const localBox = localStorage.getItem('localBox');
    if (localBox) this.box = JSON.parse(localBox);
  }

  private save() {
    localStorage.setItem('localBox', JSON.stringify(this.box));
  }

  private exists(box) {
    return box !== "undefined";
  }

  getLocalBox(): Box {
    const localBox = localStorage.getItem('localBox');
    if (localBox) {
      this.box = JSON.parse(localBox);
      return this.box;
    } else {
      this.box = {
        items: []
      }
      this.save();
      return this.box;
    }
  }

  update(item: BoxItem) {
    if (item.quantity < 1) return "🛑 This will remove the item from your cart? Are you sure?";
    const oldItem = this.findBoxItem(item);
    if (this.maxBoxSizeReached(oldItem, item)) return "☝️ Max box size reached already!";
    this.box.items[this.box.items.indexOf(oldItem)] = item;
    this.save();
  }

  reset() {
    this.readBox();
    this.box.items = [];
    this.save();
  }

  private isIncrease(oldItem, newItem) {
    return newItem.quantity > oldItem.quantity;
  }

  private maxBoxSizeReached(oldItem, newItem) {
    const totalWeight = this.calculateTotalWeight(newItem);
    if (this.isIncrease(oldItem, newItem)) {
      console.log(totalWeight)
      return totalWeight >= 2;
    } else {
      return false;
    }
  }


  create(box: Box) {
    this.box = box;
    this.save();
  }

  addBoxItem(item: BoxItem) {
    this.readBox();
    const totalWeight = this.calculateTotalWeight(item);
    const boxItem = this.findBoxItem(item);
    if (totalWeight >= 2) return "☝️ Max box size reached already!";
    if (boxItem) return "🤟 Item already in box!";
    this.box.items.push(item);
    this.save();
  }

  private findBoxItem(item: BoxItem): BoxItem {
    return this.box.items.filter(x => (x.id == item.id) && (x.option.ground == item.option.ground) && (x.option.size == item.option.size))[0];
  }

  removeBoxItem(item: BoxItem) {
    const oldItem = this.findBoxItem(item);
    const index = this.box.items.indexOf(oldItem);
    const count = 1;
    this.readBox();
    this.box.items.splice(index, count);
    this.save();
  }

  private calculateTotalWeight(item: BoxItem) {
    return this.calculateCurrentWeight() + (item.option.weight * item.quantity);
  }

  public calculateCurrentWeight() {
    let totalWeight = 0.00;
    this.box.items.forEach(item => { totalWeight += item.option.weight * item.quantity });
    return totalWeight;
  }

}
