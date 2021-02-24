import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ItemAlreadyInBoxError } from 'src/app/shared/exceptions/ItemAlreadyInBoxError/item-already-in-box.error';
import { ProductFetcher } from 'src/app/shared/logic-services/products/product.fetcher';
import { CoffeeBeans } from 'src/app/shared/models/product/coffee.model';
import { SubscriptionBoxItem } from 'src/app/shared/models/subscription-box-item/subscription-box-item.model';
import { LocalBoxService } from 'src/app/shared/services/local-box/local-box.service';

@Component({
  selector: 'app-coffee-beans',
  templateUrl: './coffee-beans.component.html',
  styleUrls: ['./coffee-beans.component.css']
})
export class CoffeeBeansComponent implements OnInit, OnChanges {

  @Input() coffeeBeans: CoffeeBeans;

  constructor(
    private productFetcher: ProductFetcher,
    private localBoxService: LocalBoxService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.coffeeBeans = changes.coffeeBeans.currentValue;
    if(this.coffeeBeans !== undefined) {
      this.coffeeBeans.preGround = "No";
    }
    this.getProductVariations();
  }

  ngOnInit() {

  }

  getProductVariations() {
    if (this.coffeeBeans) {
      this.productFetcher.fetchProductVariations(this.coffeeBeans.id).then(variants => {
        this.coffeeBeans.variants = variants;
      });
    }
  }

  addToBox() {
    const optionalVariants = this.coffeeBeans.variants.filter(variant => variant.attributes.find(attribute => attribute.option == this.coffeeBeans.size));
    const variant = optionalVariants.filter(variant => variant.attributes.find(attribute => attribute.option == this.coffeeBeans.preGround))[0];
    const subscriptionBoxItem: SubscriptionBoxItem = { product: this.coffeeBeans, variant: variant, quantity: 1 };
    try {
      this.localBoxService.addItem(subscriptionBoxItem);
    } catch (inBoxError: any) {
      console.error(inBoxError.message);
    }
  }

  togglePreGround() {
    this.coffeeBeans.preGround = "No";
  }


}
