import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BoxItem } from 'src/app/shared/models/box-item.model';
import { LocalBoxService } from '../../services/local-box.service';

@Component({
  selector: 'app-local-box-item',
  templateUrl: './local-box-item.component.html',
  styleUrls: ['./local-box-item.component.css']
})
export class LocalBoxItemComponent implements OnInit {

  @Input() boxItem: BoxItem
  @Output() update = new EventEmitter<BoxItem>();

  constructor(private localBoxService: LocalBoxService) { }

  ngOnInit() {
  }

  increase() {
    this.boxItem.quantity += 1;
    this.update.emit(this.boxItem);
  }

  decrease() {
    this.boxItem.quantity -= 1;
    this.update.emit(this.boxItem);
  }

}
