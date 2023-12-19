import { VarientAttributeRequest } from "./varient-attribute-request";


export class VarientCategoryRequest {
    id!:number;
    name:string='';
    categoryAttributes:VarientAttributeRequest[]=[];
}
