import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/account/services/account.service';
import { Box } from 'src/app/shared/models/box.model';
import { User } from 'src/app/shared/models/user.model';
import { BoxService } from '../../services/box.service';
import { CancelSubscriptionComponent } from '../dialogs/cancel-subscription/cancel-subscription.component';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.css']
})
export class BoxDetailsComponent implements OnInit {

  box: Box;
  user: User;

  constructor(
    private account: AccountService,
    private boxService: BoxService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBox();
  }

  getUser() {
    this.account.fetchById(this.box.customerId).get().subscribe(user => {
      this.user = {
        email: user.data().email,
        firstName: user.data().firstName,
        lastName: user.data().lastName,
        cellphone: user.data().cellphone,
        address: user.data().address
      }
      this.user.id = user.id;
    });
  }

  getBox() {
    this.boxService.fetchById(this.route.snapshot.params['id']).get().subscribe(box => {
      this.box = {
        id: box.id,
        customerId: box.data().customerId,
        size: box.data().size,
        price: box.data().price,
        frequency: box.data().frequency,
        token: box.data().token,
        items: box.data().items
      }
      console.log(this.box);
      this.getUser();
    })
  }

  cancel() {
    this.dialog.open(CancelSubscriptionComponent).afterClosed().subscribe(confirmed => {
      if (confirmed) this.boxService.cancel(this.box).subscribe(response => {
        console.log(response);
        if (response["code"] === 200) {
          this.box.status = "Cancelled";
          this.boxService.update(this.box).then(successful => {
            this.snack.open("Box has been cancelled!", "Thank You", { duration: 3000 }).afterDismissed().subscribe(() => {
              this.router.navigate(['/me/boxes']);
            })
          });
        }
      });
    })
  }

}
