import { Product } from "./product.model";

export interface CoffeeBeans extends Product {
    size: string;
    preGround: string;
}