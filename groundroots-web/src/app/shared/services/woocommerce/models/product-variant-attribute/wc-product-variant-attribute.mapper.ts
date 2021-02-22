import { Injectable } from "@angular/core";
import { ProductVariantAttribute } from "src/app/shared/models/product/product-variant-attribute.model";
import { WcProductVariantAttribute } from "./wc-product-variant-attribute.model";


@Injectable({
    providedIn: 'root'
})

export class WcProductVariantAttributeMapper {

    toProductVariantAttribute(wcProductVariantAttribute: WcProductVariantAttribute): ProductVariantAttribute {
        let productVariantAttribute: ProductVariantAttribute = {
            id: wcProductVariantAttribute.id,
            name: wcProductVariantAttribute.name,
            option: wcProductVariantAttribute.option
        }
        return productVariantAttribute;
    }

    toWcProductVariantAttribute(productVariantAttribute: ProductVariantAttribute): WcProductVariantAttribute {
        let wcProductVariantAttribute: WcProductVariantAttribute = {
            id: productVariantAttribute.id,
            name: productVariantAttribute.name,
            option: productVariantAttribute.option
        }
        return wcProductVariantAttribute;
    }

    toProductVariantAttributes(wcProductVariantAttributes: WcProductVariantAttribute[]): ProductVariantAttribute[] {
        let productVariantAttributes: ProductVariantAttribute[] = [];
        wcProductVariantAttributes.forEach(wcProductVariantAttribute => {
            productVariantAttributes.push(this.toProductVariantAttribute(wcProductVariantAttribute));
        });
        return productVariantAttributes;
    }

    toWcProductVariantAttributes(productVariantAttributes: ProductVariantAttribute[]): WcProductVariantAttribute[] {
        let wcProductVariantAttributes: WcProductVariantAttribute[] = [];
        productVariantAttributes.forEach(productVariantAttribute => {
            wcProductVariantAttributes.push(this.toWcProductVariantAttribute(productVariantAttribute));
        });
        return wcProductVariantAttributes;
    }
}