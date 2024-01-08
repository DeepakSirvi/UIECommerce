import { CategoryRequest } from "../RequestPayload/category-request";

export class AppRoutes{
  
  // base url
  static baseUrl:string="http://192.168.1.61:9999/ecommerce";
  
  // Image url
  static imageUrl:string = this.baseUrl+"/image/" 

  // Login and registration url
   public static  GET_OTP:string = this.baseUrl + "/auth/" ;
   public static  CUSTOMER_SIGNUP:string = this.baseUrl + "/auth/signup" ;
   public static  USER_LOGIN:string = this.baseUrl + "/auth/login" ;

  //  category and subcategory url
   public static ADD_CATEGORY:string = this.baseUrl + "/category/admin";
   public static ADD_SUBCATEGORY:string = this.baseUrl + "/category/admin/subcategory";
   public static GETALL_CATEGORY :string = this.baseUrl + "/category/permitAll";
   public static CATEGORY_LIST:string = this.baseUrl + "/category/admin"; // with pagination

  //  Prodcut url
   public static ADD_PRODUCT:string = this.baseUrl + "/product/admin";

   public static GET_PRODUCT:string = this.baseUrl + "/product/permitAll";
   public static GET_ALL_PRODUCT: string=this.baseUrl+"/product/admin";

   public static UPDATELISTINGSTATUS:string = this.baseUrl+"/product/admin";

  //  varient category and attribute url
   public static ADD_VARIENT:string = this.baseUrl + "/varientCategory/admin";
   public static ADD_SUBVARIENT:string = this.baseUrl + "/varientCategory/admin/varientAttribute"
   public static VARIENT_LIST:string = this.baseUrl + "/varientCategory/admin/pagination";
  
  
   //  varient url
  public static Add_PRODUCT_VARIENT:string=this.baseUrl +"/productVarient";
  public static GET_ONE_ACTIVE_VARIENT:string = this.baseUrl+"/productVarient/permitAll/varientByProduct";
  public static GET_VAREINT_BY_JOIN:string = this.baseUrl+"/productVarient/permitAll/catJoin";

  //  Notification Url
  public static ADD_NOTIFICATION: string=this.baseUrl+"/notification/admin";


}
