import { ProductDescriptionRequest } from "./product-description-request";
import { SubCategoryRequest } from "./sub-category-request";

export class ProductRequest {

    id: number = 0;
    productName: string = '';
    listingStatus: boolean = false;
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
    subCategory: SubCategoryRequest = new SubCategoryRequest();
    description: ProductDescriptionRequest = new ProductDescriptionRequest()
}

