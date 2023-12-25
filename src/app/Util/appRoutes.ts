import { CategoryRequest } from "../RequestPayload/category-request";

export class AppRoutes{
  


  static baseUrl:string="http://192.168.1.14:9999/ecommerce";

   public static  GET_OTP:string = this.baseUrl + "/auth/" ;
   public static  CUSTOMER_SIGNUP:string = this.baseUrl + "/auth/signup" ;
   public static  USER_LOGIN:string = this.baseUrl + "/auth/login" ;
   public static ADD_CATEGORY:string = this.baseUrl + "/category/admin";
   public static GETALL_CATEGORY :string = this.baseUrl + "/category";
   public static ADD_SUBCATEGORY:string = this.baseUrl + "/category/admin/subcategory";
   public static CATEGORY_LIST:string = this.baseUrl + "/category/admin/pages";
   public static ADD_PRODUCT:string = this.baseUrl + "/product/admin";
   public static GET_PRODUCT:string = this.baseUrl + "/product/";
   public static ADD_VARIENT:string = this.baseUrl + "/varient/admin";
   public static VARIENT_LIST:string = this.baseUrl + "/varient/admin/page";
   public static Add_PRODUCT_VARIENT:string=this.baseUrl +"/productVarient/";
   public static GET_ALL_PRODUCT: string=this.baseUrl+"/product/";
   public static ADD_NOTIFICATION: string=this.baseUrl+"/notification/admin";
}
