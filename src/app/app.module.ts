import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashBoardComponent } from './User/Pages/user-dash-board/user-dash-board.component';
import { ContactUsComponent } from './User/Pages/contact-us/contact-us.component';
import { ShopCartComponent } from './User/Pages/shop-cart/shop-cart.component';
import { WishlistComponent } from './User/Pages/wishlist/wishlist.component';
import { TermsAndConditionComponent } from './User/Pages/terms-and-condition/terms-and-condition.component';
import { PageNotFoundComponent } from './Shared/Pages/page-not-found/page-not-found.component';
import { RegistrationComponent } from './Shared/Pages/registration/registration.component';
import { AboutComponent } from './User/Pages/about/about.component';
import { SidebarComponent } from './Admin/Component/sidebar/sidebar.component';
import { FooterComponent } from './User/Component/footer/footer.component';
import { AccountComponent } from './Shared/Component/account/account.component';
import { ShopCheckoutComponent } from './User/Pages/shop-checkout/shop-checkout.component';
import { FilterComponent } from './User/filter/filter.component';

import { ByVendorsComponent } from './User/filter/by-vendors/by-vendors.component';
import { ByTagsComponent } from './User/filter/by-tags/by-tags.component';
import { ByPriceComponent } from './User/filter/by-price/by-price.component';
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
import { ShopProductFullComponent } from './User/Shop/shop-product-full/shop-product-full.component';
import { ShopProductVendorComponent } from './User/Shop/shop-product-vendor/shop-product-vendor.component';
import { NavbarComponent } from './User/Component/navbar/navbar.component';
import { ProductCategariesComponent } from './User/Pages/product-categaries/product-categaries.component';
import { HomeComponent } from './User/home/home.component';
import { AdminhomeComponent } from './Admin/Component/adminhome/adminhome.component';
import { DashbordComponent } from './Admin/Component/dashbord/dashbord.component';
import { ProductComponent } from './Admin/Component/product grid/product.component';
import { OderdetailComponent } from './Admin/Component/oderdetails/oderdetail.component';
import { SellerProfileComponent } from './Admin/Component/seller-profile/seller-profile.component';
import { SellercardsComponent } from './Admin/Component/sellercards/sellercards.component';
import { SellerlistComponent } from './Admin/Component/sellerlist/sellerlist.component';
import { Addproductlist1Component } from './Admin/Component/addproductlist1/addproductlist1.component';
import { Addproductlist2Component } from './Admin/Component/addproductlist2/addproductlist2.component';
import { Addproducrtlist3Component } from './Admin/Component/addproducrtlist3/addproducrtlist3.component';
import { Addproducrtlist4Component } from './Admin/Component/addproducrtlist4/addproducrtlist4.component';
import { Transacation1Component } from './Admin/Component/transacation1/transacation1.component';
import { Transacation2Component } from './Admin/Component/transacation2/transacation2.component';
import { ReviewesComponent } from './Admin/Component/reviewes/reviewes.component';
import { BrandsComponent } from './Admin/Component/brands/brands.component';
import { Productsgrid2Component } from './Admin/Component/productsgrid2/productsgrid2.component';
import { ProductslistComponent } from './Admin/Component/productslist/productslist.component';
import { CategoriesComponent } from './Admin/Component/categories/categories.component';
import { Settingsample1Component } from './Admin/Component/settingsample1/settingsample1.component';
import { Settingsample2Component } from './Admin/Component/settingsample2/settingsample2.component';
import { OrderlistComponent } from './Admin/Component/orderlist/orderlist.component';
import { CategoryComponent } from './User/category/category.component';
import { FilterProductComponent } from './User/filter-product/filter-product.component';
import { LoginOTPVerificationComponent } from './User/Pages/login-otp-verification/login-otp-verification.component';





@NgModule({
  declarations: [
    AppComponent,
    UserDashBoardComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    ShopCartComponent,
    RegistrationComponent,
    WishlistComponent,
    TermsAndConditionComponent,
    AboutComponent,
    SidebarComponent,
    FooterComponent,
    AccountComponent,
    ShopCheckoutComponent,
    FilterComponent,
    ByVendorsComponent,
    ByTagsComponent,
    ByPriceComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    LoginComponent,
    PurchaseGuideComponent,
    PrivacyPolicyComponent, 
    TermsofServiceComponent, 
    ByVendorsComponent,  
    BlogCatrgoryGridComponent,   
    NoSidebarComponent,
        VendorDashboardComponent,
        VendorDetails1Component,
        VendorGuideComponent,
        VendorsGridComponent,
        VendorsListComponent,
        ShopGridRightComponent,
        ShopGridLeftComponent,
        ShopListRightComponent,
        ShopListLeftComponent,
        ShopFullwidthComponent,
        ShopProductFullComponent,
        ShopProductVendorComponent,
        NavbarComponent,
        ProductCategariesComponent,
        HomeComponent,
       
    OrderlistComponent,
    ResetPasswordComponent,
    LoginComponent,
     AdminhomeComponent, 
     DashbordComponent,
      ProductComponent, 
      OderdetailComponent, 
      SellerProfileComponent, 
      SellercardsComponent, 
      SellerlistComponent,
       Addproductlist1Component, 
       Addproductlist2Component,
        Addproducrtlist3Component, 
        Addproducrtlist4Component, 
        Transacation1Component,
         Transacation2Component,
          ReviewesComponent,
           BrandsComponent, 
           Productsgrid2Component,
            ProductslistComponent,
             CategoriesComponent,
              Settingsample1Component,
               Settingsample2Component, 
               NavbarComponent, 
               CategoryComponent, 
               FilterProductComponent, 
               LoginOTPVerificationComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
