export class AppRoutes{

  static baseUrl:string="http://localhost:9999/ecommerce";

   public static  GET_OTP:string = this.baseUrl + "/auth/" ;
   public static  CUSTOMER_SIGNUP:string = this.baseUrl + "/auth/signup" ;
   public static  USER_LOGIN:string = this.baseUrl + "/auth/login" ;
    
}