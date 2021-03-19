import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { PopSnackComponent } from 'src/app/shared/components/snacks/pop-snack/pop-snack.component';
import { User } from 'src/app/shared/models/user.model';
import { AccountService } from 'src/app/shared/services/account/account.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerDetails: FormGroup;
  customerAddress: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private account: AccountService,
    private auth: AuthService,
    private snack: MatSnackBar,
    private reference: MatDialogRef<AddCustomerComponent>
  ) { }

  ngOnInit() {
    this.customerDetails = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      cellphone: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.customerAddress = this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  addCustomer() {
    const user: User = {
      firstName: this.customerDetails.get('firstName').value,
      lastName: this.customerDetails.get('lastName').value,
      email: this.customerDetails.get('email').value,
      cellphone: this.customerDetails.get('cellphone').value,
      password: this.customerDetails.get('password').value
    }
    this.auth.register(user.email, user.password).then(credentials => {
      user.id = credentials.user.uid;
      this.account.create(user).then(() => {
        this.snack.openFromComponent(PopSnackComponent, {data: {message: "Successfully created customer!"}, duration: 3000});
        this.reference.close();
      });
    }).catch(error => {
      console.error(error);
      this.snack.openFromComponent(PopSnackComponent, { data: { message: "An account with that email already exists." }, duration: 3000 });
    })
  }

}
