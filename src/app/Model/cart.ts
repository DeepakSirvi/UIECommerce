import { User } from "./user";
import { Varient } from "./varient";

export class Cart {
    id!: string;
    product!: Varient;
    quantity!: number;
    user!: User;
}
