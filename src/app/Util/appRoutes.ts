import { CategoryRequest } from "../RequestPayload/category-request";

export class AppRoutes{
  
  // base url
  static baseUrl:string="http://localhost:9999/ecommerce";

  
  // Image url
  static imageUrl:string = this.baseUrl+"/image/" 

  // Login and registration url
   public static  GET_OTP:string = this.baseUrl + "/auth/" ;
   public static  CUSTOMER_SIGNUP:string = this.baseUrl + "/auth/signup" ;
   public static  USER_LOGIN:string = this.baseUrl + "/auth/login" ;
   public static GET_USER:string = this.baseUrl + "/user/";
   public static UPDATE_USER:string = this.baseUrl + "/user";
   public static  GETUSER_ADDRESS:string =this.baseUrl+"/address/GetAddressByUserId/"
   public static  ADD_ADDRESS:string =this.baseUrl+"/address/create"
   public static  GETBYID_ADDRESS:string =this.baseUrl+"/address/"
   public static  DELETE_ADDRESS:string =this.baseUrl+"/address/"

   public static  UPDATE_ADDRESS:string =this.baseUrl+"/address/update/"

  //  category and subcategory url
   public static ADD_CATEGORY:string = this.baseUrl + "/category/admin";
   public static ADD_SUBCATEGORY:string = this.baseUrl + "/category/admin/subcategory";
   public static GETALL_CATEGORY :string = this.baseUrl + "/category/permitAll";
   public static GET_SINGLE_CATEGORY:string = this.baseUrl + "/category/admin";
   public static CATEGORY_LIST:string = this.baseUrl + "/category/admin"; // with pagination
   public static UPDATE_CATEGORY_BY_ID:string = this.baseUrl +"/category/admin"

  //  Prodcut url
   public static ADD_PRODUCT:string = this.baseUrl + "/product/admin";

   public static GET_PRODUCT:string = this.baseUrl + "/product/permitAll";
   public static GET_ALL_PRODUCT: string=this.baseUrl+"/product/admin";

   public static UPDATELISTINGSTATUS:string = this.baseUrl+"/product/admin";
   public static UPDATESTATUS:string = this.baseUrl+"/product/admin/status";
   
  //  varient category and attribute url
   public static ADD_VARIENT:string = this.baseUrl + "/varientCategory/admin";
   public static ADD_SUBVARIENT:string = this.baseUrl + "/varientCategory/admin/varientAttribute"
   public static VARIENT_LIST:string = this.baseUrl + "/varientCategory/admin/pagination";
  
  
   //  varient url
  public static Add_PRODUCT_VARIENT:string=this.baseUrl +"/productVarient";
  public static GET_ONE_ACTIVE_VARIENT:string = this.baseUrl+"/productVarient/permitAll/varientByProduct";
  public static GET_VAREINT_BY_JOIN:string = this.baseUrl+"/productVarient/permitAll/catJoin";
  public static GET_VARIENT_BY_ID:string = this.baseUrl+"/varientCategory/admin"
  public static UPDATESTATUSVARIENT:string = this.baseUrl+"/productVarient/admin/status";

  //  Notification Url
  public static ADD_NOTIFICATION: string=this.baseUrl+"/notification/admin";

  // Add To cart & wishlist
  public static ADD_CART:string = this.baseUrl+"/cart/addTocart";
  public static GET_CART:string = this.baseUrl+"/cart";
  public static CART_WISH_COUNT:string = this.baseUrl+"/cart/customer/navbarCount";
  public static ADD_WISHLIST:string = this.baseUrl+"/wishList/add";
  public static CHECK_IN_WISHLIST:string = this.baseUrl+"/wishList";
  public static DELETE_WISHLIST:string = this.baseUrl+"/wishList/dislike";

  // Save For late
  public static ADD_SAVE_FOR_LATER:string = this.baseUrl+"/productsaveforlater/create";
  public static GET_SAVE_FOR_LATER:string = this.baseUrl+"/productsaveforlater/allSaveForLaterUserId";
  public static Delete_SAVE_FOR_LATER:string = this.baseUrl+"/productsaveforlater/delete";



}
