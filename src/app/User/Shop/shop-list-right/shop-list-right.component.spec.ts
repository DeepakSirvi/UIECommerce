import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopListRightComponent } from './shop-list-right.component';

describe('ShopListRightComponent', () => {
  let component: ShopListRightComponent;
  let fixture: ComponentFixture<ShopListRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopListRightComponent]
    });
    fixture = TestBed.createComponent(ShopListRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
