import { SubCategoryRequest } from "./sub-category-request";

export class CategoryRequest {
    id!: number
    categoryName: string = '';
    subCategory: SubCategoryRequest[] = [];
}
