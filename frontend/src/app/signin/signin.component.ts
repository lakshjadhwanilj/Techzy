import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinform:FormGroup;
  error:string = '';
  submitted: boolean = false;
  constructor(fb: FormBuilder) {
    this.signinform = fb.group({									
            var_email: ['', Validators.required, Validators.email],									
            var_password: ['', Validators.required]	
    });
   }

   get var_email(){
     return this.signinform.get('var_email');
   }

   get var_password(){
     return this.signinform.get('var_password');
   }

   onSubmit(){
     this.submitted = true;
     this.error = '';
     if(this.signinform.valid){
      console.log('you submitted data: '+this.signinform.controls.var_email.value);
     }
     else{
      this.error = "red-border";
       console.log('There is problem with the form');
     }
   }

  ngOnInit(): void {
    
  }

}
