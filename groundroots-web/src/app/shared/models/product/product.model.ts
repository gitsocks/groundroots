import { Category } from "./category.model";
import { ProductVariant } from "./product-variant.model";

export interface Product {
    id: number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    variants: ProductVariant[];
    categories: Category[];
}