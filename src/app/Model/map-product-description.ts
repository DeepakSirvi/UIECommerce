import { ProductDescription } from "./product-description";

export class MapProductDescription {
    id: number = 0;
    title: string = '';
    details: Map<string, string> = new Map();
    productDescription: ProductDescription = new ProductDescription();
}
