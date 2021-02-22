import { Injectable } from "@angular/core";
import { ProductVariant } from "src/app/shared/models/product/product-variant.model";
import { WcAttributeMapper } from "../attribute/wc-attribute.mapper";
import { WcProductVariantAttributeMapper } from "../product-variant-attribute/wc-product-variant-attribute.mapper";
import { WcProductVariant } from "./wc-product-variant.model";

@Injectable({
    providedIn: 'root'
})

export class WcProductVariantMapper {

    constructor(private productVariantAttributeMapper: WcProductVariantAttributeMapper) {}

    toProductVariant(wcProductVariant: WcProductVariant): ProductVariant { 
        let productVariant: ProductVariant = {
            id: wcProductVariant.id,
            price: wcProductVariant.price,
            stockQuantity: wcProductVariant.stock_quantity,
            weight: wcProductVariant.weight,
            attributes: this.productVariantAttributeMapper.toProductVariantAttributes(wcProductVariant.attributes)
        }
        return productVariant;
    }

    toWcProductVariant(productVariant: ProductVariant): WcProductVariant {
        let wcProductVariant: WcProductVariant = {
            id: productVariant.id,
            price: productVariant.price,
            stock_quantity: productVariant.stockQuantity,
            weight: productVariant.weight,
            attributes: this.productVariantAttributeMapper.toWcProductVariantAttributes(productVariant.attributes)
        }
        return wcProductVariant;
    }
 
}