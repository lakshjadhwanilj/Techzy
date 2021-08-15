import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllMobilesComponent } from './get-all-mobiles.component';

describe('GetAllMobilesComponent', () => {
  let component: GetAllMobilesComponent;
  let fixture: ComponentFixture<GetAllMobilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllMobilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
