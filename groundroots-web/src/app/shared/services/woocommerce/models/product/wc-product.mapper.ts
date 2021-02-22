import { Injectable } from "@angular/core";
import { Product } from "src/app/shared/models/product/product.model";
import { WcAttributeMapper } from "../attribute/wc-attribute.mapper";
import { WcCategoryMapper } from "../category/wc-category.mapper";
import { WcProductVariantMapper } from "../product-variant/wc-product-variant.mapper";
import { WcProduct } from "./wc-product.model";

@Injectable({
    providedIn: 'root'
})

export class WcProductMapper {

    constructor(
        private wcAttributeMapper: WcAttributeMapper,
        private wcProductVariantMapper: WcProductVariantMapper,
        private  wcCategoryMapper: WcCategoryMapper
        ) {}

    toProduct(wcProduct: WcProduct): Product {
        let product: Product = {
            id: wcProduct.id,
            name: wcProduct.name,
            shortDescription: wcProduct.short_description,
            description: wcProduct.description,
            price: wcProduct.price,
            attributes: this.wcAttributeMapper.toProductAttributes(wcProduct.attributes),
            categories: this.wcCategoryMapper.toCategories(wcProduct.categories)
        }
        return  product;
    }

}