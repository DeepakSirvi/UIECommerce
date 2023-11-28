import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFullwidthComponent } from './shop-fullwidth.component';

describe('ShopFullwidthComponent', () => {
  let component: ShopFullwidthComponent;
  let fixture: ComponentFixture<ShopFullwidthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopFullwidthComponent]
    });
    fixture = TestBed.createComponent(ShopFullwidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
