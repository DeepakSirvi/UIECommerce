import { ProductDescriptionRequest } from "./product-description-request";
import { SubCategoryRequest } from "./sub-category-request";

export class ProductRequest {

    id!: number ;
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
    taxCode: string = '';
    countryOfOrigin: string = '';
    productType: string = '';
    subCategory!: SubCategoryRequest;
    description!: ProductDescriptionRequest;

  
}

