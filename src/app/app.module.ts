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
import { ByCategariesComponent } from './User/filter/by-categaries/by-categaries.component';
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
import { ShopProductRightComponent } from './User/Shop/shop-product-right/shop-product-right.component';
import { ShopProductLeftComponent } from './User/Shop/shop-product-left/shop-product-left.component';
import { ShopProductFullComponent } from './User/Shop/shop-product-full/shop-product-full.component';
import { ShopProductVendorComponent } from './User/Shop/shop-product-vendor/shop-product-vendor.component';
import { NavbarComponent } from './User/Component/navbar/navbar.component';
import { ProductCategariesComponent } from './User/Pages/product-categaries/product-categaries.component';
import { HomeComponent } from './User/home/home.component';



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
    ByCategariesComponent,
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
        ShopProductRightComponent,
        ShopProductLeftComponent,
        ShopProductFullComponent,
        ShopProductVendorComponent,
        NavbarComponent,
        ProductCategariesComponent,
        HomeComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
