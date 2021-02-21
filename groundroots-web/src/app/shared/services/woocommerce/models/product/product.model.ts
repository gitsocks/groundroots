import { DatePipe } from "@angular/common";

export interface WooCommerceProduct {
    id: number;
    name: string;
    slug: string;
    permalink: string;
    date_created: Date;
    date_created_gmt: Date;
    date_modified: Date;
    type: string;
    status: string;
    featured: boolean;
    catalog_visibility: string;
    description: string;
    short_description: string;
    sku: string;
    price: string;
    sale_price: string;
    date_on_sale_from: Date;
    date_on_sale_from_gmt: Date;
    date_on_sale_to: Date;
    date_on_sale_to_gmt: Date;
    price_html: string;
    on_sale: boolean;
    purchasable: boolean;
    total_sales: number;
    virtual: boolean;
    downloadable: boolean;
    // TODO: Add downloads
    download_limit: number;
    download_expiry: number;
    external_url: string;
    button_text: string;
    tax_status: string;
    tax_class: string;
    manage_stock: boolean;
    stock_quantity: number;
    stock_status: string;
    backorders: string;
    backorders_allowed: boolean;
    backordered: boolean;
    sold_individually: boolean;
    weight: string;
    // TODO: Add dimensions
    shipping_required: boolean;
    shipping_taxable: boolean;
    shipping_class: string;
    shipping_class_id: number;
    reviews_allowed: boolean;
    average_rating: string;
    rating_count: number;
    related_ids: [];
    upsell_ids: [];
    cross_sell_ids: [];
    parent_id: number;
    purchase_note: string;
    // TODO: Add categories
    // TODO: Add tags
    // TODO: Add images
    // TODO: Add attributes
    // TODO: Add default attributes
    variations: [];
    grouped_products: [];
    menu_order: number;
    // TODO: Add meta data
}