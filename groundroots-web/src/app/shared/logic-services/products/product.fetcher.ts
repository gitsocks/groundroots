import { Injectable } from "@angular/core";
import { Product } from "src/app/shared/models/product/product.model";
import { WcProductMapper } from "../../services/woocommerce/models/product/wc-product.mapper";
import { WcProduct } from "../../services/woocommerce/models/product/wc-product.model";
import { ProductService } from "../../services/woocommerce/product/product.service";

@Injectable({
    providedIn: 'root'
})

export class ProductFetcher {

    constructor(
        private productService: ProductService,
        private wcProductMapper: WcProductMapper
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

}