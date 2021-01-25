import { Product } from '../models/product.model';

export interface Option {
    option: string;
    active: boolean;
    products: Product[];
}