import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product/Product';
import { MobileService } from 'src/app/Services/mobile.service';
import { ProductService } from 'src/app/Services/product.service';
import { Mobiles } from '../Mobiles';

@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.css']
})
export class AddMobileComponent implements OnInit {

  productId: any
  product: Product = new Product()
  mobile: Mobiles = new Mobiles()
  addMobileForm: FormGroup
  submitted: boolean = false
  subject: any
  
  constructor(private mobileService: MobileService, private productService: ProductService , fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.addMobileForm=fb.group({
      ram: '',
      rom: '',
      camera: '',
      resolution: '',
      sim: '',
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
    this.mobile.ram = this.addMobileForm.controls.ram.value
    this.mobile.rom = this.addMobileForm.controls.rom.value
    this.mobile.camera = this.addMobileForm.controls.camera.value
    this.mobile.resolution= this.addMobileForm.controls.resolution.value
    this.mobile.sim = this.addMobileForm.controls.sim.value
    this.mobile.processor = this.addMobileForm.controls.processor.value
    this.mobile.os = this.addMobileForm.controls.os.value
    this.mobile.color = this.addMobileForm.controls.color.value
    this.mobile.battery = this.addMobileForm.controls.battery.value

    this.mobileService.addNewMobile(this.productId, this.mobile).subscribe(data => {
      console.log(data)
    })
    this.mobile = new Mobiles()
    console.log("Mobile data added " + this.mobile)
    this.router.navigate(['dashboard/products']);
  }

}
