import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductVendorComponent } from './shop-product-vendor.component';

describe('ShopProductVendorComponent', () => {
  let component: ShopProductVendorComponent;
  let fixture: ComponentFixture<ShopProductVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopProductVendorComponent]
    });
    fixture = TestBed.createComponent(ShopProductVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
