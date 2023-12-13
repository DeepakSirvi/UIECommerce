import { CategoryRequest } from "../RequestPayload/category-request";

export class AppRoutes{
  

  static baseUrl:string="http://localhost:9999/ecommerce";

   public static  GET_OTP:string = this.baseUrl + "/auth/" ;
   public static  CUSTOMER_SIGNUP:string = this.baseUrl + "/auth/signup" ;
   public static  USER_LOGIN:string = this.baseUrl + "/auth/login" ;
   public static ADD_CATEGORY:string = this.baseUrl + "/category/admin";
   public static ADD_PRODUCT:string = this.baseUrl + "/product/admin";
   public static ADD_VARIENT:string = this.baseUrl + "/varient/admin"
}