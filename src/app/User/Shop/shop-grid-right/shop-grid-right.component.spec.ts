import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGridRightComponent } from './shop-grid-right.component';

describe('ShopGridRightComponent', () => {
  let component: ShopGridRightComponent;
  let fixture: ComponentFixture<ShopGridRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopGridRightComponent]
    });
    fixture = TestBed.createComponent(ShopGridRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
