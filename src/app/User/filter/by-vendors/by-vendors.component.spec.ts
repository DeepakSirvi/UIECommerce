import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByVendorsComponent } from './by-vendors.component';

describe('ByVendorsComponent', () => {
  let component: ByVendorsComponent;
  let fixture: ComponentFixture<ByVendorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByVendorsComponent]
    });
    fixture = TestBed.createComponent(ByVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
