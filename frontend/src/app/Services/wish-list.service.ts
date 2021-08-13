import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  private baseUrl = 'http://localhost:8075/tech/v1'

  constructor(private http:HttpClient) { }

  getAllWishListItemsByUserId(userId:number){
    return this.http.get<any[]>(this.baseUrl+"/wishlistitems/" + userId);
  }
  createWishListItem(wishListItem:Object){
    return this.http.post(this.baseUrl+"/wishlistitems",wishListItem)
  }


  deleteWishListItem(wishListItemId:number){
    return this.http.delete(this.baseUrl+"/wishlistitems/" + wishListItemId)
  }


}
