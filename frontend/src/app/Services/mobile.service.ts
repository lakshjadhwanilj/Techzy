import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  private baseUrl = 'http://localhost:8075/tech/v1'

  constructor(private http: HttpClient) { }

  getMobilebyId(productId: any) {
    return this.http.get<any>(this.baseUrl + '/mobiles/' + productId)
  }

  addNewMobile(productId: any, mobile: Object) {
    return this.http.post(this.baseUrl + '/mobiles/' + productId, mobile)
  }
  
  deleteMobile(productId: any) {
    return this.http.delete(this.baseUrl + '/mobiles/' + productId)
  }

  updateNewMobile(productId: any, mobile: Object) {
    return this.http.put(this.baseUrl + '/mobiles/' + productId, mobile)
  }

}
