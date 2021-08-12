import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8075/tech/v1/";

  constructor(private http:HttpClient) {
   }

   
   getUserList(){
    console.log(this.http.get<any[]>(this.baseUrl+ 'users'))
    return this.http.get<any[]>(this.baseUrl+ 'users');
   }
   getUserById(id: number){
    return this.http.get<any>(this.baseUrl+'user/'+id);
  }
  updateUser(userId:number,user:User)
   {
    console.log(this.http.put<User>(this.baseUrl+'updateUser/'+userId,user))
    return this.http.put<User>(this.baseUrl+'updateUser/'+userId,user)
   }

    createUser(user: User) {
      console.log(this.http.post(`${this.baseUrl}`+'addnewuser', user))
      return this.http.post(`${this.baseUrl}`+'addnewuser', user);
  }
  
}
