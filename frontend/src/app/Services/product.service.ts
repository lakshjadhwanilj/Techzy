import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 

  private baseUrl = 'http://localhost:8095/api/v1'

  constructor(private http: HttpClient) { }

  addNewProduct(product: Object): Observable<Object> {
    console.log(this.http.post(`${this.baseUrl}`+'/addnewproduct',product))
    return this.http.post(`${this.baseUrl}`+'/addnewproduct', product);
   }

   deleteProduct(id:number){
     console.log(this.http.delete<Product>(`${this.baseUrl}`+'/deleteProduct/'+id))
     return this.http.delete<Product>(`${this.baseUrl}`+'/deleteProduct/'+id);
   }

  //  updateNewProduct(id:number)
  //  {
  //   this.product = getProductById(id)
  //   console.log(this.http.put<Product>(this.baseUrl+'/updateProduct/'+id,this.product))
  //  }

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
