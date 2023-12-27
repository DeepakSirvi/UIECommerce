import { SubCategory } from "./sub-category";
import { User } from "./user";

export class Category {
  id: string = '';
  categoryName: string = '';
  subCategory: SubCategory[] = [];
  user: User = new User();
}
