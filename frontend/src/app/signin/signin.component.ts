import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { UserService } from '../Services/user.service';
import { User } from '../user/User';
import * as CryptoJS from 'crypto-js';

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
  invalidEmail: boolean=false;
  invalidPassword: boolean = false;
  userList:User[]=[];
  flagEmail: number=0;
  flagPassword: number=1;
  decryptedPassword:string;
  constructor(fb: FormBuilder, private router:Router,private userService:UserService) {
    this.signinform = fb.group({									
            var_email: ['', [Validators.required]],									
            var_password: ['',[ Validators.required]]	
    })
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

  decrypt(userPassword:string){
    return CryptoJS.AES.decrypt(userPassword.trim(),'Techzy123').toString(CryptoJS.enc.Utf8);
  }

   onSubmit(){
     
     this.submitted = true;
     if(this.signinform.valid){
       this.userEmail=this.signinform.controls.var_email.value;
       this.userPassword=this.signinform.controls.var_password.value;
    
      
      for(var user of this.userList){
        if (user.userEmail == this.userEmail) {
          this.flagEmail=1;
          this.decryptedPassword =this.decrypt(user.userPassword);
          console.log(this.decryptedPassword);
          if(this.decryptedPassword == this.userPassword){
            this.flagPassword = 1; 
            sessionStorage.setItem("userName", user.userName)
            sessionStorage.setItem("userId",(user.userId).toString())
            sessionStorage.setItem("userEmail", this.userEmail)
            sessionStorage.setItem("userType", user.userType)

            this.router.navigate(['home']);
          }
          else{
            this.flagPassword = 0;
          }
          break;
        }
        else{
          this.flagEmail = 0;
        }
      }
      if(this.flagEmail == 1){
        this.invalidEmail=false;
      }
      else{
        this.invalidEmail=true;
      }
      if(this.flagPassword == 1){
        this.invalidPassword=false;
      }
      else{
        this.invalidPassword=true;
      }
     }
    }

  ngOnInit(): void {
    this.loadUsersData();  
  }
}

