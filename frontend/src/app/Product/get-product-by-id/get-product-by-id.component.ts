import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-get-product-by-id',
  templateUrl: './get-product-by-id.component.html',
  styleUrls: ['./get-product-by-id.component.css']
})
export class GetProductByIdComponent implements OnInit {

  subject: any
  productId: any
  product: Product = new Product
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.subject = this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('productId')
      // this.product =
        this.productService.getProductById(this.productId)
    })
  }

  ngOnDestroy() {
    this.subject.unsubscribe();
  }

  onBack(): void{
    this.router.navigate(['products']);
  }

}
