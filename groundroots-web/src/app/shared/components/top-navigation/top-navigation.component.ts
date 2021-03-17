import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalBoxService } from 'src/app/box/services/local-box.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  @Output() toggleMenu = new EventEmitter();
  @Output() toggleBox = new EventEmitter();

  constructor(public localBox: LocalBoxService) { }

  ngOnInit() {
  }

  openMenu() {
    this.toggleMenu.emit();
  }

  openBox() {
    this.toggleBox.emit();
  }

}
