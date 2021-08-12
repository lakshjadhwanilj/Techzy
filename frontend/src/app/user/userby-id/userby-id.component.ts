import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from '../User';

@Component({
  selector: 'app-userby-id',
  templateUrl: './userby-id.component.html',
  styleUrls: ['./userby-id.component.css']
})
export class UserbyIdComponent implements OnInit {
  userObj: User = new User();
  userId:number=0;

  // notFound: boolean=true;
  

  constructor(private userService:UserService) {

   }

  ngOnInit(): void {
  }
  onSearch(){
    console.log("Inside search" + this.userId);
    this.userService.getUserById(this.userId)
    .subscribe((data: any) => {
      this.userObj = data;
    }
    // ,
    // (error) => {
    //   console.log("User not found");
    //   this.notFound=true;
    // }
    )

  }
}

