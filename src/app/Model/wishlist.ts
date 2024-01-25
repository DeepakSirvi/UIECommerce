import { User } from "./user";
import { Varient } from "./varient";

export class Wishlist {
    id!:number;
    varient:Varient=new Varient();
    user:User=new User();
}
