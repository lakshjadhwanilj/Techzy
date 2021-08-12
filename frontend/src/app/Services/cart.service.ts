import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../Cart/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:8075/tech/v1'

  private totalQuantity:BehaviorSubject<number> = new BehaviorSubject<number>(1)
  
  private finalCost: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  getFinalCost() {
    return this.finalCost.asObservable()
  }

  getCartItemsQuantity() {
    return this.totalQuantity.asObservable()
  }

  updateCartItemsQuantity(quantity:number) {
    this.totalQuantity.next(quantity)
  }

  constructor(private http: HttpClient) { }

  getAllCartItemsByUserId(userId:number){
      return this.http.get<any[]>(this.baseUrl+'/cartItems/'+userId)
  }
  deleteCartItem(cartItemId:number){

    return this.http.delete(this.baseUrl+"/cartItems/" + cartItemId)
  }
  updateCartItemQuantity(cartItemId:number,cartItem:Object){
    return this.http.put<CartItem>(this.baseUrl+"/cartItems/"+cartItemId,cartItem);
  }
  createCartItem(cartItem:Object){
    return this.http.post(this.baseUrl+"/cartItems",cartItem)
  }

  

}
