import { VarientAttributeRequest } from "./varient-attribute-request";


export class VarientCategoryRequest {
    id!:string;
    name:string='';
    categoryAttributes:VarientAttributeRequest[]=[];
}
