import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Shared/Pages/page-not-found/page-not-found.component';
import { AboutComponent } from './User/Pages/about/about.component';
import { ContactUsComponent } from './User/Pages/contact-us/contact-us.component';
import { TermsAndConditionComponent } from './User/Pages/terms-and-condition/terms-and-condition.component';
import { WishlistComponent } from './User/Pages/wishlist/wishlist.component';
import { ShopCartComponent } from './User/Pages/shop-cart/shop-cart.component';
import { AccountComponent } from './Shared/Component/account/account.component';
import { ShopCheckoutComponent } from './User/Pages/shop-checkout/shop-checkout.component';
import { FilterComponent } from './User/filter/filter.component';
import { RegisterComponent } from './User/Pages/register/register.component';
import { ForgotPasswordComponent } from './User/Pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './User/Pages/reset-password/reset-password.component';
import { LoginComponent } from './User/Pages/login/login.component';


const routes: Routes = [
  {
    path:"user",
    children:[
      {
        path:"about",
        component:AboutComponent
      },
      
      {
        path:"contactUs",
        component:ContactUsComponent
      },
      {
        path:'termsAndCondition',
        component:TermsAndConditionComponent
      },
      {
        path:"wishlist",
        component:WishlistComponent
      },
      {
        path:"cart",
        component:ShopCartComponent
       },
       {
        path:"shopcheckout",
        component:ShopCheckoutComponent

       },
      {
        path:"account",
        component:AccountComponent
      },
      {
        path:"filter",
        component:FilterComponent
      }, 
      {
        path:"login",
        component:LoginComponent
    
       },
       {
         path:"register",
         component:RegisterComponent
       },
       {
        path:"forgotpassword",
        component:ForgotPasswordComponent
       },

       {
        path:"reset-password",
        component:ResetPasswordComponent
       }
        

    ]
  },
  {
    path:"**",
    component:PageNotFoundComponent
  } , 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
