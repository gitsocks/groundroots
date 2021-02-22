import { Injectable } from "@angular/core";
import { Product } from "src/app/shared/models/product/product.model";
import { ProductVariant } from "../../models/product/product-variant.model";
import { WcProductVariantMapper } from "../../services/woocommerce/models/product-variant/wc-product-variant.mapper";
import { WcProductVariant } from "../../services/woocommerce/models/product-variant/wc-product-variant.model";
import { WcProductMapper } from "../../services/woocommerce/models/product/wc-product.mapper";
import { WcProduct } from "../../services/woocommerce/models/product/wc-product.model";
import { ProductService } from "../../services/woocommerce/product/product.service";

@Injectable({
    providedIn: 'root'
})

export class ProductFetcher {

    constructor(
        private productService: ProductService,
        private wcProductMapper: WcProductMapper,
        private wcProductVariantMapper: WcProductVariantMapper
        ) {}

    fetchProducts(): Promise<Product[]> {
        return new Promise<Product[]> ((resolve, reject) => {
            this.productService.getAll().then((data) => {
                const wcProducts: WcProduct[] = data['data'];
                resolve(this.wcProductMapper.toProducts(wcProducts));
            }).catch(error => {               
                reject(error);
            })
        });
    }

    fetchCoffeeBeans(): Promise<Product[]> {
        return new Promise<Product[]> ((resolve, reject) => {
            this.productService.getCoffeeBeans().then((data) => {
                const wcProducts: WcProduct[] = data['data'];
                resolve(this.wcProductMapper.toProducts(wcProducts));
            }).catch(error => {               
                reject(error);
            })
        });
    }

    fetchProductVariations(id: number): Promise<ProductVariant[]> {
        return new Promise<ProductVariant[]> ((resolve, reject) => {
            this.productService.getProductVariants(id).then((data) => {
                const wcProductVariants: WcProductVariant[] = data['data'];
                resolve(this.wcProductVariantMapper.toProductVariants(wcProductVariants));
            }).catch(error => {               
                reject(error);
            })
        });
    }

}