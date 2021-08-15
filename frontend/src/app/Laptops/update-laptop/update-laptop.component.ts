import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product/Product';
import { LaptopService } from 'src/app/Services/laptop.service';
import { ProductService } from 'src/app/Services/product.service';
import { Laptops } from '../Laptops';

@Component({
  selector: 'app-update-laptop',
  templateUrl: './update-laptop.component.html',
  styleUrls: ['./update-laptop.component.css']
})
export class UpdateLaptopComponent implements OnInit {

  productId: any
  product: Product = new Product()
  laptop: Laptops = new Laptops()
  updateLaptopForm: FormGroup
  submitted: boolean = false
  subject: any

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductService, private laptopService: LaptopService, fb: FormBuilder) {
    this.updateLaptopForm = fb.group({
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

    this.laptopService.getLaptopbyId(this.productId).subscribe(data => {
      this.laptop = data
    })
  }
  
  onSubmit() {
    this.submitted = true
    this.save()
  }

  save() {
    this.laptop.ram = this.updateLaptopForm.controls.ram.value
    this.laptop.rom = this.updateLaptopForm.controls.rom.value
    this.laptop.camera = this.updateLaptopForm.controls.camera.value
    this.laptop.resolution = this.updateLaptopForm.controls.resolution.value
    this.laptop.usbSlots = this.updateLaptopForm.controls.usbSlots.value
    this.laptop.processor = this.updateLaptopForm.controls.processor.value
    this.laptop.os = this.updateLaptopForm.controls.os.value
    this.laptop.color = this.updateLaptopForm.controls.color.value
    this.laptop.battery = this.updateLaptopForm.controls.battery.value

    this.laptopService.updateNewLaptop(this.productId, this.laptop).subscribe(data => {
      console.log(data)
    })

    this.laptop = new Laptops()
    console.log("Laptop data updated " + this.laptop)
    this.router.navigate(['home']);
  }

}
