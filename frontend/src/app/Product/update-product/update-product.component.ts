import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LaptopService } from 'src/app/Services/laptop.service';
import { MobileService } from 'src/app/Services/mobile.service';
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
  mobile: any;
  laptop: any;
  
  updateProductForm:FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductService, private mobileService: MobileService, private laptopService: LaptopService, fb: FormBuilder) {
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
      this.product = data
    })
    this.mobileService.getMobilebyId(this.productId).subscribe(data => {
      this.mobile = data
    })
    this.laptopService.getLaptopbyId(this.productId).subscribe(data => {
      this.laptop = data
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
    this.product.productDescription = this.updateProductForm.controls.productDescription.value;
    this.product.productType = this.updateProductForm.controls.productType.value;
    this.product.inStock = this.updateProductForm.controls.productInStock.value;
    this.product.totalQuantity = this.updateProductForm.controls.productTotalQuantity.value;
    this.product.productName = this.updateProductForm.controls.productName.value;
    this.product.productPrice =  this.updateProductForm.controls.productPrice.value;
  
    this.productService.updateNewProduct(this.productId,this.product).subscribe(data=> console.log(data))
    console.log("Product Updated" + this.product);
  
  }
  
  onSubmit() {
    this.submitted = true
    this.save()
  }
  
  addMoreDetails() {
    if (this.product.productType === 'M') {
      this.router.navigate(['newMobile/'+this.productId])
    } else if (this.product.productType === 'L') {
      this.router.navigate(['newLaptop/'+this.productId])
    }
  }

  editMoreDetails() {
    if (this.product.productType === 'M') {
      this.router.navigate(['updateMobile/'+this.productId])
    } else if (this.product.productType === 'L') {
      this.router.navigate(['updateLaptop/'+this.productId])
    }
  }

  // delete() {
  //   if (this.product.productType === 'M') {
  //     this.mobileService.deleteMobile(this.productId).subscribe(data => console.log(data))
  //   } else if (this.product.productType === 'L') {
  //     this.laptopService.deleteLaptop(this.productId).subscribe(data => console.log(data))
  //   }
  //   this.productService.deleteProduct(this.productId).subscribe(data => console.log(data))
  //   this.updateProductForm.reset()
  //   this.router.navigate(['home'])
  // }

  cancel(): void {
    // this.updateProductForm.reset()
    this.router.navigate(['dashboard/products']);
  }
  
}
