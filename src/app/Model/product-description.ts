import { MapProductDescription } from "./map-product-description";
import { Product } from "./product";

export class ProductDescription {
    id: number = 0;
    description: string = '';
    mapProductDescriptions: MapProductDescription[] = [];
    product: Product = new Product();
}
