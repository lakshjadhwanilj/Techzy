import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllWishListItemsComponent } from './get-all-wish-list-items.component';

describe('GetAllWishListItemsComponent', () => {
  let component: GetAllWishListItemsComponent;
  let fixture: ComponentFixture<GetAllWishListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllWishListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllWishListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
