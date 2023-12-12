import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Components/Shared/page-not-found/page-not-found.component';
import { AboutComponent } from './Components/User/about/about.component';
import { ContactUsComponent } from './Components/User/contact-us/contact-us.component';
import { TermsAndConditionComponent } from './Components/User/terms-and-condition/terms-and-condition.component';
import { WishlistComponent } from './Components/User/wishlist/wishlist.component';
import { ShopCartComponent } from './Components/User/shop-cart/shop-cart.component';
import { AccountComponent } from './Shared/Component/account/account.component';
import { ShopCheckoutComponent } from './Components/User/shop-checkout/shop-checkout.component';
import { FilterComponent } from './User/filter/filter.component';
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
import { ProductCategariesComponent } from './Components/User/product-categaries/product-categaries.component';
import { HomeComponent } from './Components/User/home/home.component';
import { AdminhomeComponent } from './Components/Admin/adminhome/adminhome.component';
import { DashbordComponent } from './Components/Admin/dashbord/dashbord.component';
import { ProductComponent } from './Components/Admin/product grid/product.component';
import { OderdetailComponent } from './Components/Admin/oderdetails/oderdetail.component';
import { OrderlistComponent } from './Components/Admin/orderlist/orderlist.component';
import { SellerProfileComponent } from './Components/Admin/seller-profile/seller-profile.component';
import { SellercardsComponent } from './Components/Admin/sellercards/sellercards.component';
import { SellerlistComponent } from './Components/Admin/sellerlist/sellerlist.component';
import { Transacation2Component } from './Components/Admin/transacation2/transacation2.component';
import { ReviewesComponent } from './Components/Admin/reviewes/reviewes.component';
import { BrandsComponent } from './Components/Admin/brands/brands.component';
import { ProductslistComponent } from './Components/Admin/productslist/productslist.component';
import { CategoriesComponent } from './Components/Admin/categories/categories.component';
import { Settingsample1Component } from './Components/Admin/settingsample1/settingsample1.component';
import { Settingsample2Component } from './Components/Admin/settingsample2/settingsample2.component'
import { UserDashBoardComponent } from './Components/User/user-dash-board/user-dash-board.component';



import { CategoryComponent } from './User/category/category.component';
import { LoginOTPVerificationComponent } from './Components/User/login-otp-verification/login-otp-verification.component';
import { SwitchpanelComponent } from './Components/Shared/switchpanel/switchpanel.component';
import { Productsgrid2Component } from './Components/Admin/productsgrid2/productsgrid2.component';
import { AddCategoryComponent } from './Components/Admin/add-category/add-category.component';
import { adminGuard } from './Util/Guard/admin.guard';
import { customerGuard } from './Util/Guard/customer.guard';
import { vendorGuard } from './Util/Guard/vendor.guard';
import { Transacation1Component } from './Components/Admin/transacation1/transacation1.component';




const routes: Routes = [

  {
    path: "",
    component: UserDashBoardComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "login",
       component: LoginComponent
      }, 
      {
        path: "loginotp",
        component: LoginOTPVerificationComponent

      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "contactUs",
        component: ContactUsComponent
      },
      {
        path: 'termsAndCondition',
        component: TermsAndConditionComponent
      },
      {
        path: "wishlist",
        component: WishlistComponent
      },
      {
        path: "cart",
        component: ShopCartComponent
      },
      {
        path: "privacypolicy",
        component: PrivacyPolicyComponent
      },
      {
        path: "purchaseguide",
        component: PurchaseGuideComponent

      },
      {
        path: "product-categaries",
        component: ProductCategariesComponent
      },
    ]
  },
  {
    path:"switchpanel",
    component: SwitchpanelComponent

  },
  {
    path: "admin",
    component: AdminhomeComponent,
    canActivate:[adminGuard],
    children: [
      {
        path: 'addCategory',
        component:AddCategoryComponent
      },
      {
        path: "",
        component: DashbordComponent
      },
      {
        path: "product",
        component: ProductComponent
      },
      {
        path: "orderdetail",
        component: OderdetailComponent
      }, {
        path: "orderlist",
        component: OrderlistComponent,
      
      },
      {
        path: "sellerprofile",
        component: SellerProfileComponent,
      
      },
      {
        path: "sellercard",
        component: SellercardsComponent,
      
      },
      {
        path: "sellerlist",
        component: SellerlistComponent,
      
      },
       {
        path: "transaction1",
        component: Transacation1Component,
      
      },
      {
        path: "transaction2",
        component: Transacation2Component,
      
      },
      {
        path: "reviewes",
        component: ReviewesComponent,
      
      },
      {
        path: "brands",
        component: BrandsComponent,
      
      },
      {
        path: "productsgrid",
        component: ProductComponent,
      
      },
      {
        path: "productsgurid2",
        component: Productsgrid2Component,
      
      },
      {
        path: "productslist",
        component: ProductslistComponent,
      
      },
      {
        path: "categories",
        component: CategoriesComponent,
      
      },
      {
        path: "settingsample1",
        component: Settingsample1Component,
      
      },
      {
        path: "settingsample2",
        component: Settingsample2Component,
      
      }
    ]
  },
 
  {
    path: "customer",
    component: UserDashBoardComponent,
    canActivate:[customerGuard],

    children: [
     
      
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "home",
        component: HomeComponent,
      },
      
  
      {
        path: "shopcheckout",
        component: ShopCheckoutComponent

      },
      {
        path: "account",
        component: AccountComponent
      },
      {
        path: "filter",
        component: FilterComponent
      },
      {
        path:"filter-product",
        component:FilterComponent
      },
      {
         path:"category",
         component:CategoryComponent

      },
      {
        path: "forgotpassword",
        component: ForgotPasswordComponent
      },
     
     
      {
        path: "product-categaries",
        component: ProductCategariesComponent
      },
      {
        path: "resetpassword",
        component: ResetPasswordComponent
      },
      {
        path: "termsofService",
        component: TermsofServiceComponent
      },

      {
        path: "blog-catrgory-grid",
        component: BlogCatrgoryGridComponent,


      },


      {
        path: "no-sidebar",
        component: NoSidebarComponent, 

      },
      {
        path: "vendor-details1",
        component: VendorDetails1Component, 
      },

      {
        path: "vendor-guide",
        component: VendorGuideComponent, 
      },
      {
        path: "vendors-grid",
        component: VendorsGridComponent, 
      },
      {
        path: "vendors-list",
        component: VendorsListComponent, 
      },
      {
        path: "shop-grid-right",
        component: ShopGridRightComponent, 
      },
      {
        path: "shop-grid-left",
        component: ShopGridLeftComponent, 
      },
      {
        path: "shop-list-right",
        component: ShopListRightComponent, 
      },
      {
        path: "shop-list-left",
        component: ShopListLeftComponent, 
      },
      {
        path: "shop-fullwidth",
        component: ShopFullwidthComponent, 
      },
      {
        path: "shop-product-full",
        component: ShopProductFullComponent
      },
      {
        path: "shop-product-vendor",
        component: ShopProductVendorComponent
      },
     
    ]
    
  },

  {
    path:"vendor",
    component: VendorDashboardComponent,
    canActivate:[vendorGuard],

  },
  {
    path: "**",
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
