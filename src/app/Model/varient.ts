import { ProductRequest } from "../RequestPayload/product-request";
import { Audit } from "./audit";
import { Product } from "./product";
import { ProductImage } from "./product-image";
import { Status } from "./status";
import { VarientCategoryJoin } from "./varient-category-join";

export class Varient extends Audit {
    id: string='';
    varientName: string='';
    price: number=0;
    stock: number=0;
    product: Product=new Product();
    status!:string;
    categoryJoins: VarientCategoryJoin[]=[];
    productImage:ProductImage[]=[];
}
