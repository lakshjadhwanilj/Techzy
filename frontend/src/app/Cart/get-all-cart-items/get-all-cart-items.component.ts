import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product/Product';
import { CartService } from 'src/app/Services/cart.service';
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
  
  
  constructor(fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private cartService: CartService, private productService: ProductService) {
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
      // let currentUrl = this.router.url;
      // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      //     this.router.navigate([currentUrl]);
      //     console.log(currentUrl);
      // });
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
    let grandTotal: number = 0
    for (let item of this.cartList) {
      grandTotal += item.productPrice * item.quantity
    }
    return grandTotal
  }

}
