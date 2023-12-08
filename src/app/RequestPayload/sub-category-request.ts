import { CategoryRequest } from "./category-request";

export class SubCategoryRequest {

    id: number = 0;
  subCategory: string = '';
  category: CategoryRequest = new CategoryRequest();
}
