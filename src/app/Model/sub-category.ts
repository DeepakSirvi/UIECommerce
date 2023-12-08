import { Category } from "./category";
import { Product } from "./product";

export class SubCategory {
    id: number = 0;
    subCategory: string = '';
    category: Category = new Category();
    product: Product[] = [];
}
