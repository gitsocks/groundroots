import { Injectable } from "@angular/core";
import { ProductAtrribute } from "src/app/shared/models/product/product-attribute.model";
import { WcAttribute } from "./wc-attribute.model";

@Injectable({
    providedIn: 'root'
})

export class WcAttributeMapper {
    toProductAttribute(wcAttribute: WcAttribute): ProductAtrribute {
        let productAttribute: ProductAtrribute = {
            id: wcAttribute.id,
            name: wcAttribute.name,
            options: wcAttribute.options
        }
        return productAttribute;
    }

    toWcAttribute(productAttribute: ProductAtrribute): WcAttribute {
        let wcAttribute: WcAttribute = {
            id: productAttribute.id,
            name: productAttribute.name,
            options: productAttribute.options
        }
        return wcAttribute;
    }

    toProductAttributes(wcAttributes: WcAttribute[]): ProductAtrribute[] {
        let productAttributes: ProductAtrribute[] = [];
        wcAttributes.forEach(wcAttribute => {
            productAttributes.push(this.toProductAttribute(wcAttribute));
        });
        return productAttributes;
    }
}