import { User } from "./user";
import { VarientAttribute } from "./varient-attribute";

export class VarientCategory {
    id: string = '';
    name: string = '';
    categoryAttributes: VarientAttribute[] = [];
    user: User = new User();
}
