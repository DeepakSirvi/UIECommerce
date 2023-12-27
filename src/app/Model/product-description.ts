import { MapProductDescription } from "./map-product-description";
import { Product } from "./product";

export class ProductDescription {
    id: string = '';
    description: string = '';
    // mapProductDescriptions: MapProductDescription[] = [];
    product: Product = new Product();
}
