import { Injectable } from "@angular/core";
import { Category } from "src/app/shared/models/product/category.model";
import { Product } from "src/app/shared/models/product/product.model";
import { WcCategory } from "./wc-category.model";

@Injectable({
    providedIn: 'root'
})

export class WcCategoryMapper {
    toCategory(wcCategory: WcCategory): Category {
        let category: Category = {
            id: wcCategory.id,
            name: wcCategory.name
        }
        return category;
    }

    toWcCategory(category: Category): WcCategory {
        let wcCategory: WcCategory = {
            id: category.id,
            name: category.name
        }
        return wcCategory;
    }

    toCategories(wcCategories: WcCategory[]): Category[] {
        let categories: Category[] = [];
        wcCategories.forEach(wcCategory => {
            categories.push(this.toCategory(wcCategory));
        });
        return categories;
    }
}