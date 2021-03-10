import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BoxService } from 'src/app/box/services/box.service';
import { Box } from 'src/app/shared/models/box.model';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  boxes: Box[];

  constructor(private boxService: BoxService, private auth: AuthService) { }

  ngOnInit() {
    this.getBoxes();
  }

  getBoxes() {
    this.auth.getAuthState().subscribe(credentials => {
      this.boxService.fetchByUser(credentials.uid).subscribe(boxes => {
        this.boxes = boxes;
      });
    });
  }

}
