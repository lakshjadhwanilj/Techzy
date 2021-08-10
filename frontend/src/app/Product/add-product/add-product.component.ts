import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:Product = new Product();
  submitted = false;
  constructor(private productService: ProductService) { }
  ngOnInit() {
  }
  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }
 save() {
   this.productService.addNewProduct(this.product)
     .subscribe(data => console.log(data), error => console.log(error));
     this.product = new Product();
     console.log("Product added" + this.product);
  }
  onSubmit() {
   this.submitted = true;
     this.save();
 }

}

