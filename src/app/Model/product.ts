import { ProductDescription } from "./product-description";
import { SubCategory } from "./sub-category";

export class Product {
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
    subCategory: SubCategory = new SubCategory();
    description: ProductDescription = new ProductDescription()
}
