import { User } from "./user";
import { Varient } from "./varient";

export class SaveForLater {
    id!:string;
    varient:Varient=new Varient();
    user:User=new User();
}
