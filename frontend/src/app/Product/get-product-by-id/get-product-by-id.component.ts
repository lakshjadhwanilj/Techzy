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
  cartItem:CartItem = new CartItem();
  userId:any;
  ran:any =1;
  
  constructor(private cartService:CartService, private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.subject = this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('productId')
    })
    this.productService.getProductById(this.productId).subscribe(data =>{
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

  addToCart(p:any){
    console.log(p)
    if(this.userId){
    // this.cartItem = p;
    this.cartItem.productId = p.productId;
    this.cartItem.quantity= this.ran;
    this.cartItem.totalCost = p.productPrice * this.cartItem.quantity;
    this.cartItem.userId= this.userId;
    console.log(this.cartItem)
    this.cartService.createCartItem(this.cartItem).subscribe()
    
    }
    else{
      this.router.navigate(['signin']);
    }
  }
}
