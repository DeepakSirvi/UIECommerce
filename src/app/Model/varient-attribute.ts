import { VarientCategory } from "./varient-category";
import { VarientCategoryJoin } from "./varient-category-join";

export class VarientAttribute {
  id: number = 0;
  attributeName: string = '';
  varientCategory: VarientCategory = new VarientCategory();
  categoryJoins: VarientCategoryJoin[] = [];
}
