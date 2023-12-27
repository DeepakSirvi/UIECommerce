import { ProductDescriptionRequest } from "./product-description-request";
import { SubCategoryRequest } from "./sub-category-request";

export class ProductRequest {
    id!: string ;
    productName: string = '';
    listingStatus!: boolean;
    brand: string = '';
    fullfillmentBy: string = '';
    shippingProvider: string = '';
    deliveryCharge: string='';
    productWeight: string='';
    productLength: string='';
    productWidth: string='';
    productHeight: string='';
    basicPrice!: number;
    taxCode: string = '';
    countryOfOrigin: string = '';
    productType: string = '';
    subCategory: SubCategoryRequest=new SubCategoryRequest();
    description: ProductDescriptionRequest=new ProductDescriptionRequest()
}

