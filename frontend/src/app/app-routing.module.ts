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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'products', component: GetAllProductsComponent },
  { path: 'users' , component: GetAllUsersComponent},
  { path: 'user', component: UserbyIdComponent},
  {path: 'userProfile/:userId', component: UserProfileComponent},
  { path: 'products/:productId', component: GetProductByIdComponent },
  { path: 'newProduct', component: AddProductComponent },
  { path: 'updateProduct/:productId', component: UpdateProductComponent },
  { path: 'cartItems/:userId', component: GetAllCartItemsComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
