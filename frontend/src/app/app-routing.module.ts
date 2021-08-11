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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'products', component: GetAllProductsComponent },
  { path: 'products/:productId', component: GetProductByIdComponent },
  { path: 'addnewproduct', component: AddProductComponent },
  { path: 'editProduct/:productId', component: UpdateProductComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
