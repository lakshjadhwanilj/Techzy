import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactDetailsComponent } from './add-contact-details.component';

describe('AddContactDetailsComponent', () => {
  let component: AddContactDetailsComponent;
  let fixture: ComponentFixture<AddContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContactDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
