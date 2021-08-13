import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product/Product';
import { ProductService } from 'src/app/Services/product.service';
import { UserService } from 'src/app/Services/user.service';
import { WishListService } from 'src/app/Services/wish-list.service';
import { WishListItems } from 'src/app/WishList/get-all-wish-list-items/WishListItems';
import { User } from '../User';


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
  product:Product = new Product()

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


  updateUserProfileForm:FormGroup;
  error:string = '';
  submitted: boolean = false;
  constructor(fb: FormBuilder,private productService: ProductService, private wishListService:WishListService, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
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
    if(sessionStorage.getItem("userId")!=null){							
      let userId = sessionStorage.getItem("userId");	
      this.userIdNum = Number(userId);	
      this.getUser(this.userIdNum);	
    }
    //this.subject=this.activatedRoute.paramMap.subscribe(params=>{this.userId=params.get('userId')})
    //this.userService.getUserById(this.userId).subscribe(data=>{this.userObj=data})
    
    // this.subject_wish = this.activatedRoute.paramMap.subscribe(params => {
    //   this.userId = params.get('userId')
    // })

    this.wishListService.getAllWishListItemsByUserId(this.userIdNum).subscribe(data => {
      this.wishList = data
    })
    
  }
  onDelete(wishListItemId: number) {
    this.wishListService.deleteWishListItem(wishListItemId).subscribe(data =>{
      this.ngOnInit()
      console.log(data)
    } )
    
  }

}
