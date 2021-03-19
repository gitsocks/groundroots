import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { User } from 'src/app/shared/models/user.model';
import { AccountService } from 'src/app/shared/services/account/account.service';
import { AddCustomerComponent } from '../add-customer/add-customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  customers: User[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'cellphone','actions'];
  dataSource: any;

  constructor(
    private account: AccountService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.account.fetchAll().subscribe(customers => {
      this.customers = customers;
      this.dataSource = new MatTableDataSource(this.customers);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  popAddCustomer() {
    this.dialog.open(AddCustomerComponent, { width: '60%'})
  }

}
