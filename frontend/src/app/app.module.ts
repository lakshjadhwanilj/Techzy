import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { UpdateProductComponent } from './Product/update-product/update-product.component';
import { GetProductByIdComponent } from './Product/get-product-by-id/get-product-by-id.component';
import { GetAllProductsComponent } from './Product/get-all-products/get-all-products.component';
import { GetAllUsersComponent } from './user/get-all-users/get-all-users.component';
import { UserbyIdComponent } from './user/userby-id/userby-id.component';
import { NavComponent } from './nav/nav.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { GetAllCartItemsComponent } from './Cart/get-all-cart-items/get-all-cart-items.component';
import { AddContactDetailsComponent } from './user/contact-details/add-contact-details/add-contact-details.component';
import { UpdateContactDetailsComponent } from './user/contact-details/update-contact-details/update-contact-details.component';
import { GetAllWishListItemsComponent } from './WishList/get-all-wish-list-items/get-all-wish-list-items.component';
import { AddMobileComponent } from './Mobiles/add-mobile/add-mobile.component';
import { GetAllMobilesComponent } from './Mobiles/get-all-mobiles/get-all-mobiles.component';
import { UpdateMobileComponent } from './Mobiles/update-mobile/update-mobile.component';
import { AddLaptopComponent } from './Laptops/add-laptop/add-laptop.component';
import { GetAllLaptopsComponent } from './Laptops/get-all-laptops/get-all-laptops.component';
import { UpdateLaptopComponent } from './Laptops/update-laptop/update-laptop.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    AddProductComponent,
    UpdateProductComponent,
    GetProductByIdComponent,
    GetAllProductsComponent,
    GetAllUsersComponent,
    UserbyIdComponent,
    NavComponent,
    UserProfileComponent,
    GetAllCartItemsComponent,
    AddContactDetailsComponent,
    UpdateContactDetailsComponent,
    GetAllWishListItemsComponent,
    AddMobileComponent,
    GetAllMobilesComponent,
    UpdateMobileComponent,
    AddLaptopComponent,
    GetAllLaptopsComponent,
    UpdateLaptopComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
