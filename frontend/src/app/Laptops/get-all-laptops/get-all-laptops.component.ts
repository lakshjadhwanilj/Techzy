import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-get-all-laptops',
  templateUrl: './get-all-laptops.component.html',
  styleUrls: ['./get-all-laptops.component.css']
})
export class GetAllLaptopsComponent implements OnInit {

  productList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.productService.getAllLaptops().subscribe(data => {
      this.productList = data
    })
  }

}
