import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Components/Shared/page-not-found/page-not-found.component';
import { AboutComponent } from './Components/User/about/about.component';
import { ContactUsComponent } from './Components/User/contact-us/contact-us.component';
import { TermsAndConditionComponent } from './Components/User/terms-and-condition/terms-and-condition.component';
import { WishlistComponent } from './Components/User/wishlist/wishlist.component';
import { ShopCartComponent } from './Components/User/shop-cart/shop-cart.component';
import { ShopCheckoutComponent } from './Components/User/shop-checkout/shop-checkout.component';
import { FilterComponent } from './User/filter/filter.component';
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
import { ProductCategariesComponent } from './Components/User/product-categaries/product-categaries.component';
import { HomeComponent } from './Components/User/home/home.component';
import { AdminhomeComponent } from './Components/Admin/adminhome/adminhome.component';
import { DashbordComponent } from './Components/Admin/dashbord/dashbord.component';
import { OderdetailComponent } from './Components/Admin/oderdetails/oderdetail.component';
import { OrderlistComponent } from './Components/Admin/orderlist/orderlist.component';
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
import { Settingsample2Component } from './Components/Admin/settingsample2/settingsample2.component'
import { UserDashBoardComponent } from './Components/User/user-dash-board/user-dash-board.component';
import { CategoryComponent } from './User/category/category.component';
import { LoginOTPVerificationComponent } from './Components/Shared/login-otp-verification/login-otp-verification.component';
import { SwitchpanelComponent } from './Components/Shared/switchpanel/switchpanel.component';
import { AddCategoryComponent } from './Components/Admin/add-category/add-category.component';
import { adminGuard } from './Util/Guard/admin.guard';
import { customerGuard } from './Util/Guard/customer.guard';
import { vendorGuard } from './Util/Guard/vendor.guard';
import { CategoryManagementComponent } from './Components/Admin/category-management/category-management.component';
import { AddProductGoutamComponent } from './Components/Admin/add-product-goutam/add-product-goutam.component';
import { AddVarientComponent } from './Components/Admin/add-varient/add-varient.component';
import { VarientManagementComponent } from './Components/Admin/varient-management/varient-management.component';
import { VarientCategoryComponent } from './Components/Admin/varient-category/varient-category.component';
import { NotificationComponent } from './Components/Admin/notification/notification.component';
import { AccountComponent } from './Components/Shared/account/account.component';
import { ProductDetailComponent } from './Components/Admin/product-detail/product-detail.component';
import { otpVerifiedGuard } from './Util/Guard/otp-verified.guard';
import { ProductDisplyComponent } from './Components/User/product-disply/product-disply.component';
import { loginGuardGuard } from './Util/Guard/login-guard.guard';
import { AddAddressComponent } from './Components/User/add-address/add-address.component';
import { UpdateAddressComponent } from './Components/User/update-address/update-address.component';

import { HomeVendorComponent } from './Components/Vendor/home-vendor/home-vendor.component';

import { AddBrandComponent } from './Components/Admin/add-brand/add-brand.component';
import { UpdateBrandComponent } from './Components/update-brand/update-brand.component';


const routes: Routes = [

  {
    path: "",
    component: UserDashBoardComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
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
        path: 'notification',
        component: NotificationComponent
      }
      ,
      {
        path: "productDetails/:id",
        component: ProductDetailComponent
      },
      {
        path: 'add-product-goutam',
        component: AddProductGoutamComponent
      },
      {
        path: 'categoryManage',
        component: CategoryManagementComponent
      },
      {
        path: 'addCategory',
        component:AddCategoryComponent
      },
      {
        path: "add-varient/:id",
        component: AddVarientComponent
      },
      {
        path: 'addVarientCategory',
        component: VarientCategoryComponent
      },
      {
        path: 'varientmanage',
        component: VarientManagementComponent
      },
      {
        path: "",
        component: DashbordComponent
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
        path:"brandupdate/:id",
        component: UpdateBrandComponent
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
        path:"add-brand",
        component: AddBrandComponent
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
        path: "home/:key/:id",
        component: HomeComponent,
      },
      {
        path: "home/:id",
        component: HomeComponent,
      },
      {
        path: "login",
       component: LoginComponent,
       canActivate:[loginGuardGuard]
      }, 
      {
        path: "loginotp",
        component: LoginOTPVerificationComponent,
        canActivate:[otpVerifiedGuard]
      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path:"productDisplay/:id",
        component:ProductDisplyComponent
      },
      {
        path: "shopCheckOut",
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
         path:"category",
         component:CategoryComponent
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
        path:"Add-Address",
        component:AddAddressComponent,
      },
      {
        path:"update-Address/:id",
        component:UpdateAddressComponent,
      },
   
      {
        path: "shop-product-vendor",
        component: ShopProductVendorComponent
      },
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "home/:id",
        component: HomeComponent,
      },
      {
        path: "login",
       component: LoginComponent,
       canActivate:[loginGuardGuard]
      }, 
      {
        path: "loginotp",
        component: LoginOTPVerificationComponent,
        canActivate:[otpVerifiedGuard]
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
        path: "cart/:id/:quantity",
        component: ShopCartComponent
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
      {
        path:"productDisplay/:id",
        component:ProductDisplyComponent
      }
     
    ]
    
  },

  {
    path:"vendor",
    component: HomeVendorComponent,
    canActivate:[vendorGuard],
    children:[
      {
        path:"",
        component:VendorDashboardComponent
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
        path: "shop-product-vendor",
        component: ShopProductVendorComponent
      },

    ]
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
