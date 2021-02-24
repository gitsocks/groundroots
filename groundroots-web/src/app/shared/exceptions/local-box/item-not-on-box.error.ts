import { SubscriptionBoxItem } from "../../models/subscription-box-item/subscription-box-item.model";

export class ItemNotInBoxError extends Error {
    item: SubscriptionBoxItem;
    constructor(item: SubscriptionBoxItem, message: string) {
        super(message);
        this.item = item;
    }
}