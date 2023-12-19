import { User } from "./user";

export class Notification {
    id!:number;
    title:string='';
    description:string='';
    user:User = new User();
}
