import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8075/tech/v1'

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return  this.http.get<any[]>(`${this.baseUrl}`+'/products')
  }

  getRetailerProducts(userId:number) {
    return  this.http.get<any[]>(`${this.baseUrl}`+'/retailerProducts/'+userId);
  }
  
  getProductById(productId: any) {
    return this.http.get<any>(this.baseUrl + '/products/' + productId)
  }
  
  addNewProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+'/products', product);
   }

   deleteProduct(productId:number){
     return this.http.delete(`${this.baseUrl}`+'/products/'+productId);
   }

   updateNewProduct(productId:number,product:Object)
   {
    return this.http.put<Product>(this.baseUrl+'/products/'+productId,product)
   }

}
