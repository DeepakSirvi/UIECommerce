import { ProductRequest } from "../RequestPayload/product-request";
import { Product } from "./product";
import { ProductImage } from "./product-image";
import { VarientCategoryJoin } from "./varient-category-join";

export class Varient {
    id: string='';
    varientName: string='';
    price: number=0;
    stock: number=0;
    product: Product=new Product();
    // status: Status;
    categoryJoins: VarientCategoryJoin[]=[];
    productImage:ProductImage[]=[];
}
