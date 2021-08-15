import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  private baseUrl = 'http://localhost:8075/tech/v1'

  constructor(private http: HttpClient) { }

  getLaptopbyId(productId: any) {
    return this.http.get<any>(this.baseUrl + '/laptops/' + productId)
  }

  addNewLaptop(productId: any, laptop: Object) {
    return this.http.post(this.baseUrl + '/laptops/' + productId, laptop)
  }
  
  deleteLaptop(productId: any) {
    return this.http.delete(this.baseUrl + '/laptops/' + productId)
  }

  updateNewLaptop(productId: any, laptop: Object) {
    return this.http.put(this.baseUrl + '/laptops/' + productId, laptop)
  }
}
