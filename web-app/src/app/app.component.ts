import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ground-roots';
  show = 'hide';

  toggleCart() {
    if (this.show == 'show') {
      this.show = 'hide';
    } else {
      this.show = 'show';
    }
  }
}
