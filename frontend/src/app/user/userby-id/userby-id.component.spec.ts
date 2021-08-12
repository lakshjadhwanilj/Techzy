import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbyIdComponent } from './userby-id.component';

describe('UserbyIdComponent', () => {
  let component: UserbyIdComponent;
  let fixture: ComponentFixture<UserbyIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbyIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
