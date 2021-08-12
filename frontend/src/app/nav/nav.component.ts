import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../user/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedin:boolean=false;
  userObj: User = new User();
  userIdNum : number;


  constructor(private userService:UserService) { }

  ngOnInit(): void {
    const userEmail=localStorage.getItem("userEmail");
    const userId=localStorage.getItem("userId");
   
    if(userEmail!="" && userId!=""){
      this.userIdNum=Number(userId);

      this.getUser(this.userIdNum);
      this.loggedin=true;
      console.log(userEmail);
      console.log(userId);
      
   }
    // this.userId=sessionStorage.getItem("userId");


   

  }
  getUser(userId:number){
    this.userService.getUserById(userId)
    .subscribe((data: any) => {
      this.userObj = data;
      
    }
    )
  }
}



