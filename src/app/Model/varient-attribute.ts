import { VarientCategory } from "./varient-category";
import { VarientCategoryJoin } from "./varient-category-join";

export class VarientAttribute {
  id: string = '';
  attributeName: string = '';
  varientCategory: VarientCategory = new VarientCategory();
  categoryJoins: VarientCategoryJoin[] = [];
}
