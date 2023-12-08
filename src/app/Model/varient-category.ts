import { User } from "./user";
import { VarientAttribute } from "./varient-attribute";

export class VarientCategory {
    id: number = 0;
    name: string = '';
    categoryAttributes: VarientAttribute[] = [];
    user: User = new User();
}
