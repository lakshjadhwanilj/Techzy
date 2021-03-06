import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product/Product';
import { ProductService } from 'src/app/Services/product.service';
import { UserService } from 'src/app/Services/user.service';
import { WishListService } from 'src/app/Services/wish-list.service';
import { User } from '../User';
import * as CryptoJS from 'crypto-js';
import { CheckoutService } from 'src/app/Services/checkout.service';
import { Checkout } from 'src/app/checkout/Checkout';
import { WishListItems } from '../WishListItems';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

/*************************   wishlist part ***************************** */
  subject_wish: any;
  wishList: WishListItems[]=[];
  productList:any[] = [];
  deleted:boolean = false;
  product:Product = new Product()

  // orders / payments 
  ordersList: Checkout[] = []

//******************user part************* */
  
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
  encryptedPassword:string;

  updateUserProfileForm:FormGroup;
  error:string = '';
  submitted: boolean = false;

  constructor(fb: FormBuilder, private wishListService:WishListService, private userService: UserService, private checkoutServcie: CheckoutService, private router: Router, private activatedRoute: ActivatedRoute) {
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



  encrypt(password:String){
    return CryptoJS.AES.encrypt(password.trim(),'Techzy123').toString();
  }
  

   onSubmit(){
     this.error = '';
     if(this.updateUserProfileForm.valid){
      this.userName = this.updateUserProfileForm.controls.var_name.value;
      this.userEmail = this.updateUserProfileForm.controls.var_email.value;
      this.userPassword = this.updateUserProfileForm.controls.var_password.value;
      this.userObj.userName=this.userName;
      this.userObj.userEmail=this.userEmail;
      this.encryptedPassword = this.encrypt(this.userPassword);
      this.userObj.userPassword= this.encryptedPassword;
      this.updateUser(this.userIdNum);
      // this.user = new User();
      sessionStorage.setItem("userName",this.userObj.userName);
      //this.ngOnInit();
      // console.log("User added" + this.user);
     }
     this.submitted = true;
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
    if(sessionStorage.getItem("userId")!=null){
      let userId = sessionStorage.getItem("userId");	
      this.userIdNum = Number(userId);	

      this.getUser(this.userIdNum);	
    }

    this.wishListService.getAllWishListItemsByUserId(this.userIdNum).subscribe(data => {
      this.wishList = data
    })

    this.checkoutServcie.getAllPaymentByUserId(this.userIdNum).subscribe(data => {
      this.ordersList = data
    })
    
  }
  onDelete(wishListItemId: number) {
    this.wishListService.deleteWishListItem(wishListItemId).subscribe(data =>{
      this.ngOnInit()
      console.log(data)
    } )
    this.deleted = true;
  }

}
