import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-get-all-mobiles',
  templateUrl: './get-all-mobiles.component.html',
  styleUrls: ['./get-all-mobiles.component.css']
})
export class GetAllMobilesComponent implements OnInit {

  productList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.productService.getAllMobiles().subscribe(data => {
      this.productList = data
    })
  }

}
