import { ProductVariant } from "../product/product-variant.model";
import { Product } from "../product/product.model";

export interface SubscriptionBoxItem {
    product: Product;
    variant?: ProductVariant;
    quantity: number;
}