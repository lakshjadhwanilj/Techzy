import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Checkout } from 'src/app/checkout/Checkout';
import { Product } from 'src/app/Product/Product';
import { CartService } from 'src/app/Services/cart.service';
import { CheckoutService } from 'src/app/Services/checkout.service';
import { ProductService } from 'src/app/Services/product.service';
import { CartItem } from '../CartItem';


@Component({
  selector: 'app-get-all-cart-items',
  templateUrl: './get-all-cart-items.component.html',
  styleUrls: ['./get-all-cart-items.component.css']
})
export class GetAllCartItemsComponent implements OnInit {

  subject: any
  userId: any
  cartList: CartItem[] = []
  cartItemForm: FormGroup
  newCartItem: CartItem
  checkOut : Checkout = new Checkout();
  
  constructor( private checkoutService:CheckoutService, fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private cartService: CartService, private productService: ProductService) {
    this.cartItemForm = fb.group({
      newQuantity: ''
    })
  }

  ngOnInit(): void {
    this.loadData()
    this.getGrandTotal()
  }
  
  loadData() {
    this.subject = this.activatedRoute.paramMap.subscribe(params => {
      this.userId = params.get('userId')
    })

    this.cartService.getAllCartItemsByUserId(this.userId).subscribe(data => {
      this.cartList = data
    })
  }

  onDelete(cartItemId: number) {
    this.cartService.deleteCartItem(cartItemId).subscribe(data => {
      console.log(data)
    })
  }

  get newQuantity() {
    return this.cartItemForm.get('newQuantity')
  }

  updateQuantity(cartItem: CartItem) {
    cartItem.quantity = this.cartItemForm.controls.newQuantity.value
    this.cartService.updateCartItemQuantity(cartItem.cartItemId, cartItem).subscribe(data => console.log(data))
  }

  getGrandTotal() {
    let grandTotal: any = 0
    for (let item of this.cartList) {
      grandTotal += item.productPrice * item.quantity
    }
    return grandTotal
  }

  checkout(grandTotal: any){

    this.checkOut.paymentAmount = grandTotal;
    this.checkOut.paymentStatus = "Successfull";
    this.checkOut.paymentType = "PayPal";
    this.checkOut.userId = this.userId;
    sessionStorage.setItem('grandTotal',grandTotal)
    this.router.navigate(['payment'])
    this.cartService.deleteAllCartItemsByUserId(this.userId).subscribe(data=>console.log(data))
    this.checkoutService.makePayment(this.checkOut).subscribe(data=>console.log(data));

  }
}
