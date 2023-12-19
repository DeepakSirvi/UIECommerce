import { VarientAttribute } from "../Model/varient-attribute";
import { VarientCategoryJoin } from "../Model/varient-category-join";
import { ProductRequest } from "./product-request";
import { VarientCategoryJoinRequest } from "./varient-category-join-request";

export class VarientPRequest {
    id: number=0;
    varientName: string='';
    price: number=0;
    stock: number=0;
    productId:number=0;
    categoryJoins: VarientCategoryJoinRequest[]=[];
}
