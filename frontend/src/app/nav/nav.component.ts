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

  loggedin:boolean=false;
  user: any;
  userId : any;
  userEmail : any;
  userName:any;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("userId")!=null){
    this.userEmail = sessionStorage.getItem("userEmail")
    this.userId = sessionStorage.getItem("userId")
    this.loggedin=true
    this.getUser(this.userId)
    this.userName=this.user.userName
    console.log(this.user)
    console.log(this.userName)
    }
  
  }
  getUser(userId:number){
    this.userService.getUserById(userId)
    .subscribe((data: any) => {
      this.user = data;
    }
    )
  }
   logoutUser():void{
     if (sessionStorage.getItem("userId")!=null){
      sessionStorage.removeItem("userId") 
      sessionStorage.removeItem("userEmail")
      this.loggedin=false
      this.router.navigate(["/signin"])
     }
   }
}



