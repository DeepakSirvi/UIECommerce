import { Order } from "./order";
import { Status } from "./status";
import { User } from "./user";

export class Address {
    id: string = '';
    name: string = '';
    mobile: string = '';
    pincode: number | null = null;
    locality: string = '';
    city: string = '';
    state: string = '';
    landMark: string = '';
    alternateMobile: string = '';
    addressType: string = '';
    status: Status = Status.ACTIVE;
    userAddress: User = new User();
    order: Order[] = [];
}
