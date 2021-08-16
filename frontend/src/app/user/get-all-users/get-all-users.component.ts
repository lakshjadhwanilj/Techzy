import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from '../User';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {

  userList : User[] = [];
  userObj: any;
  userId:number;
  userType: string;
  deleted:boolean = false;
  updated:boolean = false;
 
  constructor(private UserService: UserService, private router: Router) { 

   }

  ngOnInit(): void {
    this.loadUsersData();
  }
  
  deleteUser(userId:number){
    this.UserService.deleteUser(userId).subscribe(data=>
     { console.log (data);
      this.ngOnInit();
      })
    this.router.navigate(['users']);
    this.deleted = true;
  }

  updateUserType(u:User){
    
    u.userType="R";
    
    this.UserService.updateUser(u.userId,u).subscribe(data=>console.log (data))
    this.updated = true;
  }
  loadUsersData(){
    this.UserService.getUserList().subscribe(
      data =>
      {
        this.userList = data;

      }
    )
  
  }
  

}
