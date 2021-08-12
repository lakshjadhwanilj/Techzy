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

  subject:any;
  userId:any;
  cartList:CartItem[]=[];
  quantity:string;
  cartItemForm:FormGroup;
  newCartItem:CartItem;
  constructor(fb:FormBuilder, private activatedRoute: ActivatedRoute, private router: Router,private cartService:CartService) { 

    this.cartItemForm = fb.group({
      newQuantity: ''
    })
  }

  ngOnInit(): void {

    this.loadData()
  }
loadData(){
  this.subject = this.activatedRoute.paramMap.subscribe(params => {
    this.userId = params.get('userId')
  })

  this.cartService.getAllCartItemsByUserId( this.userId ).subscribe(data=>{
    this.cartList = data;
    console.log(this.cartList)
  })
}
onDelete(cartItemId:number)
{
  this.cartService.deleteCartItem(cartItemId).subscribe(data=>console.log(data))
}


get newQuantity(){
  return this.cartItemForm.get('newQuantity')
}

updateQuantity(cartItem: CartItem)
{
  cartItem.quantity = this.cartItemForm.controls.newQuantity.value;
  this.cartService.updateCartItemQuantity(cartItem.cartItemId,cartItem).subscribe(data=>console.log(data))
}

}
