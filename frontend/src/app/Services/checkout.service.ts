import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Checkout } from '../checkout/Checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private baseUrl = 'http://localhost:8075/tech/v1'

  constructor(private http: HttpClient) { }

  makePayment(payment:Checkout){
    return this.http.post(this.baseUrl+"/payment",payment)
  }
  getAllPaymentByUserId(userId:number){
    return this.http.get<any[]>(this.baseUrl + "/payments/"+ userId )
  }
  getPayment(paymentId:number){
    return this.http.get<any>(this.baseUrl + "/payment/" + paymentId)

  }
}
