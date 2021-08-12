import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from '../User';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:User = new User();
  userName: string;
  userEmail: string;
  userPassword: string;
  userEmailConst: any;
  userIdConst: any;
  subject: any;
  userId: any;

  

  userObj: User = new User();
  userIdNum : number;


  updateUserProfileForm:FormGroup;
  error:string = '';
  submitted: boolean = false;
  constructor(fb: FormBuilder, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.updateUserProfileForm = fb.group({	
            var_name:	['',[ Validators.required]],							
            var_email: ['', [Validators.required]],									
            var_password: ['',[ Validators.required]]	
    });
   }
   get var_name(){
    return this.updateUserProfileForm.get('var_name');
  }

   get var_email(){
     return this.updateUserProfileForm.get('var_email');
   }

   get var_password(){
     return this.updateUserProfileForm.get('var_password');
   }
   newUser(): void {
    this.submitted = false;
    this.user = new User();
  }



   save() {
   
   }

   onSubmit(){
     this.submitted = true;
     this.error = '';
     if(this.updateUserProfileForm.valid){
      this.userName = this.updateUserProfileForm.controls.var_name.value;
      this.userEmail = this.updateUserProfileForm.controls.var_email.value;
      this.userPassword = this.updateUserProfileForm.controls.var_password.value;
      console.log('name: '+this.userName);
      console.log('email: '+this.userEmail);
      console.log('password: '+this.userPassword);
      this.updateUserProfileForm.reset();
      this.userObj.userName=this.userName;
      this.userObj.userEmail=this.userEmail;
      this.userObj.userPassword=this.userPassword;
      this.updateUser(this.userId);
      // this.user = new User();
      //sessionStorage.setItem(this.userEmail)
      // console.log("User added" + this.user);
     }
   }
   updateUser(userId:number){
   this.userService.updateUser(userId, this.userObj)
    .subscribe((data: any) => {
      console.log(data);
    })
  }
   getUser(userId:number){

    this.userService.getUserById(userId)
    .subscribe((data: any) => {
      this.userObj = data;
      
    }
    )
  }
  ngOnInit(): void {
    this.subject=this.activatedRoute.paramMap.subscribe(params=>{this.userId=params.get('userId')})
    this.userService.getUserById(this.userId).subscribe(data=>{this.userObj=data})
    
    //  const userEmail=sessionStorage.getItem("userEmail");
    // const userId=sessionStorage.getItem("userId");
   
    // if(userEmail!="" && userId!=""){
    //   if(!userId) {							
    //     alert("Invalid action.")							
    //     this.router.navigate(['home']);							
    //     // return;							
    //   }	
    //   this.userIdNum=Number(userId);
    //   this.userEmailConst=userEmail;
    //   this.userIdConst=this.userIdNum;
    //   this.getUser(this.userIdNum);
    //   console.log(userEmail);
    //   console.log(userId);
      
   

    
  }


}
