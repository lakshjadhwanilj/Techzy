import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  grandTotal: any;

  constructor() {
    render({
      id:'#myPaypalButtons',
      currency:'INR',
      value:"40000",
      onApprove:(details) => {
        alert("Transaction Successfull")
      }
    })
   }

  ngOnInit(): void {
    this.grandTotal = sessionStorage.getItem('grandTotal')
    console.log(this.grandTotal)
  }

}
