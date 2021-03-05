import { CoffeeOption } from "./coffee-option.model";

export interface Coffee {
    id: string;
    name: string;
    roastery: string;
    blend: string;
    image: string;
    options: CoffeeOption[]
}