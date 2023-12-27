import { SubCategoryRequest } from "./sub-category-request";

export class CategoryRequest {
    id!: string
    categoryName: string = '';
    subCategory: SubCategoryRequest[] = [];
}
