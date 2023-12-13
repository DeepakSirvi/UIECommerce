import { VarientSubCategoryRequest } from "./varient-attribute-request";

export class VarientRequest {
    id:number=0;
    name:string='';
    categoryAttributes:VarientSubCategoryRequest[]=[];
}
