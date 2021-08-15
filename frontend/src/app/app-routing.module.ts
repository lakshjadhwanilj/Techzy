import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { UpdateProductComponent } from './Product/update-product/update-product.component';
import { GetAllProductsComponent } from './Product/get-all-products/get-all-products.component';
import { GetProductByIdComponent } from './Product/get-product-by-id/get-product-by-id.component';
import { GetAllUsersComponent } from './user/get-all-users/get-all-users.component';
import { UserbyIdComponent } from './user/userby-id/userby-id.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { GetAllCartItemsComponent } from './Cart/get-all-cart-items/get-all-cart-items.component';
import { AddContactDetailsComponent } from './user/contact-details/add-contact-details/add-contact-details.component';
import { UpdateContactDetailsComponent } from './user/contact-details/update-contact-details/update-contact-details.component';
import { AddMobileComponent } from './Mobiles/add-mobile/add-mobile.component';
import { UpdateMobileComponent } from './Mobiles/update-mobile/update-mobile.component';
import { GetAllMobilesComponent } from './Mobiles/get-all-mobiles/get-all-mobiles.component';
import { GetAllLaptopsComponent } from './Laptops/get-all-laptops/get-all-laptops.component';
import { AddLaptopComponent } from './Laptops/add-laptop/add-laptop.component';
import { UpdateLaptopComponent } from './Laptops/update-laptop/update-laptop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'products', component: GetAllProductsComponent },
  { path: 'users' , component: GetAllUsersComponent},
  { path: 'user', component: UserbyIdComponent },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'products/:productId', component: GetProductByIdComponent },
  { path: 'newProduct', component: AddProductComponent },
  { path: 'updateProduct/:productId', component: UpdateProductComponent },
  { path: 'cartItems/:userId', component: GetAllCartItemsComponent },
  {path: 'userProfile/addContactDetails',component: AddContactDetailsComponent},
  { path: 'userProfile/updateContactDetails', component: UpdateContactDetailsComponent },
  { path: 'newMobile/:productId', component: AddMobileComponent },
  { path: 'updateMobile/:productId', component: UpdateMobileComponent },
  { path: 'newLaptop/:productId', component: AddLaptopComponent },
  { path: 'updateLaptop/:productId', component: UpdateLaptopComponent },
  { path: 'mobiles', component: GetAllMobilesComponent },
  { path: 'laptops', component: GetAllLaptopsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
