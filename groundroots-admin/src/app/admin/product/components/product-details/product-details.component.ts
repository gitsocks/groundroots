import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { CoffeeOption } from 'src/app/shared/models/coffee-option.model';
import { Coffee } from 'src/app/shared/models/coffee.model';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { AddProductOptionComponent } from '../add-product-option/add-product-option.component';
import { RemoveProductOptionComponent } from '../remove-product-option/remove-product-option.component';
import { UpdateProductOptionComponent } from '../update-product-option/update-product-option.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Coffee;
  image: File;
  imageUrl: string;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private productService: ProductService,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getProduct(id);
  }

  getProduct(id: string) {
    this.productService.fetchById(id).subscribe(product => {
      const data = product.data();
      this.product = {
        id: product.id,
        name: data.name,
        type: data.type,
        roastery: data.roastery,
        blend: data.blend,
        roast: data.roast,
        options: data.options
      }
      this.getProductImage();
    });
  }

  getProductImage() {
    this.productService.fetchProductImage(this.product).subscribe(image => {
      this.imageUrl = image;
    });
  }

  setFile(event) {
    this.image = event.target.files[0];
  }

  openAddOptionDialog() {
    this.dialog.open(AddProductOptionComponent, { data: { options: this.product.options } }).afterClosed().subscribe(option => {
      if (option) {
        this.product.options.push(option);
      }
    });
  }

  openEditOptionDialog(option: CoffeeOption) {
    this.dialog.open(UpdateProductOptionComponent, { data: { option: option } });
  }

  openRemoveOptionDialog(option: CoffeeOption) {
    this.dialog.open(RemoveProductOptionComponent, { data: { option: option } }).afterClosed().subscribe(remove => {
      if (remove) this.product.options.splice(this.product.options.indexOf(option), 1);
    });
  }

  openConfirmUpdateDialog() {
    this.dialog.open(ConfirmComponent, { data: { title: "Add Product", message: "Are you sure you want to update the product?" } }).afterClosed().subscribe(confirmation => {
      if (confirmation) {
        this.productService.update(this.product).then(response => {
          this.snack.open("Product has been created!", "Ok", { duration: 3000 });
        }).catch(error => {
          this.snack.open("There has been an error.", "Ok", { duration: 3000 });
          console.error(error);
        })
      }
    })
  }

  openConfirmImageUpdateDialog() {
    this.dialog.open(ConfirmComponent, { data: { title: "Add Product", message: "Are you sure you want to update the product?" } }).afterClosed().subscribe(confirmation => {
      if (confirmation) {
        this.productService.updateImage(this.product, this.image).then(response => {
          this.snack.open("Product has been created!", "Ok", { duration: 3000 });
          this.getProductImage();
        }).catch(error => {
          this.snack.open("There has been an error.", "Ok", { duration: 3000 });
          console.error(error);
        })
      }
    })
  }

}
