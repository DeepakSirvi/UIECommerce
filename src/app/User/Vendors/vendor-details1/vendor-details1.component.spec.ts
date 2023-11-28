import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDetails1Component } from './vendor-details1.component';

describe('VendorDetails1Component', () => {
  let component: VendorDetails1Component;
  let fixture: ComponentFixture<VendorDetails1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorDetails1Component]
    });
    fixture = TestBed.createComponent(VendorDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
