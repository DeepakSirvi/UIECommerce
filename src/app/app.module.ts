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
import { ShopCheckoutComponent } from './Components/User/shop-checkout/shop-checkout.component';
import { FilterComponent } from './User/filter/filter.component';

import { ByVendorsComponent } from './User/filter/by-vendors/by-vendors.component';
import { ByTagsComponent } from './User/filter/by-tags/by-tags.component';
import { ByPriceComponent } from './User/filter/by-price/by-price.component';
import { RegisterComponent } from './Components/User/register/register.component';
import { ForgotPasswordComponent } from './Components/User/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/User/reset-password/reset-password.component';
import { LoginComponent } from './Components/Shared/login/login.component';
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
import { OderdetailComponent } from './Components/Admin/oderdetails/oderdetail.component';
import { SellerProfileComponent } from './Components/Admin/seller-profile/seller-profile.component';
import { SellercardsComponent } from './Components/Admin/sellercards/sellercards.component';
import { SellerlistComponent } from './Components/Admin/sellerlist/sellerlist.component';
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
import { LoginOTPVerificationComponent } from './Components/Shared/login-otp-verification/login-otp-verification.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SwitchpanelComponent } from './Components/Shared/switchpanel/switchpanel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarAdminComponent } from './Components/Admin/navbar-admin/navbar-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCategoryComponent } from './Components/Admin/add-category/add-category.component';
import { MyInterceptorInterceptor, authInterceptorProviders } from './Util/my-interceptor.interceptor';
import { CategoryManagementComponent } from './Components/Admin/category-management/category-management.component';
import { AddProductGoutamComponent } from './Components/Admin/add-product-goutam/add-product-goutam.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { AddVarientComponent } from './Components/Admin/add-varient/add-varient.component';
import { VarientManagementComponent } from './Components/Admin/varient-management/varient-management.component';
import { VarientCategoryComponent } from './Components/Admin/varient-category/varient-category.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NotificationComponent } from './Components/Admin/notification/notification.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { AccountComponent } from './Components/Shared/account/account.component';
import { ProductDetailComponent } from './Components/Admin/product-detail/product-detail.component';
import { ProductDisplyComponent } from './Components/User/product-disply/product-disply.component';
import { NewProductComponent } from './Components/User/new-product/new-product.component';
import { AddAddressComponent } from './Components/User/add-address/add-address.component';
import { UpdateAddressComponent } from './Components/User/update-address/update-address.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeVendorComponent } from './Components/Vendor/home-vendor/home-vendor.component';
import { NavbarVendorComponent } from './Components/Vendor/navbar-vendor/navbar-vendor.component';
import { AddBrandComponent } from './Components/Admin/add-brand/add-brand.component';
import{ MatButtonModule} from '@angular/material/button';
import { UpdateBrandComponent } from './Components/Admin/update-brand/update-brand.component';










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
    BrandsComponent,
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

    OderdetailComponent,
    SellerProfileComponent,
    SellercardsComponent,
    SellerlistComponent,

    Transacation1Component,
    Transacation2Component,
    ReviewesComponent,
    ProductslistComponent,
    CategoriesComponent,
    Settingsample1Component,
    Settingsample2Component,
    NavbarComponent,
    CategoryComponent,
    FilterProductComponent,
    LoginOTPVerificationComponent,
    SwitchpanelComponent,
    NavbarAdminComponent,
    AddCategoryComponent,
    CategoryManagementComponent,
    AddProductGoutamComponent,
    AddVarientComponent,
    VarientManagementComponent,
    VarientCategoryComponent, 
    NotificationComponent, ProductDetailComponent, ProductDisplyComponent, NewProductComponent,AddAddressComponent, UpdateAddressComponent, HomeVendorComponent, NavbarVendorComponent, AddBrandComponent,UpdateBrandComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule, FormsModule,
    ReactiveFormsModule, CKEditorModule,
    MatChipsModule, MatIconModule, MatIconModule, MatPaginatorModule,MatSlideToggleModule,MatButtonModule,
    ToastrModule.forRoot({
      maxOpened:1
    })
  ],
  providers: [ authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
