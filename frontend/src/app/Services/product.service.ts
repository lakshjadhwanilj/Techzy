import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl:string='';
  product:Product = new Product();
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
}
