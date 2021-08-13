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
import { GetAllWishListItemsComponent } from './WishList/get-all-wish-list-items/get-all-wish-list-items.component';

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
    GetAllWishListItemsComponent
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
