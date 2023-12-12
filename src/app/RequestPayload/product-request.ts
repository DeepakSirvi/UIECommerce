import { ProductDescriptionRequest } from "./product-description-request";
import { SubCategoryRequest } from "./sub-category-request";

export class ProductRequest {
    id: number = 0;
    productName: string = '';
    listingStatus: boolean = false;
    brand: string = '';
    fullfillmentBy: string = '';
    shippingProvider: string = '';
    deliveryCharge: number = 0;
    productWeight: number = 0;
    productLength: number = 0;
    productWidth: number = 0;
    productHeight: number = 0;
    taxCode: string = '';
    countryOfOrigin: string = '';
    productType: string = '';
    subCategory: SubCategoryRequest = new SubCategoryRequest();
    description: ProductDescriptionRequest = new ProductDescriptionRequest()
}
