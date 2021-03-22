import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Box } from 'src/app/shared/models/box.model';
import { BoxService } from 'src/app/shared/services/box/box.service';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.css']
})
export class BoxDetailsComponent implements OnInit {

  box: Box;

  constructor(
    private boxService: BoxService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getBox(id);
  }

  getBox(id) {
    this.boxService.fetchById(id).subscribe(box => {
      const data = box.data();
      this.box = {
        id: id,
        customerId: data.customerId,
        size: data.size,
        price: data.price,
        frequency: data.frequency,
        status: data.status,
        items: data.items
      };
    });
  }

}
