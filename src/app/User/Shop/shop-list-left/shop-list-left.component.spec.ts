import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopListLeftComponent } from './shop-list-left.component';

describe('ShopListLeftComponent', () => {
  let component: ShopListLeftComponent;
  let fixture: ComponentFixture<ShopListLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopListLeftComponent]
    });
    fixture = TestBed.createComponent(ShopListLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
