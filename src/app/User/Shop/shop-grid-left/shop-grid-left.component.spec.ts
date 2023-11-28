import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGridLeftComponent } from './shop-grid-left.component';

describe('ShopGridLeftComponent', () => {
  let component: ShopGridLeftComponent;
  let fixture: ComponentFixture<ShopGridLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopGridLeftComponent]
    });
    fixture = TestBed.createComponent(ShopGridLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
