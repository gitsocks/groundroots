import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { PopSnackComponent } from 'src/app/shared/components/snacks/pop-snack/pop-snack.component';
import { CoffeeOption } from 'src/app/shared/models/coffee-option.model';
import { Coffee } from 'src/app/shared/models/coffee.model';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { AddProductOptionComponent } from '../add-product-option/add-product-option.component';
import { RemoveProductOptionComponent } from '../remove-product-option/remove-product-option.component';
import { UpdateProductOptionComponent } from '../update-product-option/update-product-option.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {

  product: Coffee;
  image: File;
  columnsToDisplay = ['size', 'weight', 'ground', 'price'];
  expandedElement: CoffeeOption | null;
  dataSource: any;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.product = {
      name: '',
      roastery: '',
      type: '',
      blend: '',
      options: [],
      roast: 'Light',
      image: ''
    };
    this.dataSource = this.product.options;
  }

  setFile(event) {
    this.image = event.target.files[0];
  }

  openAddOptionDialog() {
    this.dialog.open(AddProductOptionComponent, {data: {options: this.product.options}}).afterClosed().subscribe(option => {
      if (option) {
        this.product.options.push(option);
        this.dataSource = this.product.options;
      }
    });
  }

  openEditOptionDialog(option: CoffeeOption) {
    this.dialog.open(UpdateProductOptionComponent, {data: {option: option}});
  }

  openRemoveOptionDialog(option: CoffeeOption) {
    this.dialog.open(RemoveProductOptionComponent, { data: { option: option } }).afterClosed().subscribe(remove => {
      if (remove) this.product.options.splice(this.product.options.indexOf(option), 1);
    });
  }

  openConfirmAddDialog() {
    this.dialog.open(ConfirmComponent, {data: {title: "Add Product", message: "Are you sure you want to add the product?"}}).afterClosed().subscribe(confirmation => {
      if (confirmation) {
        this.productService.create(this.product).then(doc => {
          this.product.id = doc.id;
          this.productService.updateImage(this.product, this.image).then(reference => {
            reference.ref.getDownloadURL().then(url => {
              this.product.image = url;
              this.productService.update(this.product).then(() => {
                this.snack.open("Product has been created!", "Ok", { duration: 3000 }).afterDismissed().subscribe(() => {
                  this.router.navigate(['/admin/products']);
                })
              })
            })
          })
        }).catch(error => {
          this.snack.open("There has been an error.", "Ok", { duration: 3000 });
          console.error(error);
        })
      }
    })
  }

}
