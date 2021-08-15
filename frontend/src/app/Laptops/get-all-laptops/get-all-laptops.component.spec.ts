import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllLaptopsComponent } from './get-all-laptops.component';

describe('GetAllLaptopsComponent', () => {
  let component: GetAllLaptopsComponent;
  let fixture: ComponentFixture<GetAllLaptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllLaptopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
