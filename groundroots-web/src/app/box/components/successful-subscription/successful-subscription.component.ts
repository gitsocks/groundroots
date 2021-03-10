import { Component, OnInit } from '@angular/core';
import { LocalBoxService } from '../../services/local-box.service';

@Component({
  selector: 'app-successful-subscription',
  templateUrl: './successful-subscription.component.html',
  styleUrls: ['./successful-subscription.component.css']
})
export class SuccessfulSubscriptionComponent implements OnInit {

  constructor(
    private localBoxService: LocalBoxService
  ) { }

  ngOnInit() {
    this.localBoxService.reset();
  }

}
