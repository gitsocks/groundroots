import { Component, OnInit } from '@angular/core';
import { SubscriptionBoxItem } from '../../models/subscription-box-item/subscription-box-item.model';
import { SubscriptionBox } from '../../models/subscription-box/subscription-box.model';
import { LocalBoxService } from '../../services/local-box/local-box.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  localBox: SubscriptionBox;

  constructor(
    private localBoxService: LocalBoxService
  ) { }

  ngOnInit() {
    this.localBox = this.localBoxService.getLocalBox();
  }

  removeItem(item: SubscriptionBoxItem) {
    try {
      this.localBoxService.remove(item);
      this.localBox = this.localBoxService.getLocalBox();
    } catch (notInBoxError) {
      console.error(notInBoxError.message);
    }
  }

}
