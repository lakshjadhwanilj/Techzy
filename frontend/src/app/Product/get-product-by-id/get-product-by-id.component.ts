import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/Cart/CartItem';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { WishListService } from 'src/app/Services/wish-list.service';
import { WishListItems } from 'src/app/user/WishListItems';
import { Product } from '../Product';

@Component({
  selector: 'app-get-product-by-id',
  templateUrl: './get-product-by-id.component.html',
  styleUrls: ['./get-product-by-id.component.css'],
  template:`<app-child [chMessage]="parentMessage"></app-child> `
})
export class GetProductByIdComponent implements OnInit {

  subject: any;
  productId: any;
  product: any;
  cartItem: CartItem = new CartItem();
  wishListItem:WishListItems = new WishListItems();
  userId: any;
  parentMessage = "Hello Baccha !!!"
  
  constructor(private cartService:CartService, private wishListService:WishListService, private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.subject = this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('productId')
    })
    this.productService.getProductById(this.productId).subscribe(data => {
      this.product = data;
    })
    this.userId = sessionStorage.getItem("userId")

}

  ngOnDestroy() {
    this.subject.unsubscribe();
  }

  onBack(): void{
    this.router.navigate(['products']);
  }

  addToCart(p: any) {
    if (this.userId) {
      this.cartItem.productName = p.productName
      this.cartItem.quantity = 1
      this.cartItem.productPrice = p.productPrice
      this.cartItem.userId = this.userId
      this.cartService.createCartItem(this.cartItem).subscribe()
    } else {
      this.router.navigate(['signin'])
    }
  }
  addToWishList(p:any){
    if (this.userId) {
      this.wishListItem.productName= p.productName
      this.wishListItem.userId = this.userId
      this.wishListService.createWishListItem(this.wishListItem).subscribe()
    }
    else{
      this.router.navigate(['signin'])
    }
  }
}
