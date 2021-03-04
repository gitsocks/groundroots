import { Address } from "./address.model";

export interface User {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    cellphone?: string;
    password?: string;
    addresses?: Address[]
}