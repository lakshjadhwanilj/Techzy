import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { User } from '../user/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userId: any
  userName: any
  userType: any

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loggedIn()

  }

  getUserName(){
    return this.userName
  }

  loggedIn(){
    if (sessionStorage.getItem('userName') != null) {
      this.userName = sessionStorage.getItem('userName')
      this.userId = sessionStorage.getItem('userId')
      this.userType = sessionStorage.getItem('userType')
    }
  }

  logoutUser(): void{
    if (sessionStorage.getItem("userId")!=null){
      sessionStorage.removeItem("userId")
      sessionStorage.removeItem("userName")
      sessionStorage.removeItem("userEmail")
      sessionStorage.removeItem("userType")
      this.userId = ''
      this.userName = ''
      this.userType = ''
      this.router.navigate(["/signin"])
     }
   }
}



