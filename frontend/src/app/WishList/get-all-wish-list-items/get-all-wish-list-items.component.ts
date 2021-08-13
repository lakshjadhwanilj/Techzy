import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product/Product';
import { ProductService } from 'src/app/Services/product.service';
import { WishListService } from 'src/app/Services/wish-list.service';
import { WishListItems } from './WishListItems';

@Component({
  selector: 'app-get-all-wish-list-items',
  templateUrl: './get-all-wish-list-items.component.html',
  styleUrls: ['./get-all-wish-list-items.component.css'],
})
export class GetAllWishListItemsComponent implements OnInit {

  subject: any
  userId: any
  wishList: WishListItems[]=[];
  productList:any[] = [];
  
  product:Product = new Product()

  constructor(private activatedRoute: ActivatedRoute,private productService: ProductService,private wishListService:WishListService) { }

  ngOnInit(): void {
    this.loadData()
    this.loadProductName()
  }

  loadData() {
    this.subject = this.activatedRoute.paramMap.subscribe(params => {
      this.userId = params.get('userId')
    })

    this.wishListService.getAllWishListItemsByUserId(this.userId).subscribe(data => {
      this.wishList = data
    })
  }

  loadProductName(){
    for(let item of this.wishList ){
      this.productService.getProductById(item.productId).subscribe(data =>{
        this.product = data
        this.productList.push(this.product)
        console.log(this.product)
      })
    }
  }
  onDelete(wishListItemId: number) {
    this.wishListService.deleteWishListItem(wishListItemId).subscribe(data =>{
      this.ngOnInit()
      console.log(data)
    } )
    
  }
}
