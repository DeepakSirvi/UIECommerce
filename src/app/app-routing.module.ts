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
import { PurchaseGuideComponent } from './User/Pages/purchase-guide/purchase-guide.component';
import { PrivacyPolicyComponent } from './User/Pages/privacy-policy/privacy-policy.component';
import { TermsofServiceComponent } from './User/Pages/termsof-service/termsof-service.component';
import { BlogCatrgoryGridComponent } from './User/Blog/blog-catrgory-grid/blog-catrgory-grid.component';
import { NoSidebarComponent } from './User/Blog/no-sidebar/no-sidebar.component';
import { VendorDashboardComponent } from './User/Vendors/vendor-dashboard/vendor-dashboard.component';
import { VendorDetails1Component } from './User/Vendors/vendor-details1/vendor-details1.component';
import { VendorGuideComponent } from './User/Vendors/vendor-guide/vendor-guide.component';
import { VendorsGridComponent } from './User/Vendors/vendors-grid/vendors-grid.component';
import { VendorsListComponent } from './User/Vendors/vendors-list/vendors-list.component';
import { ShopGridRightComponent } from './User/Shop/shop-grid-right/shop-grid-right.component';
import { ShopGridLeftComponent } from './User/Shop/shop-grid-left/shop-grid-left.component';
import { ShopListRightComponent } from './User/Shop/shop-list-right/shop-list-right.component';
import { ShopListLeftComponent } from './User/Shop/shop-list-left/shop-list-left.component';
import { ShopFullwidthComponent } from './User/Shop/shop-fullwidth/shop-fullwidth.component';
import { ShopProductRightComponent } from './User/Shop/shop-product-right/shop-product-right.component';
import { ShopProductLeftComponent } from './User/Shop/shop-product-left/shop-product-left.component';
import { ShopProductFullComponent } from './User/Shop/shop-product-full/shop-product-full.component';
import { ShopProductVendorComponent } from './User/Shop/shop-product-vendor/shop-product-vendor.component';
import { ProductCategariesComponent } from './User/Pages/product-categaries/product-categaries.component';




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
         path:"purchaseguide",
         component:PurchaseGuideComponent

       },
       {
        path:"privacypolicy",
        component:PrivacyPolicyComponent

       },
       {
           path:"product-categaries",
           component:ProductCategariesComponent
       },
       {
        path:"resetpassword",
        component:ResetPasswordComponent
       },
       {
        path:"termsofService",
        component:TermsofServiceComponent
       },
       
       {
          path:"blog-catrgory-grid",
          component:BlogCatrgoryGridComponent, pathMatch:'full'

       },
   
{
  path:"no-sidebar",
    component:NoSidebarComponent, pathMatch:'full'

},
    {
      path:"vendor-dashboard",
      component:VendorDashboardComponent, pathMatch:'full'
    },
    {
      path:"vendor-details1",
      component:VendorDetails1Component, pathMatch:'full'
    },
    
    {
      path:"vendor-guide",
      component:VendorGuideComponent, pathMatch:'full'
    },
    {
      path:"vendors-grid",
      component:VendorsGridComponent, pathMatch:'full'
    },
    {
      path:"vendors-list",
      component:VendorsListComponent, pathMatch:'full'
    },
     {
      path:"shop-grid-right",
      component:ShopGridRightComponent, pathMatch:'full'
     },
     {
      path:"shop-grid-left",
      component:ShopGridLeftComponent, pathMatch:'full'
     },
     {
      path:"shop-list-right",
      component:ShopListRightComponent, pathMatch:'full'
     },
     {
      path:"shop-list-left",
      component:ShopListLeftComponent, pathMatch:'full'
     },
     {
      path:"shop-fullwidth",
      component:ShopFullwidthComponent, pathMatch:'full'
     },
     {
      path:"shop-product-right",
      component:ShopProductRightComponent
     },
     {
       path:"shop-product-left",
       component:ShopProductLeftComponent
     },
     {
      path:"shop-product-full",
      component:ShopProductFullComponent
    },
    {
      path:"shop-product-vendor",
      component:ShopProductVendorComponent
    },
    
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
