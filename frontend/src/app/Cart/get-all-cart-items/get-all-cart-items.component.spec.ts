import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCartItemsComponent } from './get-all-cart-items.component';

describe('GetAllCartItemsComponent', () => {
  let component: GetAllCartItemsComponent;
  let fixture: ComponentFixture<GetAllCartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllCartItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
