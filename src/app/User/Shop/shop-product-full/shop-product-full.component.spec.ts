import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductFullComponent } from './shop-product-full.component';

describe('ShopProductFullComponent', () => {
  let component: ShopProductFullComponent;
  let fixture: ComponentFixture<ShopProductFullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopProductFullComponent]
    });
    fixture = TestBed.createComponent(ShopProductFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
