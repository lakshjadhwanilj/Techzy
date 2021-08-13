import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../user/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedin: boolean = false
  
  user: User = new User()
  userEmail: any
  userId : any

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userEmail = sessionStorage.getItem("userEmail")
    this.userId = sessionStorage.getItem("userId")
   
    if(this.userEmail!="" && this.userId!=""){
      // this.userIdNum=userId;

      // this.getUser(this.userIdNum);
      // this.loggedin=true;
      // console.log(userEmail);
      // console.log(userId);
      
   }

  }

  getUser(userId: any) {
    this.userService.getUserById(userId).subscribe(data => {
      this.user = data;
    })
  }
}



