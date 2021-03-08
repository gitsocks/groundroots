import { BoxItem } from "./box-item.model";

export interface Box {
    id?: string;
    customerId?: string;
    size?: string;
    price?: number;
    frequency?: string;
    items: BoxItem[]
}