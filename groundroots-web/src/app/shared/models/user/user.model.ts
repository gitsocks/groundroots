import { Address } from "cluster";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    addresses: Address[]
}