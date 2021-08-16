import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product/Product';
import { LaptopService } from 'src/app/Services/laptop.service';
import { ProductService } from 'src/app/Services/product.service';
import { Laptops } from '../Laptops';

@Component({
  selector: 'app-add-laptop',
  templateUrl: './add-laptop.component.html',
  styleUrls: ['./add-laptop.component.css']
})
export class AddLaptopComponent implements OnInit {

  productId: any
  product: Product = new Product()
  laptop: Laptops = new Laptops()
  addLaptopForm: FormGroup
  submitted: boolean = false
  subject: any

  constructor(private laptopService: LaptopService, private productService: ProductService, fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.addLaptopForm=fb.group({
      ram: '',
      rom: '',
      camera: '',
      resolution: '',
      usbSlots: '',
      processor: '',
      os: '',
      color: '',
      battery: ''
    })
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.subject = this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('productId')
    })

    this.productService.getProductById(this.productId).subscribe(data => {
      this.product = data
    })
  }

  onSubmit() {
    this.submitted = true
    this.save()
  }

  save() {
    this.laptop.ram = this.addLaptopForm.controls.ram.value
    this.laptop.rom = this.addLaptopForm.controls.rom.value
    this.laptop.camera = this.addLaptopForm.controls.camera.value
    this.laptop.resolution= this.addLaptopForm.controls.resolution.value
    this.laptop.usbSlots = this.addLaptopForm.controls.usbSlots.value
    this.laptop.processor = this.addLaptopForm.controls.processor.value
    this.laptop.os = this.addLaptopForm.controls.os.value
    this.laptop.color = this.addLaptopForm.controls.color.value
    this.laptop.battery = this.addLaptopForm.controls.battery.value

    this.laptopService.addNewLaptop(this.productId, this.laptop).subscribe(data => {
      console.log(data)
    })
    this.laptop = new Laptops()
    console.log("Laptop data added " + this.laptop)
    this.router.navigate(['dashboard/products']);
  }

}
