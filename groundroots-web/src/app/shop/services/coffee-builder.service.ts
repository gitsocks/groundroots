import { Injectable } from '@angular/core';
import { CoffeeOption } from 'src/app/shared/models/coffee-option.model';
import { Coffee } from 'src/app/shared/models/coffee.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeBuilderService {

  constructor() { }

  build(id, data): Coffee {
    const coffee: Coffee = {
      id: id,
      name: data.name,
      image: data.image,
      blend: data.blend,
      roastery: data.roastery,
      type: data.type,
      options: this.processOptions(data.options)
    }
    return coffee;
  }

  private processOptions(data) {
    const options: CoffeeOption[] = [];
    data.forEach(item => {
      const coffeeOption: CoffeeOption = {
        size: item.size,
        price: Number(item.price),
        weight: Number(item.weight),
        ground: this.processGround(item.ground)
      };
      options.push(coffeeOption);
    });
    return options;
  }

  private processGround(data) {
    if (data === "true") return true;
    if (data === "false") return false;
  }
}
