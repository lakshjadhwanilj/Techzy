import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { User } from '../user/User';
import * as CryptoJS from 'crypto-js';  

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User = new User();
  userName: string;
  userEmail: string;
  userPassword: string;
  encryptedPassword: string;


  signupform:FormGroup;
  error:string = '';
  submitted: boolean = false;
  constructor(fb: FormBuilder, private userService: UserService, private router:Router) {
    this.signupform = fb.group({	
            var_name:	['',[ Validators.required]],							
            var_email: ['', [Validators.required]],									
            var_password: ['',[ Validators.required]]	
    });
   }
   get var_name(){
    return this.signupform.get('var_name');
  }

   get var_email(){
     return this.signupform.get('var_email');
   }

   get var_password(){
     return this.signupform.get('var_password');
   }
   newUser(): void {
    this.submitted = false;
    this.user = new User();
  }



   encrypt(password:String){
      return CryptoJS.AES.encrypt(password.trim(),'Techzy123').toString();
   }

   onSubmit(){
     this.error = '';
     if(this.signupform.valid){
      this.userName = this.signupform.controls.var_name.value;
      this.userEmail = this.signupform.controls.var_email.value;
      this.userPassword = this.signupform.controls.var_password.value;
      this.encryptedPassword = this.encrypt(this.userPassword);
      console.log('name: '+this.userName);
      console.log('email: '+this.userEmail);
      console.log('password: '+this.userPassword);
      this.signupform.reset();
      this.user.userName=this.userName;
      this.user.userEmail=this.userEmail;
      this.user.userPassword=this.encryptedPassword;
      this.userService.createUser(this.user).subscribe(data => console.log(data), error => console.log(error));
      this.submitted = true;
      //this.user = new User();
      this.router.navigate(['signin']);
      //sessionStorage.setItem(this.userEmail)
      console.log("User added" + this.user);
     }
   }

  ngOnInit(): void {
    
  }


}
