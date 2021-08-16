import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/Cart/CartItem';
import { CartService } from 'src/app/Services/cart.service';
import { LaptopService } from 'src/app/Services/laptop.service';
import { MobileService } from 'src/app/Services/mobile.service';
import { ProductService } from 'src/app/Services/product.service';
import { WishListService } from 'src/app/Services/wish-list.service';
import { WishListItems } from 'src/app/user/WishListItems';
import { Product } from '../Product';

@Component({
  selector: 'app-get-product-by-id',
  templateUrl: './get-product-by-id.component.html',
  styleUrls: ['./get-product-by-id.component.css'],
  template:`<app-child [chMessage]="parentMessage"></app-child> `
})
export class GetProductByIdComponent implements OnInit {

  subject: any;
  productId: any;
  product: any;
  item: any;
  cartItem: CartItem = new CartItem();
  wishListItem:WishListItems = new WishListItems();
  userId: any;
  clicked:boolean = false;

  ram:any;
  rom:any;
  camera:any;
  processor:any;
  resolution:any;
  os:any;
  color:any;
  sim:any;
  usbSlots:any;
  battery:any;
  
  constructor(private cartService:CartService, private wishListService:WishListService, private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductService, private mobileService: MobileService, private laptopService: LaptopService) { }

  ngOnInit(): void {
    this.loadData();
    this.getProductTypeDetails();
  }
  
  loadData() {
    this.subject = this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('productId')
    })
    this.productService.getProductById(this.productId).subscribe(data => {
      this.product = data;
    })
    this.userId = sessionStorage.getItem("userId")
  }

  getProductTypeDetails() {
    if (this.product.productType === 'M') {
      this.mobileService.getMobilebyId(this.productId).subscribe(data => {
        this.item = data
      })
    } else if (this.product.productType === 'L') {
      this.laptopService.getLaptopbyId(this.productId).subscribe(data => {
        this.item = data
      })
    }
  }

  getAllFeatures() {

    this.ram = this.item.ram;
    this.rom = this.item.rom;
    this.camera = this.item.camera;
    this.resolution = this.item.resolution;
    this.os = this.item.os;
    this.color = this.item.color;
    this.battery = this.item.battery;
    this.processor = this.item.processor;
    if(this.product.productType === 'M')
      {
        this.sim = this.item.sim;
      }
    else if(this.product.productType === 'L')
    {
      this.usbSlots = this.item.usbSlots;
    }

  }

  // getColor() {
  //   return this.item.color
  // }

  // getOS() {
  //   return this.item.os
  // }
  
  // getResolution() {
  //   return this.item.resolution
  // }
  
  // getCamera() {
  //   return this.item.camera
  // }
  
  // getProcessor() {
  //   return this.item.processor
  // }
  
  // getRam() {
  //   return this.item.ram
  // }
  
  // getRom() {
  //   return this.item.rom
  // }
  
  // getBattery() {
  //   return this.item.battery
  // }

  // getFeature() {
  //   if (this.product.productType === 'M') {
  //     return this.item.sim
  //   } else if (this.product.productType === 'L') {
  //     return this.item.usbSlots
  //   }
  // }

  ngOnDestroy() {
    this.subject.unsubscribe();
  }

  onBack(): void{
    this.router.navigate(['products']);
  }

  addToCart(p: any) {
    this.clicked = true;
    console.log(this.clicked)
    if (this.userId) {
      this.cartItem.productName = p.productName
      this.cartItem.quantity = 1
      this.cartItem.productPrice = p.productPrice
      this.cartItem.userId = this.userId
      this.cartService.createCartItem(this.cartItem).subscribe()
      
    } else {
      this.router.navigate(['signin'])
    }
  }
  addToWishList(p:any){
    if (this.userId) {
      this.wishListItem.productName= p.productName
      this.wishListItem.userId = this.userId
      this.wishListService.createWishListItem(this.wishListItem).subscribe()
    }
    else{
      this.router.navigate(['signin'])
    }
  }
}
