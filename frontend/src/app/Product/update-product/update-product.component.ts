import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  submitted :boolean= false;
  subject: any;
  productId: any;
  product: any;
  
  updateProductForm:FormGroup;
  var_productType:string;
  var_productName:string;
  var_productDescription:string;
  var_productPrice:string;
  var_productTotalQuantity:string;
  var_productInStock:string;



  constructor(private activatedRoute: ActivatedRoute, private router: Router,private productService: ProductService, fb:FormBuilder) { 

    this.updateProductForm=fb.group({
      productType:'',
      productName:'',
      productDescription:'',
      productPrice:'',
      productTotalQuantity:'',
      productInStock:''

    })
  }

  ngOnInit(): void {
    this.subject = this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('productId')
    })
    this.productService.getProductById(this.productId).subscribe(data =>{
      this.product = data;
  })
}
  get productType() {
    return this.updateProductForm.get('productType');
  }

  get productName() {
    return this.updateProductForm.get('productName');
  }

  get productDescription() {
    return this.updateProductForm.get('productDescription');
  }

  get productPrice() {
    return this.updateProductForm.get('productPrice');
  }

  get productTotalQuantity() {
    return this.updateProductForm.get('productTotalQuantity');
  }
  
  get productInStock() {
    return this.updateProductForm.get('productInStock');
  }
  save() {
    // this.product.productDescription = this.updateProductForm.controls.productDescription.value;
    this.product.productType = this.updateProductForm.controls.productType.value;
    this.product.inStock = this.updateProductForm.controls.productInStock.value;
    this.product.totalQuantity = this.updateProductForm.controls.productTotalQuantity.value;
    this.product.productName = this.updateProductForm.controls.productName.value;
    this.product.productPrice =  this.updateProductForm.controls.productPrice.value;
  
    this.productService.updateNewProduct(this.productId,this.product).subscribe(data=> console.log(data))
    console.log("Product Updated" + this.product);
  
    }
    onSubmit() {
     this.submitted = true;
      this.save();
   }
   delete(){
     console.log("Product Deleted")
     console.log(this.productId)
     this.productService.deleteProduct(this.productId)
   }
}
