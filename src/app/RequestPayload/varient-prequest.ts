import { ProductRequest } from "./product-request";

export class VarientPRequest {
    id: number=0;
    varientName: string='';
    price: number=0;
    stock: number=0;
    product: ProductRequest=new ProductRequest();
    // status: Status;
    // categoryJoins: VarientCategoryJoinRequest[];
}
