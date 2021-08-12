import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.css']
})
export class GetAllProductsComponent implements OnInit {

  productList: Product[] = []
  
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.productService.getAllProducts().subscribe(data => {
      this.productList = data
     })
  }
}
