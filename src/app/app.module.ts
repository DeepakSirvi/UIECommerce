import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashBoardComponent } from './Components/User/user-dash-board/user-dash-board.component';
import { ContactUsComponent } from './Components/User/contact-us/contact-us.component';
import { ShopCartComponent } from './Components/User/shop-cart/shop-cart.component';
import { WishlistComponent } from './Components/User/wishlist/wishlist.component';
import { TermsAndConditionComponent } from './Components/User/terms-and-condition/terms-and-condition.component';
import { PageNotFoundComponent } from './Components/Shared/page-not-found/page-not-found.component';
import { AboutComponent } from './Components/User/about/about.component';
import { SidebarComponent } from './Components/Admin/sidebar/sidebar.component';
import { FooterComponent } from './Components/User/footer/footer.component';
import { AccountComponent } from './Shared/Component/account/account.component';
import { ShopCheckoutComponent } from './Components/User/shop-checkout/shop-checkout.component';
import { FilterComponent } from './User/filter/filter.component';

import { ByVendorsComponent } from './User/filter/by-vendors/by-vendors.component';
import { ByTagsComponent } from './User/filter/by-tags/by-tags.component';
import { ByPriceComponent } from './User/filter/by-price/by-price.component';
import { RegisterComponent } from './Components/User/register/register.component';
import { ForgotPasswordComponent } from './Components/User/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/User/reset-password/reset-password.component';
import { LoginComponent } from './Components/User/login/login.component';
import { PurchaseGuideComponent } from './Components/User/purchase-guide/purchase-guide.component';
import { PrivacyPolicyComponent } from './Components/User/privacy-policy/privacy-policy.component';
import { TermsofServiceComponent } from './Components/User/termsof-service/termsof-service.component';
import { BlogCatrgoryGridComponent } from './User/Blog/blog-catrgory-grid/blog-catrgory-grid.component';
import { NoSidebarComponent } from './User/Blog/no-sidebar/no-sidebar.component';
import { VendorDashboardComponent } from './Components/Vendor/vendor-dashboard/vendor-dashboard.component';
import { VendorDetails1Component } from './Components/Vendor/vendor-details1/vendor-details1.component';
import { VendorGuideComponent } from './Components/Vendor/vendor-guide/vendor-guide.component';
import { VendorsGridComponent } from './Components/Vendor/vendors-grid/vendors-grid.component';
import { VendorsListComponent } from './Components/Vendor/vendors-list/vendors-list.component';
import { ShopGridRightComponent } from './User/Shop/shop-grid-right/shop-grid-right.component';
import { ShopGridLeftComponent } from './User/Shop/shop-grid-left/shop-grid-left.component';
import { ShopListRightComponent } from './User/Shop/shop-list-right/shop-list-right.component';
import { ShopListLeftComponent } from './User/Shop/shop-list-left/shop-list-left.component';
import { ShopFullwidthComponent } from './User/Shop/shop-fullwidth/shop-fullwidth.component';
import { ShopProductFullComponent } from './User/Shop/shop-product-full/shop-product-full.component';
import { ShopProductVendorComponent } from './User/Shop/shop-product-vendor/shop-product-vendor.component';
import { NavbarComponent } from './Components/User/navbar/navbar.component';
import { ProductCategariesComponent } from './Components/User/product-categaries/product-categaries.component';
import { HomeComponent } from './Components/User/home/home.component';
import { AdminhomeComponent } from './Components/Admin/adminhome/adminhome.component';
import { DashbordComponent } from './Components/Admin/dashbord/dashbord.component';
import { ProductComponent } from './Components/Admin/product grid/product.component';
import { OderdetailComponent } from './Components/Admin/oderdetails/oderdetail.component';
import { SellerProfileComponent } from './Components/Admin/seller-profile/seller-profile.component';
import { SellercardsComponent } from './Components/Admin/sellercards/sellercards.component';
import { SellerlistComponent } from './Components/Admin/sellerlist/sellerlist.component';
import { Addproductlist1Component } from './Components/Admin/addproductlist1/addproductlist1.component';
import { Addproductlist2Component } from './Components/Admin/addproductlist2/addproductlist2.component';
import { Addproducrtlist3Component } from './Components/Admin/addproducrtlist3/addproducrtlist3.component';
import { Addproducrtlist4Component } from './Components/Admin/addproducrtlist4/addproducrtlist4.component';
import { Transacation1Component } from './Components/Admin/transacation1/transacation1.component';
import { Transacation2Component } from './Components/Admin/transacation2/transacation2.component';
import { ReviewesComponent } from './Components/Admin/reviewes/reviewes.component';
import { BrandsComponent } from './Components/Admin/brands/brands.component';

import { ProductslistComponent } from './Components/Admin/productslist/productslist.component';
import { CategoriesComponent } from './Components/Admin/categories/categories.component';
import { Settingsample1Component } from './Components/Admin/settingsample1/settingsample1.component';
import { Settingsample2Component } from './Components/Admin/settingsample2/settingsample2.component';
import { OrderlistComponent } from './Components/Admin/orderlist/orderlist.component';
import { CategoryComponent } from './User/category/category.component';
import { FilterProductComponent } from './User/filter-product/filter-product.component';
import { LoginOTPVerificationComponent } from './Components/User/login-otp-verification/login-otp-verification.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SwitchpanelComponent } from './Components/Shared/switchpanel/switchpanel.component';
// import {MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarAdminComponent } from './Components/Admin/navbar-admin/navbar-admin.component';
import { ReactiveFormsModule } from  '@angular/forms';
import { Productsgrid2Component } from './Components/Admin/productsgrid2/productsgrid2.component';
import { AddCategoryComponent } from './Components/Admin/add-category/add-category.component';







@NgModule({
  declarations: [
    AppComponent,
    UserDashBoardComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    ShopCartComponent,
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
       Productsgrid2Component,
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
    
            ProductslistComponent,
             CategoriesComponent,
              Settingsample1Component,
               Settingsample2Component, 
               NavbarComponent, 
               CategoryComponent, 
               FilterProductComponent, 
               LoginOTPVerificationComponent, 
               SwitchpanelComponent, NavbarAdminComponent, AddCategoryComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,BrowserAnimationsModule,ReactiveFormsModule,
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
