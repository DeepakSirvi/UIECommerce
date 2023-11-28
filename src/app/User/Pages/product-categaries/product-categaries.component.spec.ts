import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategariesComponent } from './product-categaries.component';

describe('ProductCategariesComponent', () => {
  let component: ProductCategariesComponent;
  let fixture: ComponentFixture<ProductCategariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategariesComponent]
    });
    fixture = TestBed.createComponent(ProductCategariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
