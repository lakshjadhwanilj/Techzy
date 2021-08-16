import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  grandTotal: any;

  constructor(private router: Router) {
    // calling render method of paypal button
    render({
      id:'#myPaypalButtons',
      currency:'INR',
      value:"30000",
      onApprove:(details) => {
        alert("Transaction Successfull")
        this.router.navigate(['home'])
      }
    })
   }

  ngOnInit(): void {
    // getting grand total
    this.grandTotal = sessionStorage.getItem('grandTotal')
    console.log(this.grandTotal)
  }

}
