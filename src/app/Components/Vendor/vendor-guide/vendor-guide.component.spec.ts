import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorGuideComponent } from './vendor-guide.component';

describe('VendorGuideComponent', () => {
  let component: VendorGuideComponent;
  let fixture: ComponentFixture<VendorGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorGuideComponent]
    });
    fixture = TestBed.createComponent(VendorGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
