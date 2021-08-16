import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product/Product';
import { MobileService } from 'src/app/Services/mobile.service';
import { ProductService } from 'src/app/Services/product.service';
import { Mobiles } from '../Mobiles';

@Component({
  selector: 'app-update-mobile',
  templateUrl: './update-mobile.component.html',
  styleUrls: ['./update-mobile.component.css']
})
export class UpdateMobileComponent implements OnInit {

  productId: any
  product: Product = new Product()
  mobile: Mobiles = new Mobiles()
  updateMobileForm: FormGroup
  submitted: boolean = false
  subject: any

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductService, private mobileService: MobileService, fb: FormBuilder) {
    this.updateMobileForm=fb.group({
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

    this.mobileService.getMobilebyId(this.productId).subscribe(data => {
      this.mobile = data
    })
  }

  onSubmit() {
    this.submitted = true
    this.save()
  }

  save() {
    this.mobile.ram = this.updateMobileForm.controls.ram.value
    this.mobile.rom = this.updateMobileForm.controls.rom.value
    this.mobile.camera = this.updateMobileForm.controls.camera.value
    this.mobile.resolution= this.updateMobileForm.controls.resolution.value
    this.mobile.sim = this.updateMobileForm.controls.sim.value
    this.mobile.processor = this.updateMobileForm.controls.processor.value
    this.mobile.os = this.updateMobileForm.controls.os.value
    this.mobile.color = this.updateMobileForm.controls.color.value
    this.mobile.battery = this.updateMobileForm.controls.battery.value

    this.mobileService.updateNewMobile(this.productId, this.mobile).subscribe(data => {
      console.log(data)
    })

    this.mobile = new Mobiles()
    console.log("Mobile data updated " + this.mobile)
    this.router.navigate(['home']);
  }

  cancel(): void {
    // this.updateProductForm.reset()
    this.router.navigate(['dashboard/products']);
  }
  
}
