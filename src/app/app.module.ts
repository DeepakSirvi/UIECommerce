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
    ResetPasswordComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
