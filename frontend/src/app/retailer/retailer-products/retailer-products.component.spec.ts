import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerProductsComponent } from './retailer-products.component';

describe('RetailerProductsComponent', () => {
  let component: RetailerProductsComponent;
  let fixture: ComponentFixture<RetailerProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
