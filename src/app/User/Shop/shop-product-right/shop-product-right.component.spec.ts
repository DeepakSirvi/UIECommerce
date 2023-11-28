import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductRightComponent } from './shop-product-right.component';

describe('ShopProductRightComponent', () => {
  let component: ShopProductRightComponent;
  let fixture: ComponentFixture<ShopProductRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopProductRightComponent]
    });
    fixture = TestBed.createComponent(ShopProductRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
