import { SubCategoryRequest } from "./sub-category-request";

export class CategoryRequest {
    id: number = 0;
    categoryName: string = '';
    subCategory: SubCategoryRequest[] = [];
}
