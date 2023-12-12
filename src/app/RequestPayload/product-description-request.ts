import { MapProductDescriptionRequest } from "./map-product-description-request";
import { ProductRequest } from "./product-request";

export class ProductDescriptionRequest {
    id: number = 0;
  description: string = '';
  product: ProductRequest = new ProductRequest();
  mapProductDescriptions: MapProductDescriptionRequest[] = [];
}
