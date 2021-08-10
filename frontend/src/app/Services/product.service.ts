import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8095/api/v1'

  constructor(private http: HttpClient) { }

  getAllProducts() {
    console.log('This method will get all products from postman!')
    return 'List of Products' // this.http.get<any[]>(this.baseUrl + '/products')
  }

  getProductById(productId: any) {
    console.log('This method will get product by id from postman')
    console.log('Product Id: ' + productId)
    return 'A single product' // this.http.get<any>(this.baseUrl + '/product/' + productId)
  }


}
