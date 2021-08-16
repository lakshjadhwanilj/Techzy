import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-retailer-products',
  templateUrl: './retailer-products.component.html',
  styleUrls: ['./retailer-products.component.css']
})
export class RetailerProductsComponent implements OnInit {

  userIdNum:any;
  productList: Product[] = []
  updated:boolean = false;
  deleted:boolean = false;

  constructor(private productService:ProductService) { }

  getProductList(){
    this.productService.getRetailerProducts(this.userIdNum).subscribe(data => {
      this.productList = data;
     })
     console.log(this.productList)
  }

  deleteProduct(productId: number){
    this.productService.deleteProduct(productId).subscribe(data => console.log(data))
    this.deleted = true;
  }

  ngOnInit(): void {
    let userId = sessionStorage.getItem("userId");	
    this.userIdNum = Number(userId);	
    this.getProductList();
  }

}
