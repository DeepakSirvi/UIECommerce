import { SubCategory } from "./sub-category";
import { User } from "./user";

export class Category {
    id: number = 0;
  categoryName: string = '';
  subCategory: SubCategory[] = [];
  user: User = new User();
}
