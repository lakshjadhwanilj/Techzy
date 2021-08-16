import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { User } from '../user/User';
import * as CryptoJS from 'crypto-js'; 

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user:User = new User();
  userEmail: string;
  userNewPassword: string;
  userConfirmPassword: string;
  encryptedPassword: string;
  passwordNotSame: boolean = false;
  
  forgotform:FormGroup;
  error:string = '';
  submitted: boolean = false;

  constructor(fb: FormBuilder, private userService: UserService, private router: Router) {
    // building the form
    this.forgotform = fb.group({								
            var_email: ['', [Validators.required]],									
            var_newPassword: ['',[ Validators.required]],
            var_confirmPassword: ['',[ Validators.required]]	
    });
   }
  
   get var_email(){
     return this.forgotform.get('var_email');
   }

   get var_newPassword(){
     return this.forgotform.get('var_newPassword');
   }

   get var_confirmPassword(){
    return this.forgotform.get('var_confirmPassword');
  }

  // encrypting the password
  encrypt(password: String) {
    return CryptoJS.AES.encrypt(password.trim(), 'Techzy123').toString();
  }

  // on submitting the form
  onSubmit() {
    this.error = '';
    // check if form is valid
    if(this.forgotform.valid){
      this.userEmail = this.forgotform.controls.var_email.value;
      this.userNewPassword = this.forgotform.controls.var_newPassword.value;
      this.userConfirmPassword = this.forgotform.controls.var_confirmPassword.value;
      // check if new password is equal to confirm password
      if(this.userNewPassword == this.userConfirmPassword){
        this.passwordNotSame = false;
        this.encryptedPassword = this.encrypt(this.userNewPassword);
        console.log('email: '+this.userEmail);
        console.log('password: '+this.userNewPassword);
        this.user.userEmail=this.userEmail;
        this.user.userPassword=this.encryptedPassword;
        this.userService.updatePassword(this.user).subscribe(data => console.log(data), error => console.log(error));
        this.submitted = true;
        console.log("Password Updated" + this.user);
      } else {
        this.passwordNotSame = true;
      }
    }
    if(this.passwordNotSame == false){
      this.router.navigate(['signin']);
    }
  }
 
  ngOnInit(): void {
  }

}
