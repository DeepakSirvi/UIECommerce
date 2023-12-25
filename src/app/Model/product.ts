import { Audit } from "./audit";
import { ProductDescription } from "./product-description";
import { ProductImage } from "./product-image";
import { SubCategory } from "./sub-category";

export class Product extends Audit {
            id: number = 0;
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
    description: ProductDescription = new ProductDescription()
    productImage:ProductImage=new ProductImage();
	
	 basicPrice!:number;
}
