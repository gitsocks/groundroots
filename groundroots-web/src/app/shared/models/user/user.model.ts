import { Address } from "./address.model";

export interface User {
    id?: string;
    uid?: string;
    first_name?: string;
    last_name?: string;
    email: string;
    password: string;
    billing?: Address;
    shipping?: Address;
}