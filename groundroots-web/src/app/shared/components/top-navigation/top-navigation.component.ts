import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  @Output() toggleMenu = new EventEmitter();
  @Output() toggleBox = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openMenu() {
    this.toggleMenu.emit();
  }

  openBox() {
    this.toggleBox.emit();
  }

}
