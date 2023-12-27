import { ProductDescription } from "./product-description";

export class MapProductDescription {
    id: string = '';
    title: string = '';
    details: Map<string, string> = new Map();
    productDescription: ProductDescription = new ProductDescription();
}
