import { ProductRequest } from "../RequestPayload/product-request";
import { Product } from "./product";

export class Varient {
    id: number=0;
    varientName: string='';
    price: number=0;
    stock: number=0;
    product: Product=new Product();
    // status: Status;
    // categoryJoins: VarientCategoryJoinRequest[];
}
