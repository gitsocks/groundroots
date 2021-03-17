import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { LocalBoxService } from 'src/app/box/services/local-box.service';
import { BoxItem } from '../../models/box-item.model';
import { Box } from '../../models/box.model';
import { QuickLoginComponent } from '../quick-login/quick-login.component';

@Component({
  selector: 'app-quick-box',
  templateUrl: './quick-box.component.html',
  styleUrls: ['./quick-box.component.css']
})
export class QuickBoxComponent implements OnInit {

  boxSizes = [
    { weight: 0.25, name: "Small", price: 100.00 },
    { weight: 0.5, name: "Medium", price: 125.00 },
    { weight: 1, name: "Large", price: 150.00 }
  ]

  @Output() close = new EventEmitter();
  constructor(
    public localbox: LocalBoxService, 
    private snack: MatSnackBar, 
    private auth: AuthService, 
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  remove(item: BoxItem) {
    this.localbox.removeBoxItem(item);
  }

  update(item: BoxItem) {
    const error = this.localbox.update(item);
    if (error == "Max box size reached already!") {
      this.snack.open(error, "Awesome", { duration: 3000 });
    } else if (error == "This will remove the item from your cart? Are you sure?") {
      this.localbox.removeBoxItem(item);
    }
  }

  calculateTotal() {
    let total = 0.00;
    this.localbox.getLocalBox().items.forEach(item => {
      total += item.option.price * item.quantity;
    });
    total += this.determineSize().price;
    return total;
  }

  determineSize() {
    const weight = this.localbox.calculateCurrentWeight();
    if (weight < 0.5) return this.boxSizes.filter(x => x.name == "Small")[0];
    if ((weight >= 0.5) && (weight < 1)) return this.boxSizes.filter(x => x.name == "Medium")[0];
    if (weight >= 1) return this.boxSizes.filter(x => x.name == "Large")[0];
  }

  subscribe() {
    this.auth.getAuthState().subscribe(credentials => {
      console.log(credentials)
      if (credentials) {
        this.router.navigate(['/app/box'])
      } else {
        this.dialog.open(QuickLoginComponent).afterClosed().subscribe(() => {
          this.close.emit();
        });
      }
      // this.close.emit();
    })
  }

}
