import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
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
  quantity: string
  
  cartItemForm: FormGroup
  newCartItem: CartItem

  quantityList: any

  finalCost: number
  
  constructor(fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private cartService: CartService) {
    this.cartItemForm = fb.group({
      newQuantity: ''
    })
  }

  ngOnInit(): void {
    this.loadData()
  
    // for (let c of this.cartList) {
    //   this.finalCost += c.totalCost
    // }
  }
  
  loadData() {
    this.subject = this.activatedRoute.paramMap.subscribe(params => {
      this.userId = params.get('userId')
    })

    this.cartService.getAllCartItemsByUserId(this.userId).subscribe(data => {
      this.cartList = data
    })

    this.cartService.getCartItemsQuantity().subscribe(data => {
      this.quantityList = data
    })

    this.cartService.getFinalCost().subscribe(data => {
      this.finalCost = data
    })
  }

  onDelete(cartItemId: number) {
    this.cartService.deleteCartItem(cartItemId).subscribe(data => console.log(data))
  }

  get newQuantity() {
    return this.cartItemForm.get('newQuantity')
  }

  updateQuantity(cartItem: CartItem) {
    cartItem.quantity = this.cartItemForm.controls.newQuantity.value
    this.cartService.updateCartItemQuantity(cartItem.cartItemId, cartItem).subscribe(data => console.log(data))
  }

  increment() {
    this.cartService.getFinalCost()
  }
  
  decrement() {
    this.cartService.updateCartItemsQuantity(this.quantityList - 1)
  }

}
