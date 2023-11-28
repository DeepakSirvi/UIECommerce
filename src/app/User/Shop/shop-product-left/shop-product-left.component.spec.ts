import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductLeftComponent } from './shop-product-left.component';

describe('ShopProductLeftComponent', () => {
  let component: ShopProductLeftComponent;
  let fixture: ComponentFixture<ShopProductLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopProductLeftComponent]
    });
    fixture = TestBed.createComponent(ShopProductLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
