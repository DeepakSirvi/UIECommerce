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
import { NavbartopComponent } from './User/Component/navbartop/navbartop.component';
import { NavbarmiddleComponent } from './User/Component/navbarmiddle/navbarmiddle.component';
import { NavbarbottomComponent } from './User/Component/navbarbottom/navbarbottom.component';
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
import { NavbarComponent } from './Admin/Component/navbar/navbar.component';



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
    NavbartopComponent,
    NavbarmiddleComponent,
    NavbarbottomComponent,
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
    OrderlistComponent,
    ResetPasswordComponent,LoginComponent, AdminhomeComponent, DashbordComponent, ProductComponent, OderdetailComponent, SellerProfileComponent, SellercardsComponent, SellerlistComponent, Addproductlist1Component, Addproductlist2Component, Addproducrtlist3Component, Addproducrtlist4Component, Transacation1Component, Transacation2Component, ReviewesComponent, BrandsComponent, Productsgrid2Component, ProductslistComponent, CategoriesComponent, Settingsample1Component, Settingsample2Component, NavbarComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
