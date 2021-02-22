import { Category } from "./category.model";
import { ProductAtrribute } from "./product-attribute.model";
import { ProductVariant } from "./product-variant.model";

export interface Product {
    id: number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    attributes: ProductAtrribute[];
    variants: ProductVariant[];
    categories: Category[];
}