import { ProductVariantAttribute } from "./product-variant-attribute.model";

export interface ProductVariant {
    id: number;
    price: number;
    stockQuantity: number;
    weight: number;
    attributes: ProductVariantAttribute[]
}