import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCheckoutComponent } from './shop-checkout.component';

describe('ShopCheckoutComponent', () => {
  let component: ShopCheckoutComponent;
  let fixture: ComponentFixture<ShopCheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopCheckoutComponent]
    });
    fixture = TestBed.createComponent(ShopCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
