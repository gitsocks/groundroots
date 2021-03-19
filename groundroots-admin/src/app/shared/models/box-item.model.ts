import { CoffeeOption } from "./coffee-option.model";

export interface BoxItem {
    id: string;
    name: string;
    roastery: string;
    type: string;
    blend: string;
    image: string;
    quantity: number;
    option: CoffeeOption;
}