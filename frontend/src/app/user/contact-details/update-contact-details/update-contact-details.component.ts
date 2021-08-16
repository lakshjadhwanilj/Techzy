import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { ContactDetails } from '../../ContactDetails';
import { User } from '../../User';


@Component({
  selector: 'app-update-contact-details',
  templateUrl: './update-contact-details.component.html',
  styleUrls: ['./update-contact-details.component.css']
})
export class UpdateContactDetailsComponent implements OnInit {

  user:User = new User();
  contactDetails:ContactDetails = new ContactDetails();
  contactDetailsRef:ContactDetails;
  primaryPhoneNo: string;
  secondaryPhoneNo: string;
  primaryAddress: string;
  shippingAddress:string;
  userIdNum:number;

  contactForm:FormGroup;
  submitted: boolean = false;
  constructor(fb: FormBuilder, private userService: UserService, private router: Router) {
    this.contactForm = fb.group({	
            var_primPhoneNo:	['',[ Validators.required]],							
            var_primAddress: ['', [Validators.required]],
            var_secondaryPhoneNo:[''],
            var_shippingAddress:['']								
    });
   }
   get var_primPhoneNo(){
    return this.contactForm.get('var_primPhoneNo');
  }

   get var_primAddress(){
     return this.contactForm.get('var_primAddress');
   }

   get var_secondaryPhoneNo(){
     return this.contactForm.get('var_secondaryPhoneNo');
   }

   get var_shippingAddress(){
    return this.contactForm.get('var_shippingAddress');
  }

   save() {
    this.contactDetails.primaryPhoneNo=this.primaryPhoneNo;
    this.contactDetails.secondaryPhoneNo=this.secondaryPhoneNo;
    this.contactDetails.primaryAddress=this.primaryAddress;
    this.contactDetails.shippingAddress=this.shippingAddress;
    console.log(this.contactDetails);
    this.userService.updateContact(this.userIdNum,this.contactDetails).subscribe(data =>{
      console.log(data)
    })
    this.router.navigate(['userProfile'])
   }

   getUser(userId: number) {
    this.userService.getUserById(userId)
    .subscribe((data: any) => {
      this.user = data;
      this.contactDetailsRef = this.user.cd;
      console.log(this.contactDetailsRef)
      
    }
    )
    
  }

   onSubmit(){
     this.submitted = true;
     if(this.contactForm.valid){
      this.primaryPhoneNo = this.contactForm.controls.var_primPhoneNo.value;
      this.secondaryPhoneNo = this.contactForm.controls.var_secondaryPhoneNo.value;
      this.primaryAddress = this.contactForm.controls.var_primAddress.value;
      this.shippingAddress = this.contactForm.controls.var_shippingAddress.value;
      console.log('Phone no: '+this.primaryPhoneNo);
      console.log('Secondary Phone no: '+this.secondaryPhoneNo);
      console.log('Primary address: '+this.primaryAddress);
      console.log('Secondary address: '+this.shippingAddress);
      this.save();
     }
   }

  //  handleInput(event){

  //  }

  
  ngOnInit(): void {
    if(sessionStorage.getItem("userId")!=null){							
      let userId = sessionStorage.getItem("userId");	
      this.userIdNum = Number(userId);	
      this.getUser(this.userIdNum);					
    }
  }

}
