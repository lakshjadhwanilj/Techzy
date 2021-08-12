import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from '../User';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {

  userList : User[] = [];
 
  constructor(private UserService: UserService) {

   }

  ngOnInit(): void {
    this.loadUsersData();
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
