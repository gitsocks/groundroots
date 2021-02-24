import { SubscriptionBoxItem } from "../subscription-box-item/subscription-box-item.model";

export interface SubscriptionBox {
    id: string;
    customerId: number;
    email: string;
    items: SubscriptionBoxItem[];
}