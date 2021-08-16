import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:Product = new Product();
  userIdNum:any;
  submitted:boolean= false;
  addProductForm:FormGroup;

  constructor(private productService: ProductService, fb:FormBuilder, private router: Router) { 

    this.addProductForm=fb.group({
      productType:'',
      productName:'',
      productDesc:'',
      productPrice:'',
      productTotalQuantity:'',
      productInStock:''

    })
  }

  ngOnInit() {
    let userId = sessionStorage.getItem("userId");	
    this.userIdNum = Number(userId);	
  }

  get productType() {
    return this.addProductForm.get('productType');
  }

  get productName() {
    return this.addProductForm.get('productName');
  }

  get productDesc() {
    return this.addProductForm.get('productDesc');
  }

  get productPrice() {
    return this.addProductForm.get('productPrice');
  }

  get productTotalQuantity() {
    return this.addProductForm.get('productTotalQuantity');
  }
  
  get productInStock() {
    return this.addProductForm.get('productInStock');
  }

  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }

  save() {
    this.product.productDescription = this.addProductForm.controls.productDesc.value;
    this.product.productType = this.addProductForm.controls.productType.value;
    this.product.inStock = this.addProductForm.controls.productInStock.value;
    this.product.totalQuantity = this.addProductForm.controls.productTotalQuantity.value;
    this.product.productName = this.addProductForm.controls.productName.value;
    this.product.productPrice =  this.addProductForm.controls.productPrice.value;
    this.product.userId = this.userIdNum; 

    this.productService.addNewProduct(this.product).subscribe(data=> console.log(data))
    this.product = new Product();
    console.log("Product added" + this.product);
    this.addProductForm.reset()
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  cancel(): void {
    this.addProductForm.reset()
    this.router.navigate(['dashboard']);
  }

}

