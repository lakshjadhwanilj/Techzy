import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/Cart/CartItem';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-get-product-by-id',
  templateUrl: './get-product-by-id.component.html',
  styleUrls: ['./get-product-by-id.component.css']
})
export class GetProductByIdComponent implements OnInit {

  subject: any;
  productId: any;
  product: any;
  cartItem: CartItem = new CartItem();
  userId: any;
  
  constructor(private cartService:CartService, private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductService) { }

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
      this.cartItem.productId = p.productId
      this.cartItem.quantity = 1
      this.cartItem.totalCost = p.productPrice * this.cartItem.quantity
      this.cartItem.userId = this.userId
      this.cartService.createCartItem(this.cartItem).subscribe()
    } else {
      this.router.navigate(['signin'])
    }
  }
}
