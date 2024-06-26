import { Audit } from "./audit";
import { ProductDescription } from "./product-description";
import { ProductImage } from "./product-image";
import { SubCategory } from "./sub-category";
import { User } from "./user";
import { Varient } from "./varient";

export class Product extends Audit {
            id: string = '';
    productName: string = '';
    listingStatus: string='';
    verified:string='';
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
    varient:Varient[]= [];
    description: ProductDescription = new ProductDescription()
    productImage:string='';
    basicPrice!:number;
    vendor!:User;
}
