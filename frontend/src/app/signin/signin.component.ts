import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { UserService } from '../Services/user.service';
import { User } from '../user/User';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinform:FormGroup;
  userEmail:string;
  userPassword:string;
  submitted: boolean = false;
  invalidLogin: boolean=false;
  userList:User[]=[];
  flag: number=0;
  constructor(fb: FormBuilder, private router:Router,private userService:UserService) {
    this.signinform = fb.group({									
            var_email: ['', [Validators.required]],									
            var_password: ['',[ Validators.required]]	
    });
    
   }

   get var_email(){
     return this.signinform.get('var_email');
   }

   get var_password(){
     return this.signinform.get('var_password');
   }
   loadUsersData(){
    this.userService.getUserList().subscribe(
      data =>
      {
        this.userList = data;
      }
    )
  
  }

   onSubmit(){
     
     this.submitted = true;
     if(this.signinform.valid){
       this.userEmail=this.signinform.controls.var_email.value;
       this.userPassword=this.signinform.controls.var_password.value;
    
      
      for(var user of this.userList){
         if(user.userEmail==this.userEmail && user.userPassword==this.userPassword){
          sessionStorage.setItem("userEmail",this.userEmail)
          sessionStorage.setItem("userId",(user.userId).toString())
          this.router.navigate(['home']);
          this.signinform.reset();
          this.invalidLogin=false;
          this.flag=1;
          break;
        }
       }
    if(this.flag==1){
      this.invalidLogin=false;
     }
    else{
      this.invalidLogin=true;
    }
     }
    }

  ngOnInit(): void {
    this.loadUsersData();  
  }
}

