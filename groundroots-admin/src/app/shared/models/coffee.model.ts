import { CoffeeOption } from "./coffee-option.model";

export interface Coffee {
    id?: string;
    name: string;
    roastery: string;
    type: string;
    blend: string;
    roast: string;
    image: string;
    options: CoffeeOption[]
}