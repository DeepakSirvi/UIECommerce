import { VarientAttribute } from "../Model/varient-attribute";
import { VarientCategoryJoin } from "../Model/varient-category-join";
import { ProductRequest } from "./product-request";
import { VarientCategoryJoinRequest } from "./varient-category-join-request";

export class VarientPRequest {
    id: string='';
    varientName: string='';
    price: number=0;
    stock: number=0;
    productId:string='';
    categoryJoins: VarientCategoryJoinRequest[]=[];
}
