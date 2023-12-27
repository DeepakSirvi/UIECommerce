import { User } from "./user";

export class Notification {
    id!:string;
    title:string='';
    description:string='';
    user:User = new User();
}
